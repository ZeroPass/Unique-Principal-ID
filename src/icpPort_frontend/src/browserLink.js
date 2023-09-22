import React from 'react';
import { QR } from "../../../devlink1/"

export class BrowserLink extends React.Component {

    constructor(props) {

        super(props);

        this.state = { count: 0 };

    }

    onClick() {

        this.setState({ count: this.state.count + 1 });

    }

    render() {
        var androidData = {
            "apn": "io.zeropass.port",
            "afl": "https://play.google.com/store/apps/details?id=io.zeropass.port",
            "version": '0.1'
        };

        var iosData = {
            "ibi": "io.zeropass.port",
            "isi": "1596748294",
            "imv": 10
        }

        var shortLinkURL = "https://portapp.page.link";
        var deepLinkURL = "https://portapp.page.link/homeMagnetLink";
        var linkOtherPlatforms = 'https://port.link/';

        var buttonXpressedFunc = () => {
            alert("Button X was pressed.");
        }


        var config = {
            userID: "fartinghouse",
            requestType: "attestation_request",
            url: "https://pomelo.port.link",
            version: 0.1
        };

        return (
            <PortWidget  androidData={androidData}
                                iosData={iosData}
                                shortLinkURL={shortLinkURL}
                                deepLinkURL={deepLinkURL}
                                linkOtherPlatforms={linkOtherPlatforms}
                                config={config}
                                callbackFunction={buttonXpressedFunc}/>
        );
    }

};