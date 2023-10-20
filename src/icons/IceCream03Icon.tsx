export const IceCream03Icon = ({
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
        d="M12 2C9.00353 2 6.31715 4.74891 7.15597 7.78336C7.38917 8.627 6 8.96316 6 9.873C6 12.5824 10.5 9.83716 10.5 12.7868C10.5 14.4044 13 14.4044 13 12.7868C13 9.62712 18 12.8244 18 9.873C18 8.96316 16.6108 8.627 16.844 7.78336C17.6828 4.74891 14.9965 2 12 2Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11L8.32693 13.9652C9.82073 19.3217 10.5676 22 12 22C13.4324 22 14.1793 19.3217 15.6731 13.9652L16.5 11"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}
