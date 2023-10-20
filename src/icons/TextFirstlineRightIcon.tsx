export const TextFirstlineRightIcon = ({
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
        d="M15 3.5H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9.5H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15.5H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 21.5H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.58579 9.91421C4.17157 10.5 5.11438 10.5 7 10.5C8.88562 10.5 9.82843 10.5 10.4142 9.91421C11 9.32843 11 8.38562 11 6.5C11 4.61438 11 3.67157 10.4142 3.08579C9.82843 2.5 8.88562 2.5 7 2.5C5.11438 2.5 4.17157 2.5 3.58579 3.08579C3 3.67157 3 4.61438 3 6.5C3 8.38562 3 9.32843 3.58579 9.91421Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
