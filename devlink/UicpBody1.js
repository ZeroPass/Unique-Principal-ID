import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./UicpBody1.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bdb23d4b-8f21-4e56-562d-c478a71b8345","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bdb23d4b-8f21-4e56-562d-c478a71b8345","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":"LEFT","effectIn":true},"createdOn":1695345707150},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"bdb23d4b-8f21-4e56-562d-c478a71b8345","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"bdb23d4b-8f21-4e56-562d-c478a71b8345","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1695345707151}},"actionLists":{"a":{"id":"a","title":"MouseOver","actionItemGroups":[{"actionItems":[{"id":"a-n-4","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":true,"id":"bdb23d4b-8f21-4e56-562d-c478a71b8345"},"filters":[{"type":"saturate","filterId":"a7a0","value":200,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1695345809804},"a-2":{"id":"a-2","title":"MouseOverOut","actionItemGroups":[{"actionItems":[{"id":"a-2-n-2","actionTypeId":"STYLE_FILTER","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":true,"id":"bdb23d4b-8f21-4e56-562d-c478a71b8345"},"filters":[{"type":"saturate","filterId":"ccaa","value":100,"unit":"%"}]}}]}],"useFirstGroupAsInitialState":false,"createdOn":1695345809804}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function UicpBody1({
  as: _Component = _Builtin.Section,
  inputInternetIdentityRuntimeProps = {},
  submitButtonRuntimeProps = {},
  normalRuntimeProps = {},
  errorRuntimeProps = {},
  successRuntimeProps = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.VFlex className={_utils.cx(_styles, "body1box1")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading", "headingsection1")}
            tag="h1"
          >
            {"Principal Identity, "}
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
          <_Builtin.HFlex
            className={_utils.cx(_styles, "body1flex2")}
            tag="div"
          >
            <_Builtin.FormWrapper
              className={_utils.cx(_styles, "form-block")}
              {...normalRuntimeProps}
            >
              <_Builtin.FormForm
                className={_utils.cx(_styles, "form")}
                name="email-form"
                data-name="Email Form"
                method="get"
                id="form-state"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "inputinternetidentity")}
                  name="name"
                  maxLength={256}
                  data-name="Name"
                  placeholder="Principal ID"
                  disabled={false}
                  type="text"
                  required={false}
                  autoFocus={true}
                  autoComplete="off"
                  id="InputInternetIdentity"
                  {...inputInternetIdentityRuntimeProps}
                />
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "submit-button")}
                  data-w-id="bdb23d4b-8f21-4e56-562d-c478a71b8345"
                  type="submit"
                  value="Make it Unique"
                  data-wait="Please wait..."
                  {...submitButtonRuntimeProps}
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage />
              <_Builtin.FormErrorMessage />
            </_Builtin.FormWrapper>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block")}
              tag="div"
              id="statusElement"
            />
          </_Builtin.HFlex>
        </_Builtin.VFlex>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
