export const StudentCardIcon = ({
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
        d="M14.001 3.5C17.7722 3.5 19.6578 3.5 20.8294 4.7448C22.001 5.98959 22.001 7.99306 22.001 12C22.001 16.0069 22.001 18.0104 20.8294 19.2552C19.6578 20.5 17.7722 20.5 14.001 20.5L10.001 20.5C6.22974 20.5 4.34412 20.5 3.17255 19.2552C2.00098 18.0104 2.00098 16.0069 2.00098 12C2.00098 7.99306 2.00098 5.98959 3.17255 4.7448C4.34412 3.5 6.22974 3.5 10.001 3.5L14.001 3.5Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M5.00098 15.4999C6.60963 13.3625 10.3549 13.2458 12.001 15.4999M10.25 10.25C10.25 11.2165 9.4665 12 8.5 12C7.5335 12 6.75 11.2165 6.75 10.25C6.75 9.2835 7.5335 8.5 8.5 8.5C9.4665 8.5 10.25 9.2835 10.25 10.25Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M15.001 9.5L19.001 9.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M15.001 13.5H17.001"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
