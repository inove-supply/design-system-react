export const MediumIcon = ({
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
      <circle cx="6.5" cy="12" r="4.5" strokeWidth={strokeWidth} />
      <ellipse cx="15.5" cy="12" rx="2.5" ry="4.5" strokeWidth={strokeWidth} />
      <ellipse cx="21" cy="12" rx="1" ry="4.5" strokeWidth={strokeWidth} />
    </svg>
  )
}
