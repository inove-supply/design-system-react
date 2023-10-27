export const UnfoldLessSharpIcon = ({
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
        d="M6 19L11.3598 14.5335C11.6659 14.2784 11.819 14.1509 12 14.1509C12.181 14.1509 12.3341 14.2784 12.6402 14.5335L18 19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5L11.3598 9.46651C11.6659 9.7216 11.819 9.84915 12 9.84915C12.181 9.84915 12.3341 9.7216 12.6402 9.46651L18 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
