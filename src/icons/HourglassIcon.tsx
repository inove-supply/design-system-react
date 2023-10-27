export const HourglassIcon = ({
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
        d="M19 2V5C19 8.86599 15.866 12 12 12M5 2V5C5 8.86599 8.13401 12 12 12M12 12C15.866 12 19 15.134 19 19V22M12 12C8.13401 12 5 15.134 5 19V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M4 2H20M20 22H4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
