import * as React from "react";
import * as Types from "./types";

declare function Qr(props: {
  as?: React.ElementType;
  qrImage?: Types.Asset.Image;
  buttonPlLink?: Types.Basic.Link;
  copyMagnetLinkRuntimeProps?: Types.Devlink.RuntimeProps;
  closeButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  qrZoneRuntimeProps?: Types.Devlink.RuntimeProps;
  buttonPl1Link?: Types.Basic.Link;
  buttonPlRuntimeProps?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
