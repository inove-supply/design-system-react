import React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import "./styles.css";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({ children, text, copyToClipboard }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={50}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <button
            onClick={() => {
              if (copyToClipboard) navigator.clipboard.writeText(text);
            }}
          >
            {children}
          </button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="TooltipContent" sideOffset={5}>
            {text}
            <RadixTooltip.Arrow />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
