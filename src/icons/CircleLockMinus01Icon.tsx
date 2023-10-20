export const CircleLockMinus01Icon = ({
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
        d="M11 22C7.06358 22.0975 4 18.8075 4 15C4 11.134 7.11877 8 10.966 8C13.5444 8 15.7956 9.4077 17 11.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M15.5 9.5V6.5C15.5 4.01472 13.4853 2 11 2C8.51472 2 6.5 4.01472 6.5 6.5V9.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M12 17H20" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
