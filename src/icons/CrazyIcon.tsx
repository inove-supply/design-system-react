export const CrazyIcon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10C10 10.5 9.32205 11 8.5 11C7.67795 11 7 10.5523 7 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 10C17 8.34315 16.3284 7 15.5 7C14.6716 7 14 8.34315 14 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.633 13.5C17.1164 14.1528 17.1867 15.1365 16.4482 15.8211C14.9899 17.173 13.148 15.7039 12.2062 15.6704C11.2635 15.637 10.7624 16.555 8.86254 16.9554C7.70902 17.1985 7 16.5 7 15.6704"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
