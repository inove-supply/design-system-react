export const ArrowDown05SharpIcon = ({
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
        d="M6 19.25C5.58579 19.25 5.25 19.5858 5.25 20C5.25 20.4142 5.58579 20.75 6 20.75V19.25ZM18 20.75C18.4142 20.75 18.75 20.4142 18.75 20C18.75 19.5858 18.4142 19.25 18 19.25V20.75ZM6 20.75H18V19.25H6V20.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M11.5 11.8726H14.5557C14.9298 11.8726 15.1358 12.3549 14.8989 12.6762L11.8433 16.8195C11.6658 17.0602 11.3342 17.0602 11.1567 16.8195L8.10109 12.6762C7.86416 12.3549 8.07019 11.8726 8.44435 11.8726H11.5ZM11.5 11.8726V4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
