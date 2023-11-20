

export const DoubleArrowRightIcon = ({
  color = "gray-500",
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
        d="M13 18L17.4665 12.6402C17.7216 12.3341 17.8491 12.181 17.8491 12C17.8491 11.819 17.7216 11.6659 17.4665 11.3598L13 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18L10.4665 12.6402C10.7216 12.3341 10.8491 12.181 10.8491 12C10.8491 11.819 10.7216 11.6659 10.4665 11.3598L6 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
