import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components";

const meta: Meta<typeof Badge> = {
  title: "Example/Badge",
  component: Badge,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeDefault: Story = {
  args: {
    dot: true,
    title: "Badge",
    status: "success",
  },
};
