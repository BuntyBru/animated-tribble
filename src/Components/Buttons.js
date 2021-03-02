import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: ({ props }) => `
    font-size:${typeScale.helperText};
    padding:8px;
    `,

  large: ({ props }) => `
  font-size:${typeScale.h5};
  padding:16px 24px;
  `,

  warning: ({ props }) => `
  background-color:${(props) => props.theme.status.warningColor};
  color:${(props) => props.theme.textColorInverted};

  &:hover ,&:focus{

    background-color:${(props) => props.theme.status.warningColor};
    outline:3px solid ${(props) => props.theme.status.warningColorHover};
  }

  &:active
  {
    background-color:${(props) => props.theme.status.warningColorActive};
  }
  `,
};

const Button = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Roboto-Mono", monospace;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryColorHover};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryColorHover};
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    border-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:disabled {
    background: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
    border: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  font-size: ${typeScale.paragraph};
  color: ${(props) => props.theme.textColorOnPrimary};
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
`;

export const TertiaryButton = styled(SecondaryButton)`
  border: none;
`;

export default PrimaryButton;
