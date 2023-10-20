export const Airpod02Icon = ({
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
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeWidth={strokeWidth}
      />
      <path d="M2.5 7H7.25M21.5 7H16.75" strokeWidth={strokeWidth} />
      <path
        d="M7 7H17V7.5C17 8.91421 17 9.62132 16.5607 10.0607C16.1213 10.5 15.4142 10.5 14 10.5H10C8.58579 10.5 7.87868 10.5 7.43934 10.0607C7 9.62132 7 8.91421 7 7.5V7Z"
        strokeWidth={strokeWidth}
      />
      <path d="M12 14H12.009" strokeWidth={strokeWidth} />
    </svg>
  )
}
