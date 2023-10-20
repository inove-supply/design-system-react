export const CopyrightIcon = ({
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M15 14C15 15.1046 14.1046 16 13 16H12C11.0681 16 10.6022 16 10.2346 15.8478C9.74458 15.6448 9.35523 15.2554 9.15224 14.7654C9 14.3978 9 13.9319 9 13V11C9 10.0681 9 9.60218 9.15224 9.23463C9.35523 8.74458 9.74458 8.35523 10.2346 8.15224C10.6022 8 11.0681 8 12 8H13C14.1046 8 15 8.89543 15 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
