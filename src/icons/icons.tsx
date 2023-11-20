import iconMap from "./_iconMap";
import { IconProps } from "./icons.types";

import React from "react";

export const Icon = ({
  name,
  color = "gray-500",
  size = 24,
  strokeWidth = 1.5,
}: IconProps) => {
  const Icon = iconMap[name];
  return <Icon color={color} size={size} strokeWidth={strokeWidth} />;
};
