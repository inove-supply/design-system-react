export const ApronIcon = ({
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
        d="M19 11V16C19 18.8284 19 20.2426 18.1213 21.1213C17.2426 22 15.8284 22 13 22H11C8.17157 22 6.75736 22 5.87868 21.1213C5 20.2426 5 18.8284 5 16V11M8 8H16"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12.5 13H11.5C10.5572 13 10.0858 13 9.79289 13.2929C9.5 13.5858 9.5 14.0572 9.5 15V16C9.5 16.9428 9.5 17.4142 9.79289 17.7071C10.0858 18 10.5572 18 11.5 18H12.5C13.4428 18 13.9142 18 14.2071 17.7071C14.5 17.4142 14.5 16.9428 14.5 16V15C14.5 14.0572 14.5 13.5858 14.2071 13.2929C13.9142 13 13.4428 13 12.5 13Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0302 6.5C21.8897 7.89188 20.9043 11 18.5243 11C15.7119 11 16.015 7.9346 16.015 6C16.015 3.79086 14.2174 2 12 2C9.7826 2 7.98504 3.79086 7.98504 6C7.98504 7.9346 8.28808 11 5.47569 11C3.09553 11 2.11029 7.89156 3.97008 6.49982"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
