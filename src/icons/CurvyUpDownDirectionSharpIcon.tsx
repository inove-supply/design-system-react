export const CurvyUpDownDirectionSharpIcon = ({
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
        d="M11 21.5L11 20.044C11 17.7882 12.7909 15.9595 15 15.9595L17.0845 15.9595C18.1424 15.9595 19 15.0837 19 14.0034C19 12.9231 18.1424 12.0474 17.0845 12.0474L6.96543 12.0474C5.87995 12.0474 5 11.1488 5 10.0404C5 8.93193 5.87995 8.03337 6.96543 8.03337L9 8.03337C11.2091 8.03337 13 6.20463 13 3.94877L13 2.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 4L13.7071 2.70711C13.3738 2.37377 13.2071 2.20711 13 2.20711C12.7929 2.20711 12.6262 2.37377 12.2929 2.70711L11 4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 20L11.7071 21.2929C11.3738 21.6262 11.2071 21.7929 11 21.7929C10.7929 21.7929 10.6262 21.6262 10.2929 21.2929L9 20"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
