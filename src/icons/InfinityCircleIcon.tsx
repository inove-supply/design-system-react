export const InfinityCircleIcon = ({
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
        d="M12 12C12 12 10.3569 14.5 8.7 14.5C7.04315 14.5 6 13.3807 6 12C6 10.6193 7.04315 9.5 8.7 9.5C10.3569 9.5 12 12 12 12ZM12 12C12 12 13.6431 14.5 15.3 14.5C16.9569 14.5 18 13.3807 18 12C18 10.6193 16.9569 9.5 15.3 9.5C13.6431 9.5 12 12 12 12Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
