export const GarageIcon = ({
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
        d="M9.7812 3.09766L5.6718 5.89369C4.3639 6.78359 3.70995 7.22854 3.35498 7.90548C3 8.58242 3 9.38456 3 10.9888V17.9176C3 19.8421 3 20.8043 3.58579 21.4021C4.17157 22 5.11438 22 7 22H17C18.8856 22 19.8284 22 20.4142 21.4021C21 20.8043 21 19.8421 21 17.9176V10.9888C21 9.38456 21 8.58242 20.645 7.90548C20.29 7.22854 19.6361 6.78359 18.3282 5.89369L14.2188 3.09766C13.1433 2.36589 12.6056 2 12 2C11.3944 2 10.8567 2.36589 9.7812 3.09766Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 22V15C7 13.1144 7 12.1716 7.58579 11.5858C8.17157 11 9.11438 11 11 11H13C14.8856 11 15.8284 11 16.4142 11.5858C17 12.1716 17 13.1144 17 15V22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14H17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 18H17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.008 7L11.999 7" strokeWidth={strokeWidth} />
    </svg>
  )
}
