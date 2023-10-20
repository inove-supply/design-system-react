export const DashboardSpeed02Icon = ({
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
      <circle cx="12" cy="18" r="3" strokeWidth={strokeWidth} />
      <path d="M12 15V10" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M22 13C22 7.47715 17.5228 3 12 3C6.47715 3 2 7.47715 2 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
