export const DashboardCircleSettingsIcon = ({
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
        cx="6.25"
        cy="6.25"
        r="4.25"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M18 9.35714V10.5M18 9.35714C16.9878 9.35714 16.0961 8.85207 15.573 8.08517M18 9.35714C19.0122 9.35714 19.9039 8.85207 20.427 8.08517M18 3.64286C19.0123 3.64286 19.9041 4.148 20.4271 4.915M18 3.64286C16.9877 3.64286 16.0959 4.148 15.5729 4.915M18 3.64286V2.5M21.5 4.21429L20.4271 4.915M14.5004 8.78571L15.573 8.08517M14.5 4.21429L15.5729 4.915M21.4996 8.78571L20.427 8.08517M20.4271 4.915C20.7364 5.36854 20.9167 5.91364 20.9167 6.5C20.9167 7.08643 20.7363 7.63159 20.427 8.08517M15.5729 4.915C15.2636 5.36854 15.0833 5.91364 15.0833 6.5C15.0833 7.08643 15.2637 7.63159 15.573 8.08517"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <circle
        cx="17.75"
        cy="17.75"
        r="4.25"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="6.25"
        cy="17.75"
        r="4.25"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
