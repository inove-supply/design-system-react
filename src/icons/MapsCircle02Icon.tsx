export const MapsCircle02Icon = ({
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
        d="M14.5 9.5H14.509"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6C16.3941 6 18 7.61319 18 9.57031C18 11.5586 16.368 12.9539 14.8605 13.9027C14.7506 13.9665 14.6264 14 14.5 14C14.3736 14 14.2494 13.9665 14.1395 13.9027C12.6348 12.9446 11 11.5655 11 9.57031C11 7.61319 12.6059 6 14.5 6Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 15L5 19M15 21L3 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
