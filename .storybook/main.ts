import type { StorybookConfig } from "@storybook/nextjs";

type CustomStorybookConfig = Omit<StorybookConfig, "features"> & {
  features?: NonNullable<StorybookConfig["features"]> & {
    emotionAlias: boolean;
  };
};

const config: CustomStorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  features: {
    emotionAlias: false,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
