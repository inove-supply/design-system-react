export const SearchList02Icon = ({
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
        d="M21.4697 16.5303C21.7626 16.8232 22.2374 16.8232 22.5303 16.5303C22.8232 16.2374 22.8232 15.7626 22.5303 15.4697L21.4697 16.5303ZM18.8697 13.9303L21.4697 16.5303L22.5303 15.4697L19.9303 12.8697L18.8697 13.9303ZM21.45 8.85C21.45 5.20492 18.4951 2.25 14.85 2.25V3.75C17.6667 3.75 19.95 6.03335 19.95 8.85H21.45ZM14.85 2.25C11.2049 2.25 8.25 5.20492 8.25 8.85H9.75C9.75 6.03335 12.0333 3.75 14.85 3.75V2.25ZM8.25 8.85C8.25 12.4951 11.2049 15.45 14.85 15.45V13.95C12.0333 13.95 9.75 11.6667 9.75 8.85H8.25ZM14.85 15.45C18.4951 15.45 21.45 12.4951 21.45 8.85H19.95C19.95 11.6667 17.6667 13.95 14.85 13.95V15.45Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2 6L6 6.00003"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 13H6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
