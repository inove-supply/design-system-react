export const HotTubeIcon = ({
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
        d="M3.6644 16.9864L3 13H21L20.3356 16.9864C19.9365 19.3809 19.737 20.5781 18.8977 21.2891C18.0585 22 16.8448 22 14.4172 22H9.58276C7.15525 22 5.94149 22 5.10226 21.2891C4.26302 20.5781 4.06348 19.3809 3.6644 16.9864Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6 10C19.1333 9.44772 19.1333 8.55228 18.6 8C18.0667 7.44772 18.0667 6.55228 18.6 6M15.4 10C15.9333 9.44772 15.9333 8.55228 15.4 8C14.8667 7.44772 14.8667 6.55228 15.4 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M3 13H2M21 13H22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13V9.8513C5 8.82886 5.82885 8 6.8513 8C8.18 8 9.40683 8.71196 10.0661 9.8656L13 15M9 4C9 5.10457 8.10457 6 7 6C5.89543 6 5 5.10457 5 4C5 2.89543 5.89543 2 7 2C8.10457 2 9 2.89543 9 4Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
