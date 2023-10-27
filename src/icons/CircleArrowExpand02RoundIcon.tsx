export const CircleArrowExpand02RoundIcon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M16.0633 16.0634C16.5806 15.5461 16.4946 13.3483 16.4946 13.3483M16.0633 16.0634C15.546 16.5808 13.3483 16.4946 13.3483 16.4946M16.0633 16.0634L13 13M7.93655 7.93661C8.45388 7.41928 10.6516 7.50537 10.6516 7.50537M7.93655 7.93661C7.41923 8.45394 7.50538 10.6516 7.50538 10.6516M7.93655 7.93661L11 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
