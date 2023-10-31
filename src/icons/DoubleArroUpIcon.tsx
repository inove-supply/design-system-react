export const DoubleArroUpIcon = ({
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
        d="M6 11.5L11.3243 6.61941C11.6451 6.32533 11.8055 6.17828 12 6.17828C12.1945 6.17828 12.3549 6.32533 12.6757 6.61941L18 11.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18L11.3243 13.1194C11.6451 12.8253 11.8055 12.6783 12 12.6783C12.1945 12.6783 12.3549 12.8253 12.6757 13.1194L18 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
