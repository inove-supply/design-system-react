export const WifiDisconnected03Icon = ({
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
        d="M12 18H12.0118"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 15C10.25 13 13.75 13 15.75 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 12C18.4235 11.9323 18.3464 11.866 18.2687 11.801M5.5 12C8.06378 9.86352 11.1338 9.0964 14 9.69866"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9C5.46566 6.07345 9.24828 4.75279 13 5.03799"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0002 5L16.0002 11M22.0002 11L16.0002 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
