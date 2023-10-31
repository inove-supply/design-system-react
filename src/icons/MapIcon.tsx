export const MapIcon = ({
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
            <g clipPath="url(#clip0_303_4939)">
                <ellipse
                    cx="15.8333"
                    cy="4.16671"
                    rx="0.833333"
                    ry="0.833333"
                />
                <path
                    d="M18.333 4.16663C18.333 5.39542 17.2192 6.8402 16.4784 7.66517C16.1282 8.05528 15.5379 8.05528 15.1876 7.66517C14.4468 6.8402 13.333 5.39542 13.333 4.16663C13.333 2.32568 14.4523 1.66663 15.833 1.66663C17.2137 1.66663 18.333 2.32568 18.333 4.16663Z"
                    strokeWidth={strokeWidth - 0.3}
                    strokeLinejoin="round"
                />
                <path
                    d="M5.83301 12C5.83301 10.8954 6.72844 10 7.83301 10H12.1663C13.2709 10 14.1663 10.8954 14.1663 12V16.3333C14.1663 17.4379 13.2709 18.3333 12.1663 18.3333H7.83301C6.72844 18.3333 5.83301 17.4379 5.83301 16.3333V12Z"
                    strokeWidth={strokeWidth - 0.3}
                    strokeLinejoin="round"
                />
                <path
                    d="M9.16699 11.6666H10.8337"
                    strokeWidth={strokeWidth - 0.3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4.03879 14.1667H3.66699C2.56242 14.1667 1.66699 13.2713 1.66699 12.1667V7.83337C1.66699 6.7288 2.56242 5.83337 3.66699 5.83337H11.667"
                    strokeWidth={strokeWidth - 0.3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_303_4939">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
