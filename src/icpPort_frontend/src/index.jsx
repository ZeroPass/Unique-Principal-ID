import * as React from "react";
import { render } from "react-dom";
//import { Popup } from 'reactjs-popup';
import Popup from './popup';
import 'reactjs-popup/dist/index.css';

import { Principal } from '@dfinity/principal';

import "../assets/custom.css"
//import { icpPort_backend } from "../../declarations/icpPort_backend";

import { ICP } from "./icp/icp";

import "../../../devlink/global.css";
import "../../../devlink1/global.css";
import "../../../devlink/UicpBody1.module.css";
import "../../../devlink1/Qr.module.css";
import { UicpBody1 } from "../../../devlink/"
import { Qr } from "../../../devlink1/"

import { getUid } from "./tool/tools";

import "./qr";

//CONSTANTS FOR TESTING

//ICP server:
const ICP_SERVER = "http://127.0.0.1:4943";
const ICP_BACKEND_CANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai"; //'42bix-wqaaa-aaaak-ae6ya-cai'
const DEMO = true;



const MyHello = () => {
  const [isValid, setIsValid] = React.useState(false);
  const [id, setID] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [dynamicLink, setDynamicLink] = React.useState("");
  
  const callRepeatedly = async (asyncFunction, interval, duration) =>{
    let startTime = Date.now();

    const intervalId = setInterval(async () => {
        if (Date.now() - startTime > duration) {
            clearInterval(intervalId);
        } else {
            let result = await asyncFunction();
            if (result) {
                clearInterval(intervalId);
            }
        }
    }, interval);
  }
  
  const submit = async () => {
    const successdiv = document.getElementById('divsuccess');
    successdiv.style.display = "block";
    return;

    var ICPconnector = await ICP.create(ICP_SERVER, ICP_BACKEND_CANISTER_ID);
    
    //from server log: "b'|-zS\\xff\\x80-9?\\xf7\\xb5\\xbc\"\\xb0+R\\x81\\x10\\xa4-\\xdb\\x90L\\x90\\x85\\xefY)\\x02'" 
    //const ret = await get_uid([124, 45, 122, 83, 255, 128, 45, 57, 63, 247, 181, 188, 34, 176, 43, 82, 129, 16, 164, 45, 219, 144, 76, 144, 133, 239, 89, 41, 2]);
    //const somoe = getUid("xvjwh-ql4fv-5fh74-afu4t-755vx-qrlak-2sqei-kilo3-sbgjb-bpple-uqe");


    //submit button pressed, check if input is correct, tell that is not correct. If id is correct open QR popup
    if (!isValid){
      alert("Principal is not valid or empty");
      return false;
    }

    try {
      const principal = Principal.fromText(id);
    }
    catch (error) {
      alert("Principal is not in valid format");
      return false;
    }


    var uid = getUid(id); //bytes -> sha256 -> base64 -> utf8

    //check if the id has been already attested
    var isAttested = await ICPconnector.isAttested(id);
    if (isAttested && !DEMO){
      alert("Principal is already attested");
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
                    userID: uid, 
                    requestType: "attestation_request",
                    url: "https://icp.port.link",
                    version: 0.1
                  },
                  document.getElementById('zeropass-port-qr')
                  );
    setDynamicLink(dynamicLink);

    //next 10 minutes call repeatedly the isAttested function
    callRepeatedly(async () => {
      var isAttested = await ICPconnector.isAttested(id);
      if (isAttested){
        console.log("Principal is attested");
        //show on the screen that the principal is attested
        return true;
      }
      console.log("Principal is not attested");
      return false;
    }, 1000, 600000); //10 minutes

    //start checking if the is attested
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
      alert("Not allowed character.\n\nOnly characters, numbers and character '-' is allowed.")
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
