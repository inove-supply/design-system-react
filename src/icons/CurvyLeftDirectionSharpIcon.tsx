export const CurvyLeftDirectionSharpIcon = ({
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
        d="M22 11H20.044C17.7882 11 15.9595 12.7909 15.9595 15V17.0845C15.9595 18.1424 15.0837 19 14.0034 19C12.9231 19 12.0474 18.1424 12.0474 17.0845V6.96543C12.0474 5.87995 11.1488 5 10.0404 5C8.93193 5 8.03337 5.87995 8.03337 6.96543V9C8.03337 11.2091 6.20463 13 3.94877 13H2.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 15L2.70711 13.7071C2.37377 13.3738 2.20711 13.2071 2.20711 13C2.20711 12.7929 2.37377 12.6262 2.70711 12.2929L4 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
