export const ArrowLeftDoubleSharpIcon = ({
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
        d="M11 18L6.53349 12.6402C6.2784 12.3341 6.15085 12.181 6.15085 12C6.15085 11.819 6.2784 11.6659 6.53349 11.3598L11 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 18L13.5335 12.6402C13.2784 12.3341 13.1509 12.181 13.1509 12C13.1509 11.819 13.2784 11.6659 13.5335 11.3598L18 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
