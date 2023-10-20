export const PinLocation01Icon = ({
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
      <circle cx="12" cy="7" r="4" strokeWidth={strokeWidth} />
      <path d="M12 11L12 18" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M15.847 16C17.4943 18.113 18.3179 19.1695 17.8865 20.006C17.8466 20.0832 17.7999 20.1578 17.7469 20.229C17.1723 21 15.6875 21 12.7178 21H11.2822C8.31251 21 6.82765 21 6.25311 20.229C6.20005 20.1578 6.15339 20.0832 6.11355 20.006C5.68206 19.1695 6.50571 18.113 8.15301 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
