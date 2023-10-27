export const SmartPhoneLandscapeIcon = ({
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
        d="M9 19C5.70017 19 4.05025 19 3.02513 17.9749C2 16.9497 2 15.2998 2 12C2 8.70017 2 7.05025 3.02513 6.02513C4.05025 5 5.70017 5 9 5L15 5C18.2998 5 19.9497 5 20.9749 6.02513C22 7.05025 22 8.70017 22 12C22 15.2998 22 16.9497 20.9749 17.9749C19.9497 19 18.2998 19 15 19L9 19Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M19 13L19 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 15L2.53402 14.911C3.74122 14.7098 4.31845 14.6028 4.66642 14.1724C5 13.7599 5 13.1732 5 12C5 10.7761 4.98934 10.1892 4.62204 9.77519C4.26993 9.37832 3.69129 9.28188 2.53402 9.089L2 9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
