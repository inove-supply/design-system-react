export const SearchList01Icon = ({
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
        d="M21.4697 21.5303C21.7626 21.8232 22.2374 21.8232 22.5303 21.5303C22.8232 21.2374 22.8232 20.7626 22.5303 20.4697L21.4697 21.5303ZM19.0697 19.1303L21.4697 21.5303L22.5303 20.4697L20.1303 18.0697L19.0697 19.1303ZM21.55 14.4C21.55 11.0034 18.7966 8.25 15.4 8.25V9.75C17.9681 9.75 20.05 11.8319 20.05 14.4H21.55ZM15.4 8.25C12.0034 8.25 9.25 11.0034 9.25 14.4H10.75C10.75 11.8319 12.8319 9.75 15.4 9.75V8.25ZM9.25 14.4C9.25 17.7966 12.0034 20.55 15.4 20.55V19.05C12.8319 19.05 10.75 16.9681 10.75 14.4H9.25ZM15.4 20.55C18.7966 20.55 21.55 17.7966 21.55 14.4H20.05C20.05 16.9681 17.9681 19.05 15.4 19.05V20.55Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2 10L7 10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17H7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 3H19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
