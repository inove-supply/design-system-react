export const CurvyLeftRightDirectionSharpIcon = ({
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
        d="M3 11H3.95595C6.21181 11 8.04055 12.7909 8.04055 15V17.0845C8.04055 18.1424 8.9163 19 9.99659 19C11.0769 19 11.9526 18.1424 11.9526 17.0845V6.96543C11.9526 5.87995 12.8512 5 13.9596 5C15.0681 5 15.9666 5.87995 15.9666 6.96543V9C15.9666 11.2091 17.7954 13 20.0512 13H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 11L21.2929 12.2929C21.6262 12.6262 21.7929 12.7929 21.7929 13C21.7929 13.2071 21.6262 13.3738 21.2929 13.7071L20 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 13L2.70711 11.7071C2.37377 11.3738 2.20711 11.2071 2.20711 11C2.20711 10.7929 2.37377 10.6262 2.70711 10.2929L4 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
