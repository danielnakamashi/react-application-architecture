import { PlusSquareIcon } from "@chakra-ui/icons";
import { Meta, StoryFn } from "@storybook/react";
import { Link } from "./link";
import type { LinkProps } from "./link";

const meta: Meta = {
  title: "shared/link",
  component: Link,
};
export default meta;

const Template: StoryFn<LinkProps> = (props) => <Link {...props} />;

export const Default = Template.bind({});
Default.args = {
  href: "/",
  children: "Link",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: "/",
  children: "Link",
  icon: <PlusSquareIcon />,
};
