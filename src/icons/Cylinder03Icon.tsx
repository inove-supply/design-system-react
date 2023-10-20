export const Cylinder03Icon = ({
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
        d="M22 19C22 20.6569 17.5228 22 12 22C6.47715 22 2 20.6569 2 19C2 17.3431 6.47715 16 12 16C17.5228 16 22 17.3431 22 19Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 5C22 6.65685 17.5228 8 12 8C6.47715 8 2 6.65685 2 5C2 3.34315 6.47715 2 12 2C17.5228 2 22 3.34315 22 5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 5V19M2 5V19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
