export const SearchCircleIcon = ({
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
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M15.4697 16.5303C15.7626 16.8232 16.2374 16.8232 16.5303 16.5303C16.8232 16.2374 16.8232 15.7626 16.5303 15.4697L15.4697 16.5303ZM13.8697 14.9303L15.4697 16.5303L16.5303 15.4697L14.9303 13.8697L13.8697 14.9303ZM15.95 11.6C15.95 9.19756 14.0024 7.25 11.6 7.25V8.75C13.174 8.75 14.45 10.026 14.45 11.6H15.95ZM11.6 7.25C9.19756 7.25 7.25 9.19756 7.25 11.6H8.75C8.75 10.026 10.026 8.75 11.6 8.75V7.25ZM7.25 11.6C7.25 14.0024 9.19756 15.95 11.6 15.95V14.45C10.026 14.45 8.75 13.174 8.75 11.6H7.25ZM11.6 15.95C14.0024 15.95 15.95 14.0024 15.95 11.6H14.45C14.45 13.174 13.174 14.45 11.6 14.45V15.95Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
