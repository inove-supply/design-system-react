export const UserStoryIcon = ({
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
        d="M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16.5C10.0726 14.302 13.9051 14.1986 16 16.5M14.2179 9.75C14.2179 10.9926 13.2215 12 11.9925 12C10.7634 12 9.76708 10.9926 9.76708 9.75C9.76708 8.50736 10.7634 7.5 11.9925 7.5C13.2215 7.5 14.2179 8.50736 14.2179 9.75Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
