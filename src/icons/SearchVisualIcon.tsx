export const SearchVisualIcon = ({
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
        d="M8.9835 2C6.17689 2.06395 4.53758 2.33111 3.41752 3.44729C2.43723 4.42418 2.10954 5.79744 2 8M15.0165 2C17.8231 2.06395 19.4624 2.33111 20.5825 3.44729C21.5628 4.42418 21.8905 5.79744 22 8M15.0165 22C17.8231 21.9361 19.4624 21.6689 20.5825 20.5527C21.5628 19.5758 21.8905 18.2026 22 16M8.9835 22C6.17689 21.9361 4.53758 21.6689 3.41752 20.5527C2.43723 19.5758 2.10954 18.2026 2 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L16.4697 17.5303ZM14.4697 15.5303L16.4697 17.5303L17.5303 16.4697L15.5303 14.4697L14.4697 15.5303ZM16.75 11.5C16.75 8.6005 14.3995 6.25 11.5 6.25V7.75C13.5711 7.75 15.25 9.42893 15.25 11.5H16.75ZM11.5 6.25C8.6005 6.25 6.25 8.6005 6.25 11.5H7.75C7.75 9.42893 9.42893 7.75 11.5 7.75V6.25ZM6.25 11.5C6.25 14.3995 8.6005 16.75 11.5 16.75V15.25C9.42893 15.25 7.75 13.5711 7.75 11.5H6.25ZM11.5 16.75C14.3995 16.75 16.75 14.3995 16.75 11.5H15.25C15.25 13.5711 13.5711 15.25 11.5 15.25V16.75Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
