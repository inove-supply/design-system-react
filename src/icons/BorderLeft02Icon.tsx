export const BorderLeft02Icon = ({
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
        d="M17.6667 21.2486C18.715 21.0553 19.4866 20.7134 20.0966 20.1088C20.7065 19.5041 21.0514 18.7392 21.2464 17.7M10 21.495C10.5895 21.5 11.2268 21.5 11.9167 21.5C12.6066 21.5 13.2438 21.5 13.8334 21.495M21.495 13.9C21.5 13.3156 21.5 12.6839 21.5 12C21.5 11.3161 21.5 10.6844 21.495 10.0999M21.2464 6.3C21.0514 5.26076 20.7065 4.49591 20.0966 3.89124C19.4866 3.28657 18.715 2.94471 17.6667 2.75142M10 2.50495C10.5893 2.5 11.2271 2.5 11.9167 2.5C12.6065 2.5 13.2437 2.5 13.8332 2.50495"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 21.5C5.40606 21.3015 4.60096 20.9503 3.96447 20.3292C2.5 18.9001 2.5 16.6001 2.5 12C2.5 7.39991 2.5 5.09987 3.96447 3.6708C4.60096 3.04969 5.40606 2.69854 6.5 2.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
