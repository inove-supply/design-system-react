export const ArrowUpRight02SharpIcon = ({
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
        d="M5.99609 18.0039L13.4961 10.5039"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1486 7.88794L16.0786 12.853C16.359 13.1354 16.8382 12.9891 16.9086 12.5995L17.9959 6.58317C18.0568 6.2458 17.7617 5.94856 17.4243 6.00751L11.407 7.05875C11.0174 7.12682 10.8682 7.60555 11.1486 7.88794Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
