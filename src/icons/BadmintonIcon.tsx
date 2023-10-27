export const BadmintonIcon = ({
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
        d="M2.39114 21.6387C1.81409 21.0816 1.8854 20.1398 2.53981 19.6752L6.17145 17.097C6.38333 16.9465 6.6739 16.9737 6.85404 17.1607C7.02764 17.3409 7.0488 17.6183 6.90454 17.8226L4.3387 21.4558C3.88384 22.0999 2.95883 22.1867 2.39114 21.6387Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 12.5L7 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4291 12.5774C17.534 14.4725 13.869 14.5529 11.6581 12.3419C9.44711 10.131 9.52748 6.46597 11.4226 4.57087C13.912 2.08144 18.5975 0.980641 20.8084 3.19159C23.0194 5.40254 21.9186 10.088 19.4291 12.5774Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
