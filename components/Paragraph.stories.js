import Paragraph from "./Paragraph";
import { theme } from "../pages/_app";
import { DarkProvider, LightProvider } from "../.storybook/theme";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
};

export const Light = (args) => <Paragraph {...args} />;

Light.args = {
  children: "Try me",
  type: "primary",
  onClick: () => alert("hihi"),
};

Light.decorators = [
  (Story) => (
    <LightProvider>
      <Story />
    </LightProvider>
  ),
];

export const Dark = Light.bind({});

Dark.args = {
  ...Light.args,
  children: "hello",
  type: "toto",
  onClick: () => alert("hoho"),
};

Dark.decorators = [
  (Story) => (
    <DarkProvider>
      <Story />
    </DarkProvider>
  ),
];
