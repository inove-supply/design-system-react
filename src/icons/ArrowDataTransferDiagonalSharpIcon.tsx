export const ArrowDataTransferDiagonalSharpIcon = ({
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
        d="M9 19L18.2929 9.70711C19.0194 8.98058 19.3827 8.61732 19.6913 8.74517C20 8.87302 20 9.38675 20 10.4142V13.7619"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5L5.70711 14.2929C4.98058 15.0194 4.61732 15.3827 4.30866 15.2548C4 15.127 4 14.6133 4 13.5858V10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
