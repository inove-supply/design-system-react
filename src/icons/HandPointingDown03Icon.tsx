export const HandPointingDown03Icon = ({
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
        d="M11.5004 16H12.5004C13.605 16 14.5004 15.1046 14.5004 14M14.5004 14V13M14.5004 14C14.5004 14.5523 14.9481 15 15.5004 15C16.605 15 17.5004 14.1046 17.5004 13M17.5004 13V12M17.5004 13C17.5004 13.5235 17.9705 13.9217 18.4868 13.8356L18.8292 13.7785C19.7936 13.6178 20.5004 12.7834 20.5004 11.8057L20.5 10.3332C20.5 8.15984 20.5 7.07313 20.1689 6.20799C19.9769 5.70614 19.4703 5.06612 19.0652 4.60361C18.7148 4.20359 18.5 3.69618 18.5 3.1644V1.99983M11.5002 14V20.5C11.5002 21.3284 10.8286 22 10.0002 22C9.17178 22 8.50021 21.3284 8.50021 20.5L8.5 10.5376L6.8797 12.163C6.16877 12.8761 4.99772 12.8111 4.36965 12.0235C3.88907 11.4209 3.8758 10.5685 4.33738 9.95109L7.93707 5.35288C8.62579 4.47312 9 3.11711 9 1.99983"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
