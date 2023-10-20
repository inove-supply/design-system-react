export const SmartIcon = ({
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
        d="M11 17.7844C13.6177 18.5609 15.9391 17.1496 17 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9.01067C7 9.01067 8.40944 8.88341 9.19588 9.50798M9.19588 9.50798L8.93275 10.3427C8.82896 10.6719 9.10031 11 9.4764 11C9.87165 11 10.1327 10.6434 9.92918 10.3348C9.74877 10.0612 9.50309 9.75196 9.19588 9.50798ZM14 9.01067C14 9.01067 15.4094 8.88341 16.1959 9.50798M16.1959 9.50798L15.9328 10.3427C15.829 10.6719 16.1003 11 16.4764 11C16.8717 11 17.1327 10.6434 16.9292 10.3348C16.7488 10.0612 16.5031 9.75196 16.1959 9.50798Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
