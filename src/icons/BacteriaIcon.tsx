export const BacteriaIcon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="15"
        cy="8"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12.5L6.20943 12.735C6.59836 13.1714 7.25402 13.052 7.5 12.5C7.74598 11.948 8.40164 11.8286 8.79057 12.265L9 12.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8413 18L15.9521 17.6549C16.1579 17.014 15.6742 16.4273 15 16.5C14.3258 16.5727 13.8421 15.986 14.0479 15.3451L14.1587 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19.009 13H19" strokeWidth={strokeWidth} />
      <path d="M9.00896 17H9" strokeWidth={strokeWidth} />
      <path d="M8.00896 8H8" strokeWidth={strokeWidth} />
    </svg>
  )
}
