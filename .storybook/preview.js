import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

//addParameters({});

addDecorator(withContexts(contexts));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
