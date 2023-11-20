import React from "react";

export const RampIcon = ({
    color = 'gray-500',
    strokeWidth = 2,
    size = 24,
}: {
    color?: string;
    strokeWidth?: number;
    size?: number;
}) => {
    return (
        <svg
            className={`stroke-current text-${color}`}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.28655 16.6667H15.7099C17.3472 16.6667 18.122 14.7239 16.905 13.67L5.4817 3.77802C4.33201 2.78244 2.5 3.56748 2.5 5.05571V14.9477C2.5 15.8971 3.29987 16.6667 4.28655 16.6667Z"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
