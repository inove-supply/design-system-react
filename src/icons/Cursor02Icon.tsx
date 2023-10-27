export const Cursor02Icon = ({
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
        d="M3.42847 3.52383C5.4919 1.30171 21.0128 6.74513 21 8.73253C20.9855 10.9862 14.9387 11.6795 13.2626 12.1497C12.2548 12.4325 11.9848 12.7223 11.7524 13.7792C10.6999 18.5657 10.1715 20.9464 8.96711 20.9997C7.04737 21.0845 1.41472 5.69242 3.42847 3.52383Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
