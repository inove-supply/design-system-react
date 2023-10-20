export const Vynil02Icon = ({
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
      <g clipPath="url(#clip0_3_1024)">
        <path
          d="M21.5 12.5C21.5 18.0228 17.0228 22.5 11.5 22.5C5.97715 22.5 1.5 18.0228 1.5 12.5C1.5 6.97715 5.97715 2.5 11.5 2.5C12.6688 2.5 13.7907 2.70051 14.8333 3.06902"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M19.5 9C19.5 10.3807 18.3807 11.5 17 11.5C15.6193 11.5 14.5 10.3807 14.5 9C14.5 7.61929 15.6193 6.5 17 6.5C18.3807 6.5 19.5 7.61929 19.5 9ZM19.5 9V1.5C19.8333 2 20.1 4.1 22.5 4.5"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 12.5C13 11.6716 12.3284 11 11.5 11C10.6716 11 10 11.6716 10 12.5C10 13.3284 10.6716 14 11.5 14C12.3284 14 13 13.3284 13 12.5Z"
          strokeWidth={strokeWidth}
        />
      </g>
      <defs>
        <clipPath id="clip0_3_1024">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
