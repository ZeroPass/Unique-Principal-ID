import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Qr.module.css";

export function Qr({
  as: _Component = _Builtin.Block,
  qrImage = "https://uploads-ssl.webflow.com/60a5ad862f20836237dc00cc/60e4e71070b392077b23ee63_Capture.PNG",

  buttonPlLink = {
    href: "#",
  },

  copyMagnetLinkRuntimeProps = {},
  closeButtonRuntimeProps = {},
  qrZoneRuntimeProps = {},

  buttonPl1Link = {
    href: "#",
  },

  buttonPlRuntimeProps = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "divbackgroundblackpl")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "divwindowpl")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "div1portpl")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "div1apl")} tag="div" />
          <_Builtin.Block className={_utils.cx(_styles, "div1apl")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "imagepl")}
              loading="lazy"
              width="60"
              height="auto"
              alt="__wf_reserved_inherit"
              src="https://uploads-ssl.webflow.com/60a5ad862f20836237dc00cc/612ed38d0927523d80585987_Port.link.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block className={_utils.cx(_styles, "div1xpl")} tag="div">
            <_Builtin.Link
              className={_utils.cx(_styles, "linkblockxpl")}
              button={false}
              options={{
                href: "#",
              }}
              {...closeButtonRuntimeProps}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "xmouseover2pl")}
                loading="lazy"
                width="16"
                height="auto"
                alt="__wf_reserved_inherit"
                src="https://uploads-ssl.webflow.com/60a5ad862f20836237dc00cc/60e60642039bc40a4bca256d_x-dark.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "text1portpl")}
            tag="div"
          >
            {"Attest"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "text2portpl")}
            tag="div"
          >
            {
              "Scan the QR code with Port app, or press the button if the Port app is on the same device."
            }
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "divqrpl")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "image-2pl")}
            loading="lazy"
            height="auto"
            width="226"
            alt="__wf_reserved_inherit"
            id="qr-code"
            src="https://uploads-ssl.webflow.com/60a5ad862f20836237dc00cc/60e4e71070b392077b23ee63_Capture.PNG"
            {...qrZoneRuntimeProps}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-buttonpl")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "textlink1pl")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "link-2")}
              button={false}
              options={{
                href: "#",
              }}
              {...copyMagnetLinkRuntimeProps}
            >
              {"copy magnet link"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "buttonpl")}
            button={true}
            options={{
              href: "#",
            }}
            {...buttonPlRuntimeProps}
          >
            {"Launch Port"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "divdownloadpl")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "textlink2pl")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "linkpl")}
              button={false}
              options={{
                href: "#",
              }}
            >
              {"Download Port mobile app"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
