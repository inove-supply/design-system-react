import type { Meta, StoryObj } from "@storybook/react";

import { ButtonThemes, ButtonVariants } from "../components/Button/Enums";
import Button from "../components/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonDefault: Story = {
  args: {
    label: "Button",
    variant: "primary",
  },
};

export const ButtonWithIcon: Story = {
  args: {
    label: "Button",
    icon: {
      name: "SpinnerIcon",
      side: "left",
      color: "white",
      stroke: 1.5,
    },
  },
};

export const ButtonAllVariants = () => {
  const availableVariants = Object.values(ButtonVariants);
  const availableThemes = Object.values(ButtonThemes);

  return (
    <div className="flex flex-col gap-8">
      {availableThemes.map((theme) => {
        return (
          <div key={theme} className="flex flex-col gap-2">
            <h2>{theme}</h2>
            <div className="flex gap-2">
              {availableVariants.map((variant) => {
                return (
                  <Button
                    key={variant}
                    theme={theme}
                    variant={variant}
                    label="Button"
                  />
                );
              })}
            </div>
            <div className="flex gap-2">
              {availableVariants.map((variant) => {
                return (
                  <Button
                    key={variant}
                    theme={theme}
                    variant={variant}
                    label="Button"
                    isDisabled
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

ButtonAllVariants.story = {
  name: "Variants",
};

export const ButtonWithTooltip: Story = {
  args: {
    label: "Button",
    tooltip: "This is a tooltip",
  },
};
