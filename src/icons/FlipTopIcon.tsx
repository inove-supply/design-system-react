export const FlipTopIcon = ({
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
        d="M9.66676 22L14.3334 22M3.01509 16.5C2.99793 16.0004 2.99705 15.5001 2.99855 15M20.9849 16.5C21.0021 16.0004 21.003 15.5001 21.0015 15M3.53709 19.2547C4.02122 20.213 4.80249 20.9914 5.76305 21.4718M18.1797 21.5C19.1665 21.0221 19.9692 20.232 20.4629 19.2547"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5.50502 12C3.64422 12 3.00695 11.4596 3.00695 9.5C3.00695 6.96832 2.75702 4.04633 5.25521 2.60289C6.29863 2 7.69947 2 10.5012 2L13.4988 2C16.3005 2 17.7014 2 18.7448 2.60289C21.243 4.04633 20.9931 6.96832 20.9931 9.5C20.9931 11.3622 20.453 12 18.495 12L5.50502 12Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
