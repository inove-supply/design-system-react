export const GitPullRequestIcon = ({
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
        d="M6 8L6 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 16V12C18 9.17157 18 7.75736 17.1213 6.87868C16.2426 6 14.8284 6 12 6L11 6M11 6C11 5.29977 12.9943 3.99153 13.5 3.5M11 6C11 6.70023 12.9943 8.00847 13.5 8.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="18" r="2" strokeWidth={strokeWidth} />
      <circle cx="6" cy="6" r="2" strokeWidth={strokeWidth} />
      <circle cx="18" cy="18" r="2" strokeWidth={strokeWidth} />
    </svg>
  )
}
