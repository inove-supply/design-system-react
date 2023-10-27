export const ArrowDataTransferVerticalSharpIcon = ({
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
        d="M15 19.5V6.754C15 5.78589 15 5.30183 15.2972 5.16996C15.5945 5.03809 15.9533 5.36293 16.6711 6.01262L19 8.12069"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 4.5V17.0858C9 18.1133 9 18.627 8.69134 18.7548C8.38268 18.8827 8.01942 18.5194 7.29289 17.7929L5 15.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
