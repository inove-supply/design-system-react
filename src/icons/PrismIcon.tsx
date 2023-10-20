export const PrismIcon = ({
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
        d="M15.5802 8L14.9874 6.85021C13.664 4.2834 13.0023 3 12 3C10.9977 3 10.336 4.2834 9.01261 6.85021L4.59051 15.4272C3.31146 17.908 2.67193 19.1484 3.16823 20.0742C3.66452 21 4.96898 21 7.5779 21H16.4221C19.031 21 20.3355 21 20.8318 20.0742C21.3281 19.1484 20.6885 17.908 19.4095 15.4272L19.0598 14.7489"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10L22 7M8 10L21.4615 11.5M8 10L22 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10L2 11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
