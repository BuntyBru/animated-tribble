import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Roboto-Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  font-size: ${typeScale.paragraph};
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(SecondaryButton)`
  border: none;
`;

export default PrimaryButton;
