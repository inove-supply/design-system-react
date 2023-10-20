export const TextItalicIcon = ({
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
      <path d="M12 4H19" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 20L16 4" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M5 20H12" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
