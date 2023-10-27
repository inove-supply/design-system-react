export const CircleArrowShrink02RoundIcon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.885 11.1151C12.3676 10.5977 12.4537 8.4 12.4537 8.4M12.885 11.1151C13.4023 11.6324 15.6 11.5462 15.6 11.5462M12.885 11.1151L16.5 7.5M11.1118 12.8882C10.5945 12.3708 8.39677 12.4569 8.39677 12.4569M11.1118 12.8882C11.6291 13.4055 11.543 15.6032 11.543 15.6032M11.1118 12.8882L7.5 16.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
