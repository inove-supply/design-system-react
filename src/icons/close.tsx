export const CloseIcon = ({
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
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
