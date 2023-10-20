export const Disability02Icon = ({
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
        d="M11.5 10L9.5 9L7 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6C12.8954 6 12 5.10457 12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 19.4826C14.3982 21.0072 12.6003 22 10.5696 22C7.21743 22 4.5 19.295 4.5 15.9582C4.5 15.0829 4.66357 14.251 5 13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6493 8L11.8965 9.84615C11.1304 11.7248 10.7474 12.6641 11.1832 13.3321C11.619 14 12.6149 14 14.6067 14C15.3014 14 15.9714 13.8192 16.3579 14.4961L19.5 20"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
