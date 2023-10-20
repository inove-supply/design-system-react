export const SkewIcon = ({
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
        cx="9"
        cy="4"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle
        cx="19"
        cy="7"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle
        cx="20"
        cy="20"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle
        cx="4"
        cy="18"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10.9171 4.5752L17.0848 6.4255M19.1544 8.99455L19.8476 18.0061M18.0162 19.7523L5.98574 18.2484M8.32812 5.88435L4.67383 16.1164"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
