export const Road01Icon = ({
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
        d="M5.17157 3.17157C4 4.34314 4 6.22876 4 10L4 14C4 17.7712 4 19.6569 5.17157 20.8284M5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157M5.17157 3.17157C5.17157 3.17157 5.17157 3.17157 5.17157 3.17157ZM5.17157 20.8284C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.8284M5.17157 20.8284C5.17157 20.8284 5.17157 20.8284 5.17157 20.8284ZM18.8284 20.8284C20 19.6569 20 17.7712 20 14L20 10C20 6.22876 20 4.34315 18.8284 3.17157M18.8284 20.8284C18.8284 20.8284 18.8284 20.8284 18.8284 20.8284ZM18.8284 3.17157C18.8284 3.17157 18.8284 3.17157 18.8284 3.17157Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M12 11L12 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.5L12 7.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16.5L12 18.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
