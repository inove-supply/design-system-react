export const BeltIcon = ({
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
        d="M8.9751 17.9655C12.4619 17.5232 16 16.3318 16 12C16 7.66817 12.4619 6.47683 8.9751 6.0345C6.62063 5.73582 6 7.41975 6 9.41154V14.5885C6 16.5803 6.62063 18.2642 8.9751 17.9655Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 7.5H6M2 16.5H6M14 7.5H22M14 16.5L22 16.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M5 12H10" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M19.9998 12H20.0088"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
