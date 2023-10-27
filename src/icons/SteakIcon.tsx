export const SteakIcon = ({
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
        d="M17 16C19.7614 16 22 13.7614 22 11C22 9.87418 21.6279 8.83526 21 7.99951C18.8745 5.17054 16 4 12 4C8 4 2 6.86508 2 10.5C2 11.8807 3.11929 13 4.5 13H8C9.32374 12.9675 12 13.5 14.2356 15.167C15.0274 15.6933 15.9779 16 17 16Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2 10.5V11C2 13.8284 2 15.2426 2.87868 16.1213C3.75736 17 5.17157 17 8 17C9.32374 16.9675 12 17.5 14.2356 19.167C15.0274 19.6933 15.9779 20 17 20C19.7614 20 22 17.7614 22 15V11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M18.5 11C18.5 11.8284 17.8284 12.5 17 12.5C16.1716 12.5 15.5 11.8284 15.5 11C15.5 10.1716 16.1716 9.5 17 9.5C17.8284 9.5 18.5 10.1716 18.5 11Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
