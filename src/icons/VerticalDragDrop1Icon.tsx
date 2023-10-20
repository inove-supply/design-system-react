export const VerticalDragDrop1Icon = ({
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
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-${color} stroke-current`}
    >
      <path
        d="M6 6.5H6.00634M6 12.5H6.00634M6 18.5H6.00634M11.9968 6.5H12.0032M11.9968 12.5H12.0032M11.9968 18.5H12.0032M17.9937 6.5H18M17.9937 12.5H18M17.9937 18.5H18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
