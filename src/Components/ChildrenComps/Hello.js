import React from "react";
import PrimaryButton, { SecondaryButton, TertiaryButton } from "../Buttons";

function Hello() {
  return (
    <div>
      <PrimaryButton modifiers="small">Submit</PrimaryButton>
      <SecondaryButton>Submit</SecondaryButton>
      <TertiaryButton>Submit</TertiaryButton>
    </div>
  );
}

export default Hello;
