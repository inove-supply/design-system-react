export const RotateBottomLeft1Icon = ({
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
        d="M2.00098 10C2.00098 13.2998 2.00098 14.9497 3.0261 15.9749C4.05123 17 5.70114 17 9.00098 17C12.3008 17 13.9507 17 14.9758 15.9749C16.001 14.9497 16.001 13.2998 16.001 10C16.001 6.70017 16.001 5.05025 14.9759 4.02513C13.9507 3 12.3008 3 9.00098 3C5.70115 3 4.05123 3 3.0261 4.02513C2.00098 5.05025 2.00098 6.70017 2.00098 10Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14.4201L20.8899 13.0744C20.299 12.3581 20.0035 12 19.6364 12V13C19.6364 16.7712 19.6364 18.6569 18.4648 19.8284C17.2932 21 15.4076 21 11.6364 21H11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
