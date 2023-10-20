export const BarnsIcon = ({
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
        d="M4.36271 6.43391L3.34475 8.7243C3.17301 9.11073 3.08714 9.30394 3.04357 9.50925C3 9.71455 3 9.92599 3 10.3489V20C3 20.9428 3 21.4142 3.29289 21.7071C3.58579 22 4.05719 22 5 22H19C19.9428 22 20.4142 22 20.7071 21.7071C21 21.4142 21 20.9428 21 20V9.94427C21 9.47427 21 9.23927 20.9465 9.01263C20.893 8.78599 20.7879 8.5758 20.5777 8.15542L19.6553 6.31054C19.3311 5.66214 19.169 5.33795 18.9108 5.09455C18.6527 4.85116 18.3196 4.70838 17.6532 4.42282L13.5757 2.67529C12.7989 2.34239 12.4105 2.17594 12 2.17594C11.5895 2.17594 11.2011 2.34239 10.4243 2.67529L6.44228 4.38188C5.72974 4.68726 5.37347 4.83994 5.10422 5.10562C4.83498 5.3713 4.67755 5.7255 4.36271 6.43391Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 22V13M17 13V22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13L17 22M7 22L17 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 13H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
