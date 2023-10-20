export const SunriseIcon = ({
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
        d="M9.5 6.5C9.99153 5.9943 11.2998 4 12 4M14.5 6.5C14.0085 5.9943 12.7002 4 12 4M12 4V10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3633 10.6357L16.9491 12.05"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M3 17H5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M5.63657 10.6356L7.05078 12.0498"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M21 17H19" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M21 20H3" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
