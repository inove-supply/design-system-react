import React from "react";
import { ButtonProps } from "./Button.types";
declare const Button: ({ refProp, label, link, icon, size, width, align, customClass, tooltip, isLoading, isDisabled, theme, type, variant, ...events }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>) => import("react/jsx-runtime").JSX.Element;
export default Button;
