export const Cordinate02Icon = ({
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
        d="M13.5 2L12 3.5M12 3.5V5M12 3.5L10.5 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 14H5L2 17H5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 14L22 17M22 14L19 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 8V16M12 16L3 22M12 16L21 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
