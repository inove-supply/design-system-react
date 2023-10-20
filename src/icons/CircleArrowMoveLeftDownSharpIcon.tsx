export const CircleArrowMoveLeftDownSharpIcon = ({
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
        d="M9.5 8L8 9.88235M8 9.88235L9.5 11.2941M8 9.88235H13.5C13.7761 9.88235 14 10.1062 14 10.3824V16M14 16L16 14.1176M14 16L12 14.1176"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
    </svg>
  )
}
