export const ArtboardIcon = ({
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
        d="M8 4.5V3M16 4.5V3"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 8L21 8M19.5 16H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 21V19.5M16 21V19.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8L4.5 8M3 16H4.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11C8 9.58579 8 8.87868 8.43934 8.43934C8.87868 8 9.58579 8 11 8H13C14.4142 8 15.1213 8 15.5607 8.43934C16 8.87868 16 9.58579 16 11V13C16 14.4142 16 15.1213 15.5607 15.5607C15.1213 16 14.4142 16 13 16H11C9.58579 16 8.87868 16 8.43934 15.5607C8 15.1213 8 14.4142 8 13V11Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
