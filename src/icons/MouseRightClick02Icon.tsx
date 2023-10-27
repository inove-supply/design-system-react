export const MouseRightClick02Icon = ({
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
        d="M13.5 2.09084C12.8345 2.02383 12.1611 2 11.5 2C10.5753 2 9.66267 2.07762 8.7651 2.1882C6.32417 2.48893 4.43061 4.51965 4.24069 6.91118C4.10906 8.56832 4 10.268 4 12C4 13.732 4.10906 15.4317 4.24069 17.0888C4.43061 19.4803 6.32417 21.511 8.7651 21.8118C9.66267 21.9223 10.5753 22 11.5 22C12.4248 22 13.3374 21.9223 14.235 21.8118C16.6758 21.511 18.5695 19.4803 18.7594 17.0888C18.891 15.4317 19 13.732 19 12C19 11.3283 18.9836 10.6614 18.9558 10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M11.5 2L11.5 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 11H4.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        r="2.5"
        transform="matrix(-1 0 0 1 17.5 5)"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
