export const PlayListMinusIcon = ({
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
      <path d="M2 7.5H21" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path
        d="M16.5 2.5L13.5 7.5"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9.5 2.5L6.5 7.5"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M14 18H22" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
