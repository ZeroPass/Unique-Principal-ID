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
          {"UPID"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraphsection2")}>
          {
            "Unique Principal Identity (UPID) combines the ICP blockchain accounts with "
          }
          <_Builtin.Link
            className={_utils.cx(_styles, "upidlink")}
            button={false}
            options={{
              href: "#",
            }}
          >
            {"Port"}
          </_Builtin.Link>
          {
            " service. Port on-boards a massive Public Key Infrastructure (PKI) provided by countries and aggregated by "
          }
          <_Builtin.Link
            className={_utils.cx(_styles, "upidlink")}
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
            className={_utils.cx(_styles, "upidlink")}
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
        </_Builtin.Paragraph>
        <_Builtin.Heading
          className={_utils.cx(_styles, "headingsection2")}
          tag="h1"
        >
          {"Building block"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraphsection2")}>
          {
            "UPID is a building block for other dapps. It offers sybil protection for voting, ubi airdrops, and other services builders might imagine."
          }
        </_Builtin.Paragraph>
        <_Builtin.Heading
          className={_utils.cx(_styles, "headingsection2")}
          tag="h1"
        >
          {"ICP"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "paragraphsection2")}>
          {
            "For UPID we are hosting this website on the ICP, the site is calling the Canister we deployed, and the Canister is using HTTP outcall to check if accounts are unique ("
          }
          <_Builtin.Link
            className={_utils.cx(_styles, "upidlink")}
            button={false}
            target="_blank"
            options={{
              href: "https://github.com/ZeroPass/Unique-Principal-ID",
            }}
          >
            {"Github link"}
          </_Builtin.Link>
          {")."}
          <br />
          {
            "As fellow on-chain maximalists, we would love to move it from server to ICP. We see potential in expanding HTTP outcall capability that can enable Chip Authentication (CA) on passports that are missing Active Authentication (AA)."
          }
        </_Builtin.Paragraph>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
