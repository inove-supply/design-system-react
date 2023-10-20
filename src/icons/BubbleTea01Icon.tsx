export const BubbleTea01Icon = ({
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
        d="M18 9L16.5218 18.4136C16.2728 19.9992 16.1483 20.7921 15.5864 21.2644C14.3865 22.273 9.54699 22.217 8.41358 21.2644C7.85167 20.7921 7.72718 19.9992 7.47819 18.4136L6 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 9L6.51444 7.71391C7.41167 5.47084 9.58414 4 12 4C14.4159 4 16.5883 5.47084 17.4856 7.71391L18 9"
        strokeWidth={strokeWidth}
      />
      <path d="M5 9H19" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M13 9L16 2" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M10.0089 16.5H10M14 18H13.9911M13.0112 14H13.0023"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
