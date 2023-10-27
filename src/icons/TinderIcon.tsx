export const TinderIcon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2558 8.51453C22.3836 14.4194 19.433 21.5754 12.4376 22C3.44145 22 0.307049 11.3643 7.38031 6.45487C7.38031 14.5 14.1304 7.5 12 2C15 3 17.7939 5.56221 19.2558 8.51453Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
