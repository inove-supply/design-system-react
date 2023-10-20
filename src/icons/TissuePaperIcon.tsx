export const TissuePaperIcon = ({
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
        d="M10 9.5C10 12.5376 8.20914 15 6 15C3.79086 15 2 12.5376 2 9.5C2 6.46243 3.79086 4 6 4C8.20914 4 10 6.46243 10 9.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M21.8127 10.6943C21.9339 10.1652 22 9.59475 22 9C22 6.23858 20.5755 4 18.8182 4L6 4C9.15512 4 10.5704 7.955 10.0225 10.5666C9.45596 13.2674 7.17947 16.369 7.38872 19.1311C7.42593 19.6223 7.79914 20 8.24715 20H18.3605C18.8516 20 19.2378 19.5383 19.197 19C18.9931 16.3084 21.2125 13.3133 21.8127 10.6943Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M6.00801 9.5L5.99902 9.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
