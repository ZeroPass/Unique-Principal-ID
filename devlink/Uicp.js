import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Uicp.module.css";

export function Uicp({
  as: _Component = _Builtin.BlockContainer,
  inputInternetIdentityRuntimeProps = {},
  submitButtonRuntimeProps = {},
}) {
  return (
    <_Component
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.VFlex className={_utils.cx(_styles, "body1box1")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h1">
          {"Internet Identity, "}
          <br />
          {"now with Sybil protection"}
        </_Builtin.Heading>
      </_Builtin.VFlex>
      <_Builtin.VFlex className={_utils.cx(_styles, "flex-block")} tag="div">
        <_Builtin.HFlex
          className={_utils.cx(_styles, "flex-block-2")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image")}
            loading="eager"
            width="100"
            height="auto"
            alt="__wf_reserved_inherit"
            src="https://uploads-ssl.webflow.com/6503a8903ae81612c6696eb5/6504fa1464c3f1636ef664f4_passport.svg"
          />
        </_Builtin.HFlex>
        <_Builtin.HFlex className={_utils.cx(_styles, "body1flex2")} tag="div">
          <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
            <_Builtin.FormForm
              className={_utils.cx(_styles, "form")}
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
            >
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "inputinternetidentity")}
                name="name"
                maxLength={256}
                data-name="Name"
                placeholder="Internet Identity"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                id="InputInternetIdentity"
                {...inputInternetIdentityRuntimeProps}
              />
              <_Builtin.FormButton
                className={_utils.cx(_styles, "submit-button")}
                type="submit"
                value="Make it Unique"
                data-wait="Please wait..."
                {...submitButtonRuntimeProps}
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.HFlex>
      </_Builtin.VFlex>
    </_Component>
  );
}
