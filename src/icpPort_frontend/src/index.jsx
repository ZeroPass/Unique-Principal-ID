import * as React from "react";
import { render } from "react-dom";
//import { Popup } from 'reactjs-popup';
import Popup from './popup';
import 'reactjs-popup/dist/index.css';
import "../assets/custom.css"
import { icpPort_backend } from "../../declarations/icpPort_backend";

import { ICP } from "./icp";

import "../../../devlink/global.css";
import "../../../devlink1/global.css";
import "../../../devlink/UicpBody1.module.css";
import "../../../devlink1/Qr.module.css";
import { UicpBody1 } from "../../../devlink/"
import { Qr } from "../../../devlink1/"

import "./qr"




const MyHello = () => {
  const [isValid, setIsValid] = React.useState(false);
  const [id, setID] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [dynamicLink, setDynamicLink] = React.useState("");
  
  
  const submit = async () => {
    //submit button pressed, check if input is correct, tell that is not correct. If id is correct open QR popup
    if (!isValid){
      alert("CanisterID is not valid or empty");
      return false;
    }

    await setIsOpen(!isOpen);
    var androidData = {"apn":"io.zeropass.port",
                        "afl":"https://play.google.com/store/apps/details?id=io.zeropass.port",
                        "version":'0.1'};

    var iosData = {"ibi":"io.zeropass.port",
                    "isi":"1596748294",
                    "imv":10}

    var shortLinkURL = "https://portapp.page.link";
    var deepLinkURL = "https://portapp.page.link/homeMagnetLink";

    var linkOtherPlatforms = 'https://port.link/';

    var dynamicLink = ZeroPassPortWidget.render(shortLinkURL,
                  deepLinkURL,
                  androidData,
                  iosData,
                  linkOtherPlatforms,
                  {
                    userID: id, 
                    requestType: "attestation_request",
                    url: "https://icp.port.link",
                    version: 0.1
                  },
                  document.getElementById('zeropass-port-qr')
                  );
    setDynamicLink(dynamicLink);
    return true;
  }

  const closeButtonPressed = () => {
    //close popup
    setIsOpen(!isOpen);
  }

  const mainButtonPressed = () => {
    //submit button pressed, check if input is correct, tell that is not correct. If id is correct open QR popup
    location.href = dynamicLink; //must be with http
  }

  const magnetLinkPressed= () => {
    const el = document.createElement('textarea');
    el.value = dynamicLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
 

  function inputChanged(e){
    //check if the input is correct, set id and isValid variable
    const patternString = "^[a-zA-Z0-9-]+$";
    const value = e.target.value;
    console.log(value);
    try {
      const pattern = new RegExp(patternString);
      var validation = pattern.test(value);
      setID(value);
      setIsValid(validation);
      if (!validation)
       throw ("Not valid character");
    } catch (error) {
      setIsValid(false);
      alert("Not allowed character.\n\n Only characters, numbers and character '-' is allowed.")
    }
    return true;
}

return (
  <div>
    <div>
    <section id="zeropass-port-qr"></section>
      <UicpBody1
      submitButtonRuntimeProps={{ 
      onClick: submit
    }}
    inputInternetIdentityRuntimeProps={{
      onChange: inputChanged
    }}
  />
    {isOpen && <Popup
      content={<>
        <div style={{ }}>
          <Qr
          buttonPlRuntimeProps={{
            onClick: mainButtonPressed
          }}
            copyMagnetLinkRuntimeProps={{
              onClick: magnetLinkPressed
            }}
            closeButtonRuntimeProps={{
              onClick: closeButtonPressed
            }}
          />
        </div>
      </>}
      handleClose={submit}
    />}
  </div>
  </div>
);
};

render(<MyHello />, document.getElementById("app"));
