export const SquareLockAdd01Icon = ({
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
        d="M11.0658 22C9.43835 22 8.11054 21.966 6.6557 21.9009C4.92675 21.8235 3.50598 20.515 3.27504 18.8447C3.12431 17.7547 3 16.6376 3 15.5C3 14.3624 3.12431 13.2453 3.27504 12.1553C3.50598 10.485 4.92675 9.17649 6.6557 9.09909C8.11054 9.03397 9.5884 9 11.2159 9C12.8433 9 14.3212 9.03397 15.776 9.09909C17.2713 9.16603 18.536 10.1538 19 11.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.5 9V6.5C6.5 4.01472 8.51472 2 11 2C13.4853 2 15.5 4.01472 15.5 6.5V9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 22L17 14M13 18H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
