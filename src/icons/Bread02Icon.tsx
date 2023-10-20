export const Bread02Icon = ({
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
        d="M12 14C12 17 9.76142 17 7 17C4.23858 17 2 17 2 14C2 11 4.23858 7 7 7C9.76142 7 12 11 12 14Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M7 7H17C19.7614 7 22 11 22 14C22 17 19.7614 17 17 17H7"
        strokeWidth={strokeWidth}
      />
      <path
        d="M5.86019 17C7.4363 17 9 16.1 9 14C9 11.9 8.14239 10 6.6451 10C5.14782 10 4.31835 13.97 5.7172 14.5C7.03693 15 7.04538 13 7.04538 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
