import type { Meta, StoryObj } from "@storybook/react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const meta: Meta<typeof DropdownMenu> = {
  title: "Example/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownMenuDefault: Story = {
  args: {},
};
