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
import { UicpBody1, UpidSection2 } from "../../../devlink/"
import { Qr } from "../../../devlink1/"

import { getUid } from "./tool/tools";

import "./qr";

//CONSTANTS FOR TESTING

//ICP server:
const ICP_SERVER = "http://127.0.0.1:4943";
const ICP_BACKEND_CANISTER_ID = "bkyz2-fmaaa-aaaaa-qaaaq-cai"; //'42bix-wqaaa-aaaak-ae6ya-cai'
const DEMO = true;

var INTERVAL_ID = null;

const MyHello = () => {

  const [isValid, setIsValid] = React.useState(false);
  const [id, setID] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [dynamicLink, setDynamicLink] = React.useState("");
  


  const setStatusMessage = (message, isError) => {
    const statusDiv = document.getElementById('statusElement');
    if (message == ""){
      statusDiv.style.display = "none";
      return;
    }
    statusDiv.style.display = "block";
    statusDiv.innerHTML = message;
    if (isError){
      statusDiv.style.color = "red";
    }
    else{
      statusDiv.style.color = "green";
    }
  }

  
  const submit = async () => {
    //clearing interval if there is more sessions
    if (INTERVAL_ID) {
      clearInterval(INTERVAL_ID);
    }

    //create ICP connector
    try{
    var ICPconnector = await ICP.create(ICP_SERVER, ICP_BACKEND_CANISTER_ID);
    }
    catch (error){
      setStatusMessage("Error connecting to ICP backend", true);
      return false;
    }

    //submit button pressed, check if input is correct, tell that is not correct. If id is correct open QR popup
    if (!isValid){
      setStatusMessage("Principal is not valid or empty", true);
      return false;
    }
    //xvjwh-ql4fv-5fh74-afu4t-755vx-qrlak-2sqei-kilo3-sbgjb-bpple-uqe
    var principal = null;
    try {
      principal = Principal.fromText(id);
    }
    catch (error) {
      console.log("Principal is not in valid format" + error);
      setStatusMessage("Principal is not in valid format", true);
      return false;
    }

    //correct format of principal
    setStatusMessage("Waiting to complete attestation...", false);
    var uid = getUid(principal); //bytes -> sha256 -> base64 -> utf8

    setStatusMessage("Checking if principal is already attested ...", false);
    //check if the id has been already attested
    var isAttested = null;
    try{
      isAttested = await ICPconnector.isAttested(principal);
      console.log("Is principal already attested? :" + isAttested);
    }
    catch (error){
      console.log("Error connecting to ICP backend" + error);
      setStatusMessage("Error connecting to ICP backend", true);
      return false;
    }
    if (isAttested){
      setStatusMessage("Principal is already attested!", false);
      console.log("Principal is already attested");
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
    setStatusMessage("Principal is not attested yet. Please wait...(attempt 1)", false);              

    let maxCalls = 20; // 10 attempts
    let callCount = 0;
    //next 10 minutes call repeatedly the isAttested function
    const intervalId = setInterval (async() => {
      callCount++;
      var isAttested = await ICPconnector.isAttested(principal);
      var outOfScope = callCount >= maxCalls
      if (isAttested) {
        if (INTERVAL_ID) {
          clearInterval(INTERVAL_ID);
        }
        console.log("Principal is attested");
        setStatusMessage("Success! Principal is attested!", false);
        return;
      }
      if (outOfScope) {
        if (INTERVAL_ID) {
          clearInterval(INTERVAL_ID);
        }
        clearInterval(this.interval);
        console.log("To many attempts");
        setStatusMessage("Timeout! Principal is not attested!", true);
        return;
      }

      console.log("Principal is not attested");
      setStatusMessage("Principal is not attested yet. Please wait... (attempt " + (callCount + 1) + ")", false);

    }, 5000); // 10 seconds
    INTERVAL_ID = intervalId;
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
    try {
      const pattern = new RegExp(patternString);
      var validation = pattern.test(value);
      setID(value);
      setIsValid(validation);
      if (!validation && value != "")
       throw ("Not valid character");
      setStatusMessage("", false);
    } catch (error) {
      setIsValid(false);
      setStatusMessage("Not allowed character.\n\nOnly characters, numbers and character '-' is allowed.", true)
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
  <UpidSection2/>
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
