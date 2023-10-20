export const AdzanIcon = ({
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
        d="M6.59279 12C2.73603 6.28571 10.1661 4.5 11.9987 2C13.8316 4.5 21.2614 6.28571 17.4021 12H6.59279Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16L12 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 12V16.2857C6.5 18.9795 6.5 20.3263 7.30546 21.1632C8.11091 22 9.40728 22 12 22C14.5927 22 15.8891 22 16.6945 21.1632C17.5 20.3263 17.5 18.9795 17.5 16.2857V12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 14L21 13.5M20 18L21 18.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 14L3 13.5M4 18L3 18.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
