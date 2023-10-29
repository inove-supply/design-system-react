/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';

declare const ButtonVariants: {
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly success: "success";
    readonly danger: "danger";
    readonly warning: "warning";
    readonly info: "info";
    readonly light: "light";
    readonly dark: "dark";
    readonly ghost: "ghost";
};
declare const ButtonThemes: {
    readonly default: "default";
    readonly outline: "outline";
    readonly text: "text";
};
declare const ButtonTypes: {
    readonly button: "button";
    readonly submit: "submit";
    readonly reset: "reset";
};
declare const ButtonSizes: {
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
};
declare const ButtonWidths: {
    readonly auto: "auto";
    readonly fit: "fit";
    readonly full: "full";
};
declare const ButtonAligns: {
    readonly default: "default";
    readonly center: "center";
    readonly start: "start";
    readonly end: "end";
};

interface CommonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}
interface IconProps {
    name: string;
    side?: 'left' | 'right';
    stroke?: number;
    color?: string;
}
interface ButtonProps extends CommonProps {
    refProp?: React.LegacyRef<HTMLButtonElement>;
    label?: string;
    link?: string;
    icon?: IconProps;
    submit?: boolean;
    size?: keyof typeof ButtonSizes;
    width?: keyof typeof ButtonWidths;
    align?: keyof typeof ButtonAligns;
    customClass?: string;
    tooltip?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    theme?: keyof typeof ButtonThemes;
    type?: keyof typeof ButtonTypes;
    variant?: keyof typeof ButtonVariants;
}

declare const Button: ({ refProp, label, link, icon, size, width, align, customClass, tooltip, isLoading, isDisabled, theme, type, variant, ...events }: ButtonProps & React$1.ButtonHTMLAttributes<HTMLButtonElement> & React$1.AnchorHTMLAttributes<HTMLAnchorElement>) => react_jsx_runtime.JSX.Element;

export { Button };
