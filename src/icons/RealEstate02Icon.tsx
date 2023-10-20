export const RealEstate02Icon = ({
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
        d="M21 22V7.4849C21 6.38738 21 5.83862 20.6845 5.37551C20.3689 4.9124 19.7876 4.608 18.6251 3.99921L17.1459 3.22461C15.3209 2.26893 14.4084 1.7911 13.7042 2.08712C13 2.38315 13 3.24459 13 4.96746V9"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M22 22H2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8H19M21 11H19M21 14H19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13C8 11.1144 8 10.1716 8.58579 9.58579C9.17157 9 10.1144 9 12 9V9C13.8856 9 14.8284 9 15.4142 9.58579C16 10.1716 16 11.1144 16 13V22H8V13Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M11.5 13H12.5M11.5 16H12.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <ellipse cx="3.5" cy="14" rx="1.5" ry="2" strokeWidth={strokeWidth} />
      <path d="M3.5 16V22" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
