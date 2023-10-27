export const Pan02Icon = ({
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
        d="M20.5556 13H9.44444C9.19898 13 9 13.2487 9 13.5556C9 16.0102 10.5919 18 12.5556 18H17.4444C19.4081 18 21 16.0102 21 13.5556C21 13.2487 20.801 13 20.5556 13Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M9 13L7 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.36797 6.36797C2.85859 5.87734 3.65404 5.87734 4.14466 6.36797L6.63203 8.85534C7.12266 9.34596 7.12266 10.1414 6.63203 10.632C6.14141 11.1227 5.34596 11.1227 4.85534 10.632L2.36797 8.14466C1.87734 7.65404 1.87734 6.85859 2.36797 6.36797Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
