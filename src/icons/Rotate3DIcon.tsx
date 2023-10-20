export const Rotate3DIcon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 12C7.18491 16.8269 16.4642 16.3877 22 12.3556"
        strokeWidth={strokeWidth}
      />
      <path
        d="M11.5368 2C6.98945 6.5 6.48414 17 11.9941 22"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
