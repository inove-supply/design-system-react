export const CoinsSwapIcon = ({
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
        d="M10 7.0268C10.483 4.17323 12.9665 2 15.9575 2C19.2947 2 22 4.70532 22 8.0425C22 11.0335 19.8268 13.517 16.9732 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 22C11.3137 22 14 19.3137 14 16C14 12.6863 11.3137 10 8 10C4.68629 10 2 12.6863 2 16C2 19.3137 4.68629 22 8 22Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9C2 5.68286 4.68286 3 8 3L7.14286 4.71429"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 15C22 18.3171 19.3171 21 16 21L16.8571 19.2857"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
