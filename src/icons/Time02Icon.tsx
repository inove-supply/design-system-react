export const Time02Icon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM14.0303 12.9697C13.7374 12.6768 13.2626 12.6768 12.9697 12.9697C12.6768 13.2626 12.6768 13.7374 12.9697 14.0303L14.0303 12.9697ZM14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L14.4697 15.5303ZM11.25 7V10.5H12.75V7H11.25ZM12.9697 14.0303L14.4697 15.5303L15.5303 14.4697L14.0303 12.9697L12.9697 14.0303ZM12.75 12C12.75 12.4142 12.4142 12.75 12 12.75V14.25C13.2426 14.25 14.25 13.2426 14.25 12H12.75ZM12 12.75C11.5858 12.75 11.25 12.4142 11.25 12H9.75C9.75 13.2426 10.7574 14.25 12 14.25V12.75ZM11.25 12C11.25 11.5858 11.5858 11.25 12 11.25V9.75C10.7574 9.75 9.75 10.7574 9.75 12H11.25ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12H14.25C14.25 10.7574 13.2426 9.75 12 9.75V11.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
