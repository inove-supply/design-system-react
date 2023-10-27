export const RectangularIcon = ({
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
        d="M7.68924 2.43826L5.3538 4.21913C4.38173 4.96038 3.89569 5.33101 4.01879 5.6655C4.14189 6 4.76432 6 6.00918 6H16C16.3645 6 16.5467 6 16.7153 5.94363C16.8839 5.88726 17.0262 5.77875 17.3108 5.56174L19.6462 3.78087C20.6183 3.03962 21.1043 2.66899 20.9812 2.3345C20.8581 2 20.2357 2 18.9908 2H9C8.63555 2 8.45332 2 8.28472 2.05637C8.11612 2.11274 7.97383 2.22125 7.68924 2.43826Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M4.01879 21.666C4.14189 22.0005 4.76432 22.0005 6.00918 22.0005H16C16.3645 22.0005 16.5467 22.0005 16.7153 21.9441M4.01879 21.666C3.89569 21.3315 4.38173 20.9608 5.3538 20.2196L7.68924 18.4387C7.97383 18.2217 8.11612 18.1132 8.28472 18.0568M4.01879 21.666V5.66597M8.28472 18.0568C8.45332 18.0005 8.63555 18.0005 9 18.0005H14M8.28472 18.0568V9.00046M16.7153 21.9441C16.8839 21.8877 17.0262 21.7792 17.3108 21.5622L19.6462 19.7813C20.6183 19.0401 21.1043 18.6695 20.9812 18.335V2.33496M16.7153 21.9441V5.94409"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
