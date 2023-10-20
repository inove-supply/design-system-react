export const ArrowReloadVerticalRoundIcon = ({
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
        d="M5.5 3.5L5.5 14.5C5.5 18.2133 8.18503 21 12 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 20.5L18.5 9.5C18.5 5.78672 15.815 3 12 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 18C21 18 19.1588 20.5 18.5 20.5C17.8412 20.5 16 18 16 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.49998C8 5.49998 6.15878 3.00001 5.49998 3C4.84118 2.99999 3 5.5 3 5.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
