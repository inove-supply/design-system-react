export const RotateClockwiseIcon = ({
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
        d="M4 2V5.13219C4 5.42605 4.36724 5.55908 4.55527 5.33333C6.3854 3.2875 9.04499 2 12.0051 2C17.5251 2 22 6.47715 22 12C22 15.9582 19.7015 19.3793 16.367 21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7347 21.9998C12.2016 21.9998 12.6611 21.9686 13.1111 21.9081M2.26537 8.6665C2.15297 9.06369 2.06477 9.46511 2 9.86876M2.03457 13.5378C2.10487 13.9379 2.19644 14.334 2.30852 14.7242M3.83292 17.9961C4.07124 18.3495 4.3296 18.6897 4.6071 19.0144M7.42857 21.3605C7.78228 21.563 8.15042 21.7461 8.53228 21.9081"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
