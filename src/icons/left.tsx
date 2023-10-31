export const LeftIcon = ({
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
                d="M8.33333 6.66669L5 10M5 10L8.33333 13.3334M5 10L15 10"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
