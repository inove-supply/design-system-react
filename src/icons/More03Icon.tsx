export const More03Icon = ({
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
      <rect
        x="18"
        y="18"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="18"
        y="10.5"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="18"
        y="3"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="10.5"
        y="18"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="10.5"
        y="10.5"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="10.5"
        y="3"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="3"
        y="18"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect
        x="3"
        y="10.5"
        width="3"
        height="3"
        rx="1"
        strokeWidth={strokeWidth}
      />
      <rect x="3" y="3" width="3" height="3" rx="1" strokeWidth={strokeWidth} />
    </svg>
  )
}
