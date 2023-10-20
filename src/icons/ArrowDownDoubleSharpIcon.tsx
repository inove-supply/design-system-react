export const ArrowDownDoubleSharpIcon = ({
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
        d="M6 12.5L11.3243 17.3806C11.6451 17.6747 11.8055 17.8217 12 17.8217C12.1945 17.8217 12.3549 17.6747 12.6757 17.3806L18 12.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L11.3243 10.8806C11.6451 11.1747 11.8055 11.3217 12 11.3217C12.1945 11.3217 12.3549 11.1747 12.6757 10.8806L18 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
