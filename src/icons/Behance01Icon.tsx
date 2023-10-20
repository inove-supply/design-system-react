export const Behance01Icon = ({
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
        d="M2 12H7.625M7.4 5H4C3.05719 5 2.58579 5 2.29289 5.29289C2 5.58579 2 6.05719 2 7V17C2 17.9428 2 18.4142 2.29289 18.7071C2.58579 19 3.05719 19 4 19H7.4C9.38823 19 11 17.433 11 15.5C11 13.567 9.38823 12 7.4 12C9.38823 12 11 10.433 11 8.5C11 6.567 9.38823 5 7.4 5Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 7.75C20.4142 7.75 20.75 7.41421 20.75 7C20.75 6.58579 20.4142 6.25 20 6.25V7.75ZM16 6.25C15.5858 6.25 15.25 6.58579 15.25 7C15.25 7.41421 15.5858 7.75 16 7.75V6.25ZM22 14V14.75C22.4142 14.75 22.75 14.4142 22.75 14H22ZM22.1141 17.3755C22.3215 17.017 22.199 16.5582 21.8404 16.3508C21.4819 16.1434 21.0231 16.2659 20.8157 16.6245L22.1141 17.3755ZM20 6.25H16V7.75H20V6.25ZM14 14.75H22V13.25H14V14.75ZM22.75 14C22.75 11.5648 20.6434 9.25 18 9.25V10.75C19.7749 10.75 21.25 12.3526 21.25 14H22.75ZM18 9.25C15.3566 9.25 13.25 11.5648 13.25 14H14.75C14.75 12.3526 16.2251 10.75 18 10.75V9.25ZM13.25 14V15H14.75V14H13.25ZM13.25 15C13.25 17.6234 15.3766 19.75 18 19.75V18.25C16.2051 18.25 14.75 16.7949 14.75 15H13.25ZM18 19.75C19.7591 19.75 21.2939 18.7934 22.1141 17.3755L20.8157 16.6245C20.2526 17.5978 19.202 18.25 18 18.25V19.75Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
