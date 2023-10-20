export const SubpoenaIcon = ({
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
        d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4.5 3L5.825 5.12C6.3994 6.03905 6.68661 6.49857 7.13896 6.74928C7.59131 7 8.1332 7 9.21699 7H14.783C15.8668 7 16.4087 7 16.861 6.74928C17.3134 6.49857 17.6006 6.03905 18.175 5.12L19.5 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11.75 15.25C12.9368 16.4368 14.5 17.6429 14.5 17.6429L16.6429 15.5C16.6429 15.5 15.4368 13.9368 14.25 12.75C13.0632 11.5632 11.5 10.3571 11.5 10.3571L9.35714 12.5C9.35714 12.5 10.5632 14.0632 11.75 15.25ZM11.75 15.25L8 19M17 15.1429L14.1429 18M11.8571 10L9 12.8571"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
