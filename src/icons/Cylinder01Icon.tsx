export const Cylinder01Icon = ({
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
        d="M20 5.5C20 7.433 16.4183 9 12 9C7.58172 9 4 7.433 4 5.5C4 3.567 7.58172 2 12 2C16.4183 2 20 3.567 20 5.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M20 18.5C20 20.433 16.4183 22 12 22C7.58172 22 4 20.433 4 18.5C4 16.567 7.58172 15 12 15C16.4183 15 20 16.567 20 18.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M20 18.5V5.5M4 18.5V5.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
