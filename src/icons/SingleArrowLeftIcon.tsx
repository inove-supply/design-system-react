

export const SingleArrowLeftIcon = ({
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
        d="M15 6L9.70711 11.2929C9.37377 11.6262 9.20711 11.7929 9.20711 12C9.20711 12.2071 9.37377 12.3738 9.70711 12.7071L15 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    stroke="#141B34"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;
