export const ArrowDataTransferDiagonalRoundIcon = ({
  color = 'white',
  strokeWidth = 1.5,
  size = 24
}: {
  color?: string
  strokeWidth?: number
  size?: number
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color} stroke-current`}
    >
      <path
        d="M9 19L18.1795 9.9942C18.9276 9.26025 19.3016 8.89327 19.6243 9.02718C19.9469 9.16108 19.9526 9.68566 19.964 10.7348L20 14.0459"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5L5.82055 14.0058C5.07244 14.7398 4.69839 15.1067 4.37573 14.9728C4.05306 14.8389 4.04736 14.3143 4.03597 13.2652L4 9.95414"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
