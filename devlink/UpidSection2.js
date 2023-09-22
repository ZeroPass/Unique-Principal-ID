import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./UpidSection2.module.css";

export function UpidSection2({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "upidsection2")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "upidcontainer2")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "headingsection2")}
          tag="h1"
        >
          {"Building block"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraphsection2")}>
          {
            "Unique Principal Identity (UPID) combines the ICP blockchain accounts with Port service. Port on-boards a massive Public Key Infrastructure (PKI) provided by countries and aggregated by "
          }
          <_Builtin.Link
            button={false}
            target="_blank"
            options={{
              href: "https://www.icao.int/Security/FAL/PKD/",
            }}
          >
            {"ICAO"}
          </_Builtin.Link>
          {
            " to a server or a blockchain. Port apps upload passport signature ("
          }
          <_Builtin.Link
            button={false}
            target="_blank"
            options={{
              href: "https://en.wikipedia.org/wiki/Biometric_passport#Data_protection",
            }}
          >
            {"AA"}
          </_Builtin.Link>
          {
            ") that gets authenticated up the trust-chain to your country authority, to confirm passport you just tapped is legit and currently in your possession. This services makes ICP Principal IDs unique, and allows any ICP dapp to access it."
          }
          <br />
          {"‍"}
        </_Builtin.Paragraph>
        <_Builtin.Heading
          className={_utils.cx(_styles, "headingsection2")}
          tag="h1"
        >
          {"ICP"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraphsection2")}>
          {
            "For UPID we are hosting this website on the ICP, the site is calling the Canister we deployed, and the Canister is using using HTTP outcall to check if accounts are unique."
          }
          <br />
          {
            "As a fellow onchain maximalists, we would love to move if from server to ICP. We see potential in expanding HTTP outcall capability that can enable Chip Authentication (CA) on passports that are missing Active Authentication (AA)."
          }
          <br />
          {"‍"}
        </_Builtin.Paragraph>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
