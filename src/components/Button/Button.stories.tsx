import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    label: "Button",
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button label="Small" size="sm" />
      <Button label="Medium" size="md" />
      <Button label="Large" size="lg" />
    </div>
  ),
};
