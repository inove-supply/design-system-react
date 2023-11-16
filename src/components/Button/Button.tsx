import React, { createRef } from "react";

import {
  classSize,
  classTheme,
  classWidth,
  classVariant,
  classAlign,
} from "./Button-styles";

import { SpinnerIcon } from "../../icons/SpinnerIcon";
import iconMap from "../../icons/_iconMap";

import Tooltip from "../Tooltip/Tooltip";

import { ButtonProps } from "./Button.types";

export function Button({
  refProp,
  label,
  link,
  icon,
  size = "md",
  width = "auto",
  align = "default",
  customClass = "",
  tooltip,
  isLoading,
  isDisabled,
  theme = "default",
  type,
  variant = "primary",
  ...events
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const renderIcon = (marginSide = "me-2") => {
    if (isLoading) {
      return (
        <span className={marginSide}>
          <SpinnerIcon color="white" />
        </span>
      );
    }

    if (!icon) return null;

    const MappedIcon = iconMap[icon.name];

    if (!MappedIcon) {
      return null;
    }

    return (
      <span className={marginSide}>
        <MappedIcon
          color={icon.color || "white"}
          strokeWidth={icon.stroke || 2}
          size={24}
        />
      </span>
    );
  };

  const buttonRef = refProp ?? createRef<HTMLButtonElement>();

  const classDefault = `button flex items-center justify-center font-medium h-fit ${
    isDisabled && "cursor-not-allowed opacity-50"
  }`;

  const buttonClassName = `${classDefault} ${classWidth[width]} ${classAlign[align]} ${classVariant[theme][variant]} ${classTheme[theme]} ${classSize[size]} ${customClass}`;

  const rightIconsClassName = label ? "ms-2 right-icon" : "right-icon";
  const leftIconsClassName = label ? "me-2 left-icon" : "left-icon";

  const contentButton = () => {
    return (
      <>
        {(!icon?.side || icon.side === "left") &&
          renderIcon(leftIconsClassName)}
        <span>{label}</span>
        {icon?.side === "right" && renderIcon(rightIconsClassName)}
      </>
    );
  };

  if (link) {
    if (tooltip) {
      return (
        <Tooltip text={tooltip}>
          <a
            href={link}
            className={buttonClassName}
            ref={buttonRef as React.LegacyRef<HTMLAnchorElement>}
            {...events}
          >
            {contentButton()}
          </a>
        </Tooltip>
      );
    } else {
      return (
        <a
          href={link}
          className={buttonClassName}
          ref={buttonRef as React.LegacyRef<HTMLAnchorElement>}
          {...events}
        >
          {contentButton()}
        </a>
      );
    }
  }

  if (tooltip) {
    return (
      <Tooltip text={tooltip}>
        <button className={buttonClassName} ref={buttonRef} {...events}>
          {contentButton()}
        </button>
      </Tooltip>
    );
  } else {
    return (
      <button
        type={type}
        className={buttonClassName}
        {...events}
        disabled={isDisabled}
        ref={buttonRef}
      >
        {contentButton()}
      </button>
    );
  }
}
