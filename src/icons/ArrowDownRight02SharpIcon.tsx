export const ArrowDownRight02SharpIcon = ({
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
        d="M5.99609 5.99805L13.4961 13.498"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1486 16.114L16.0786 11.1489C16.359 10.8665 16.8382 11.0129 16.9086 11.4024L17.9959 17.4188C18.0568 17.7562 17.7617 18.0534 17.4243 17.9944L11.407 16.9432C11.0174 16.8751 10.8682 16.3964 11.1486 16.114Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
