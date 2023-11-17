import React from "react";
import { BadgeProps } from "./Badge.types";

const Badge = ({
  title,
  status = "info",
  dot = true,
  customClass,
}: BadgeProps) => {
  const badgeStyle = {
    success: "bg-green-500 text-green-600",
    error: "bg-red-500 text-red-600",
    warning: "bg-orange-500 text-orange-600",
    info: "bg-blue-500 text-blue-600",
    dark: "bg-gray-900 text-white",
    inactive: "bg-gray-300 text-gray-400",
    yellow: "bg-yellow-500 text-yellow-600",
    amber: "bg-amber-500 text-amber-600",
    violet: "bg-violet-500 text-violet-600",
    cyan: "bg-cyan-500 text-cyan-600",
  };

  const classDefault = `${customClass} flex text-xs font-medium items-center w-fit py-1 px-2 rounded-full ${
    status != "dark" ? "bg-opacity-10" : "bg-opacity-70 "
  } ${badgeStyle[status]}`;

  return (
    <div className={classDefault}>
      {dot && (
        <div
          className={`circle rounded-full w-2 h-2 mr-2 ${
            status === "dark" ? "bg-white" : badgeStyle[status]
          }`}
        />
      )}

      <span className="capitalize">{title}</span>
    </div>
  );
};

export default Badge;
