import { Meta, StoryFn } from "@storybook/react";
import { InputField } from "./input-field";
import type { InputFieldProps } from "./input-field";

const meta: Meta = {
  title: "shared/input-field",
  component: InputField,
};
export default meta;

const Template: StoryFn<InputFieldProps> = (props) => <InputField {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const WithError = Template.bind({});
WithError.args = {
  error: {
    type: "required",
    message: "This field is required",
  },
};
