export const Notion02Icon = ({
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
        d="M2.5 3.5L16.5 2.5L21.5 5.5M2.5 3.5L6.5 6.5M2.5 3.5V16.5L6.5 21.5M21.5 5.5L6.5 6.5M21.5 5.5V19.5L6.5 21.5M6.5 6.5V21.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4704 17.7039L9.5 18.1M18.5 8.69995L16.2654 8.84892M17.5 8.76662V17L11.7148 9.1523L9.5 9.29995M11 9.19995V17.7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
