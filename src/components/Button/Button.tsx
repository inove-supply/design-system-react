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

/**
 * @typedef {Object} MyButtonProps
 * @property {React.LegacyRef<HTMLButtonElement>} refProp - A referência para o botão
 * @property {string} label - O texto do botão
 * @property {string} link - O link para o botão
 * @property {IconProps} icon - As propriedades do ícone
 * @property {boolean} submit - Indica se o botão é um botão de envio
 * @property {keyof typeof ButtonSizes} size - O tamanho do botão
 * @property {keyof typeof ButtonWidths} width - A largura do botão
 * @property {keyof typeof ButtonAligns} align - O alinhamento do botão
 * @property {string} customClass - A classe personalizada do botão
 * @property {string} tooltip - O texto do tooltip
 * @property {boolean} isLoading - Indica se o botão está carregando
 * @property {boolean} isDisabled - Indica se o botão está desabilitado
 * @property {keyof typeof ButtonThemes} theme - O tema do botão
 * @property {keyof typeof ButtonTypes} type - O tipo do botão
 * @property {keyof typeof ButtonVariants} variant - A variante do botão
 * @property {React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>} onClick - O evento de clique do botão
 */

/**
 * @param {MyButtonProps} props - As propriedades do botão
 * @returns {JSX.Element} - O elemento do botão
 */

const Button = ({
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
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const renderIcon = (marginSide = "me-2") => {
    if (isLoading) {
      return (
        <span className={marginSide}>
          <SpinnerIcon />
        </span>
      );
    }

    if (!icon) return null;

    const MappedIcon = iconMap[icon.name];

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
};

export default Button;
