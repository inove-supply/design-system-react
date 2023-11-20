

export const SingleArrowUpIcon = ({
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
        d="M6 15L11.2929 9.70711C11.6262 9.37377 11.7929 9.20711 12 9.20711C12.2071 9.20711 12.3738 9.37377 12.7071 9.70711L18 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
