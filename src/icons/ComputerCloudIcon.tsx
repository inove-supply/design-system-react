export const ComputerCloudIcon = ({
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
        d="M11 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.8652 15.1114 21.9777 13.8094 21.9963 11.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13 6.66667C13 7.95533 14.0074 9 15.25 9H19.975C21.0934 9 22 8.0598 22 6.9C22 5.7402 21.0833 4.80003 19.9649 4.80003C20.0897 3.36433 18.9799 2 17.5 2C16.2055 2 15.143 3.03069 15.0342 4.34393C13.8928 4.45657 13 5.45349 13 6.66667Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 15H13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 18V22" strokeWidth={strokeWidth} />
      <path d="M8 22H16" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
