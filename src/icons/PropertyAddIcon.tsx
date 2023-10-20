export const PropertyAddIcon = ({
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
        d="M20.9977 12.5C20.9977 12.5 21 12 21 11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.78249 21 7.02166 21 11.5 21C12.0307 21 12.5 20.9977 12.5 20.9977"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M2 7H21" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path
        d="M10 16H11.5M6 16H7M10 12H16M6 12H7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 18.5H22M18.5 22L18.5 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
