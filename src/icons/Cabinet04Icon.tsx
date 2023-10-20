export const Cabinet04Icon = ({
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
        d="M18 8H6C4.11438 8 3.17157 8 2.58579 8.53253C2 9.06507 2 9.92217 2 11.6364V14.3636C2 16.0778 2 16.9349 2.58579 17.4675C3.17157 18 4.11438 18 6 18H18C19.8856 18 20.8284 18 21.4142 17.4675C22 16.9349 22 16.0778 22 14.3636V11.6364C22 9.92217 22 9.06507 21.4142 8.53253C20.8284 8 19.8856 8 18 8Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 18L4 22M19 18L20 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18V8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.5H9M7 14.5H9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.43934 7.56066C5 7.12132 5 6.41421 5 5C5 3.58579 5 2.87868 5.43934 2.43934C5.87868 2 6.58579 2 8 2C9.41421 2 10.1213 2 10.5607 2.43934C11 2.87868 11 3.58579 11 5C11 6.41421 11 7.12132 10.5607 7.56066C10.1213 8 9.41421 8 8 8C6.58579 8 5.87868 8 5.43934 7.56066Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
