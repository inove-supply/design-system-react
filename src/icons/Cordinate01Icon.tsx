export const Cordinate01Icon = ({
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
        d="M6.25 22C6.25 22.4142 6.58578 22.75 7 22.75C7.41421 22.75 7.75 22.4142 7.75 22L6.25 22ZM7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2L7.75 2ZM7.75 22L7.75 2L6.25 2L6.25 22L7.75 22Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M4 5C4.58984 4.39316 6.15973 2 7 2C7.84027 2 9.41016 4.39316 10 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 16.25C1.58579 16.25 1.25 16.5858 1.25 17C1.25 17.4142 1.58579 17.75 2 17.75L2 16.25ZM22 17.75C22.4142 17.75 22.75 17.4142 22.75 17C22.75 16.5858 22.4142 16.25 22 16.25L22 17.75ZM2 17.75L22 17.75L22 16.25L2 16.25L2 17.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M19 14C19.6068 14.5898 22 16.1597 22 17C22 17.8403 19.6068 19.4102 19 20"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
