export const GitMergeIcon = ({
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
        d="M7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8L7.75 8ZM6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16H6.25ZM15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25V12.75ZM7.10222 9.77646L7.82667 9.58234L7.10222 9.77646ZM9.22354 11.8978L9.02943 12.6222H9.02943L9.22354 11.8978ZM6.25 8L6.25 16H7.75L7.75 8L6.25 8ZM11 12.75H15V11.25H11V12.75ZM6.25 8C6.25 8.88169 6.24356 9.46966 6.37778 9.97057L7.82667 9.58234C7.75644 9.32026 7.75 8.97826 7.75 8H6.25ZM11 11.25C10.0217 11.25 9.67974 11.2436 9.41766 11.1733L9.02943 12.6222C9.53034 12.7564 10.1183 12.75 11 12.75V11.25ZM6.37778 9.97057C6.72453 11.2647 7.73533 12.2755 9.02943 12.6222L9.41766 11.1733C8.6412 10.9653 8.03472 10.3588 7.82667 9.58234L6.37778 9.97057Z"
        strokeWidth={strokeWidth}
      />
      <circle cx="7" cy="18" r="2" strokeWidth={strokeWidth} />
      <circle cx="7" cy="6" r="2" strokeWidth={strokeWidth} />
      <circle cx="17" cy="12" r="2" strokeWidth={strokeWidth} />
    </svg>
  )
}
