/// <reference types="react" />
type IconProps = {
    [key: string]: ({ color, strokeWidth, size }: {
        color?: string;
        strokeWidth?: number;
        size?: number;
    }) => JSX.Element;
};
declare const iconMap: IconProps;
export default iconMap;
