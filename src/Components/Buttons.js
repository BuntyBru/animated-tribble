import styled from "styled-components";

const PrimaryBlue = "#0066ff9c";

const Button = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  border-radius: 2px;
  cursor: pointer;
  font-family: "Roboto-Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${PrimaryBlue};
  border: none;
  font-size: 1rem;
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background: none;
  border: 2px solid ${PrimaryBlue};
  color: ${PrimaryBlue};
`;

export const TertiaryButton = styled(SecondaryButton)`
  border: none;
`;

export default PrimaryButton;
