export const TextColorIcon = ({
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
      <path d="M3 21H21" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M19 18L15.6247 9.15847C14.0574 5.05282 13.2737 3 12 3C10.7263 3 9.94261 5.05282 8.37527 9.15847L5 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M8 11H16" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
