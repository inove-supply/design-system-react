export const LollipopIcon = ({
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
        cy="8"
        r="6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M12 14V22" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M6 7.96583C7 6.50024 9 5.66956 10.2857 6.12289C11.7609 6.64301 12.0271 8.38105 13.5 8.90723C15 9.44311 15.5 7.47002 18 7.93564"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
