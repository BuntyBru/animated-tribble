import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import PrimaryButton, { SecondaryButton, TertiaryButton } from "../Buttons";
import { defaultTheme, darkTheme } from "../../utils";
import { SignUpModal } from "../Modal";

function Hello() {
  const [useDarkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        onClick={() => {
          setDarkTheme(!useDarkTheme);
        }}
      >
        Click
      </button>
      <div
        style={{
          backgroundColor: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vW",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          transition: "all 1s ease-in-out 0s",
        }}
      >
        <PrimaryButton>Submit</PrimaryButton>
        <SecondaryButton>Submit</SecondaryButton>
        <TertiaryButton>Submit</TertiaryButton>

        <SignUpModal />
      </div>
    </ThemeProvider>
  );
}

export default Hello;
