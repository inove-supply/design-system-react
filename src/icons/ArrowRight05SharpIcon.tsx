export const ArrowRight05SharpIcon = ({
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
        d="M19.25 18C19.25 18.4142 19.5858 18.75 20 18.75C20.4142 18.75 20.75 18.4142 20.75 18L19.25 18ZM20.75 6C20.75 5.58579 20.4142 5.25 20 5.25C19.5858 5.25 19.25 5.58579 19.25 6L20.75 6ZM20.75 18L20.75 6L19.25 6L19.25 18L20.75 18Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M11.8726 12V8.94435C11.8726 8.57019 12.3549 8.36416 12.6762 8.60109L16.8195 11.6567C17.0602 11.8342 17.0602 12.1658 16.8195 12.3433L12.6762 15.3989C12.3549 15.6358 11.8726 15.4298 11.8726 15.0557V12ZM11.8726 12H4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
