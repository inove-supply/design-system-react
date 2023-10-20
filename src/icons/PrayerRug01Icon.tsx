export const PrayerRug01Icon = ({
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
        d="M5 21L16 21C17.8856 21 18.8284 21 19.4142 20.4142C20 19.8284 20 18.8856 20 17L20 11C20 9.11438 20 8.17157 19.4142 7.58579C18.8284 7 17.8856 7 16 7L8 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 21H4C2.89543 21 2 20.1046 2 19M2 19C2 17.8954 2.89543 17 4 17V17C5.88562 17 6.82843 17 7.41421 16.4142C8 15.8284 8 14.8856 8 13V8C8 6.11438 8 5.17157 7.41421 4.58579C6.82843 4 5.88562 4 4 4V4C2.89543 4 2 4.89543 2 6V19Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11 16.3569H11.331C11.6209 16.3569 11.7658 16.3569 11.888 16.3856C12.0102 16.4144 12.2427 16.5307 12.7077 16.7634C14.3103 17.5655 15.3792 16.1625 16.3037 15.0273C16.7679 14.4572 17 14.1722 17 13.9999C17 13.8277 16.7679 13.5427 16.3036 12.9726C15.3792 11.8374 14.3103 10.4345 12.7077 11.2366C12.2427 11.4693 12.0102 11.5856 11.888 11.6144C11.7658 11.6431 11.6209 11.6431 11.331 11.6431L11 11.6431"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 16L22 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20L22 20"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12L22 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8L22 8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
