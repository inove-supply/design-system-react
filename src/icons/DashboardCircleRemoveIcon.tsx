export const DashboardCircleRemoveIcon = ({
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
      <circle cx="6.25" cy="6.25" r="4.25" strokeWidth={strokeWidth} />
      <circle cx="17.75" cy="17.75" r="4.25" strokeWidth={strokeWidth} />
      <circle cx="6.25" cy="17.75" r="4.25" strokeWidth={strokeWidth} />
      <path
        d="M22 6.00013L14 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
