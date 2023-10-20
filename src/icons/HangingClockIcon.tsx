export const HangingClockIcon = ({
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
      <circle cx="17.5" cy="4.5" r="1.5" strokeWidth={strokeWidth} />
      <circle cx="17.5" cy="15.5" r="4.5" strokeWidth={strokeWidth} />
      <path
        d="M2 8H20"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M17.5 6V11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M2 6V21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M2 20C2 13.3726 7.37258 8 14 8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
      <path
        d="M18.5 16.5L17.5 16V14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
