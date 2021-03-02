import React from "react";
import { typeScale } from "../utils";
import styled from "styled-components";
import { Illustrations, CloseIcon } from "../Assets";
import { PrimaryButton } from "./Buttons";

const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.div`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.div`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 24px;
  height: 24px;
  padding: 0;
`;

export const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img
        src={Illustrations.SignUp}
        alt="sign up for an account"
        aria-hidden="true"
      />
      <SignUpHeader>Sign Up today to get access</SignUpHeader>
      <PrimaryButton>Sign Up!</PrimaryButton>
      <CloseModalButton aria-label="Close modal">
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
};
