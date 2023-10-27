export const SdCardIcon = ({
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
        d="M5.5 8.89922V8C5.5 5.17157 5.5 3.75736 6.37868 2.87868C7.25736 2 8.67157 2 11.5 2H14.5C17.3284 2 18.7426 2 19.6213 2.87868C20.5 3.75736 20.5 5.17157 20.5 8V14C20.5 17.7712 20.5 19.6569 19.3284 20.8284C18.1569 22 16.2712 22 12.5 22H10.6254C7.69689 22 6.23263 22 5.19651 21.2702C4.8212 21.0058 4.49421 20.6788 4.22984 20.3035C3.5 19.2674 3.5 17.8031 3.5 14.8746V14.6008C3.5 14.0589 3.5 13.7879 3.54625 13.5276C3.60289 13.2088 3.71077 12.9012 3.8657 12.6169C3.99221 12.3847 4.16148 12.1732 4.5 11.75C4.83852 11.3268 5.00779 11.1153 5.1343 10.8831C5.28923 10.5988 5.39711 10.2912 5.45375 9.97241C5.5 9.71207 5.5 9.44112 5.5 8.89922Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M16.5 6V9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M13 6V9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M9.5 6V9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
