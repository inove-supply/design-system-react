export const UserLove02Icon = ({
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
        d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M16.7612 3.27615C17.5657 2.81923 18.2679 3.00336 18.6897 3.29667C18.8626 3.41693 18.9491 3.47706 19 3.47706C19.0509 3.47706 19.1374 3.41693 19.3103 3.29667C19.7321 3.00336 20.4343 2.81923 21.2388 3.27615C22.2946 3.87582 22.5335 5.85413 20.0981 7.52315C19.6343 7.84105 19.4024 8 19 8C18.5976 8 18.3657 7.84105 17.9019 7.52315C15.4665 5.85413 15.7054 3.87582 16.7612 3.27615Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
