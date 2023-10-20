export const CircleArrowLeftDoubleRoundIcon = ({
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
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
      <path
        d="M11.0846 15C11.0846 15 8.50001 12.7905 8.5 12C8.49999 11.2094 11.0846 9 11.0846 9M15.5 15C15.5 15 12.9154 12.7905 12.9154 12C12.9154 11.2094 15.5 9 15.5 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
