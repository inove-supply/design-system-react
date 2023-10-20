export const HourglassOffIcon = ({
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
        d="M5 5C5 8.86599 8.13401 12 12 12C8.13401 12 5 15.134 5 19V22M19 19V22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M19 22H4" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M19.75 2C19.75 1.58579 19.4142 1.25 19 1.25C18.5858 1.25 18.25 1.58579 18.25 2H19.75ZM15.5777 10.3802C15.2354 10.6134 15.147 11.08 15.3802 11.4223C15.6134 11.7646 16.08 11.853 16.4223 11.6198L15.5777 10.3802ZM20 2.75C20.4142 2.75 20.75 2.41421 20.75 2C20.75 1.58579 20.4142 1.25 20 1.25V2.75ZM6.5 1.25C6.08579 1.25 5.75 1.58579 5.75 2C5.75 2.41421 6.08579 2.75 6.5 2.75L6.5 1.25ZM18.25 2V5H19.75V2H18.25ZM18.25 5C18.25 7.3145 17.1573 9.30391 15.5777 10.3802L16.4223 11.6198C18.4381 10.2463 19.75 7.77815 19.75 5H18.25ZM20 1.25H6.5L6.5 2.75H20V1.25Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2 2L22 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
