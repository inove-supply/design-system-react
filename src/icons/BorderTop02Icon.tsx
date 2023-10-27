export const BorderTop02Icon = ({
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
        d="M2.75338 17.6667C2.94666 18.715 3.28853 19.4866 3.8932 20.0966C4.49787 20.7065 5.26271 21.0514 6.30195 21.2464M2.50691 10C2.50195 10.5895 2.50195 11.2268 2.50195 11.9167C2.50195 12.6066 2.50195 13.2438 2.50691 13.8334M10.102 21.495C10.6864 21.5 11.3181 21.5 12.002 21.5C12.6859 21.5 13.3176 21.5 13.902 21.495M17.702 21.2464C18.7412 21.0514 19.506 20.7065 20.1107 20.0966C20.7154 19.4866 21.0572 18.715 21.2505 17.6667M21.497 10C21.502 10.5893 21.502 11.2271 21.502 11.9167C21.502 12.6065 21.502 13.2437 21.497 13.8332"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 6.5C2.69854 5.40606 3.04969 4.60096 3.6708 3.96447C5.09987 2.5 7.39991 2.5 12 2.5C16.6001 2.5 18.9001 2.5 20.3292 3.96447C20.9503 4.60096 21.3015 5.40606 21.5 6.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
