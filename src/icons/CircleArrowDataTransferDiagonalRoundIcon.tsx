export const CircleArrowDataTransferDiagonalRoundIcon = ({
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
        d="M13.6898 8L8.87715 13.1068C8.48493 13.523 8.28882 13.7311 8.13302 13.6693C7.97723 13.6076 7.98998 13.3268 8.01548 12.7653L8.09598 10.9932M10.3102 16L15.1228 10.8932C15.5151 10.477 15.7112 10.2689 15.867 10.3307C16.0228 10.3924 16.01 10.6732 15.9845 11.2347L15.904 13.0068"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
