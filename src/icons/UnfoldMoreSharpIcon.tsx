export const UnfoldMoreSharpIcon = ({
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
        d="M6 14L11.3598 18.4665C11.6659 18.7216 11.819 18.8491 12 18.8491C12.181 18.8491 12.3341 18.7216 12.6402 18.4665L18 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10L11.3598 5.53349C11.6659 5.2784 11.819 5.15085 12 5.15085C12.181 5.15085 12.3341 5.2784 12.6402 5.53349L18 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
