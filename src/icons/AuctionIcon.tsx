export const AuctionIcon = ({
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
        d="M12 14.0059L5.84373 21.2328C5.01764 22.2026 3.54001 22.2616 2.63922 21.3608C1.73843 20.46 1.79744 18.9824 2.7672 18.1563L9.99412 12"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M22 11.9048L15.9048 18M12.0952 2L6 8.09524M11.3334 2.76186L6.76195 7.33329C6.76195 7.33329 9.04766 10.3809 11.3334 12.6666C13.6191 14.9523 16.6667 17.2381 16.6667 17.2381L21.2381 12.6666C21.2381 12.6666 18.9524 9.61901 16.6667 7.33329C14.381 5.04758 11.3334 2.76186 11.3334 2.76186Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
