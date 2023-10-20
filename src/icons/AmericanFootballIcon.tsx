export const AmericanFootballIcon = ({
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
        d="M21.3004 6.05187C21.1481 5.22701 20.7409 4.45623 20.137 3.85008C19.5307 3.24641 18.7596 2.83927 17.9345 2.68704C13.7377 1.98816 9.32832 3.26088 6.29871 6.28553C3.26975 9.30951 1.99026 13.7155 2.68429 17.9122C2.83655 18.7371 3.24381 19.5079 3.84767 20.114C4.45401 20.7177 5.22503 21.1248 6.05015 21.2771C10.221 22.0738 14.6994 20.7027 17.6915 17.6794C20.7493 14.6729 22.0289 10.2497 21.3004 6.05187Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4 20L20 4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L12 15M12 9L15 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
