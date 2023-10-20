export const CircleArrowUpDoubleSharpIcon = ({
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
        d="M9 15L11.693 12.9054C11.8736 12.765 12.1264 12.765 12.307 12.9054L15 15M15 11.3333L12.307 9.23875C12.1264 9.09832 11.8736 9.09832 11.693 9.23875L9 11.3333"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
