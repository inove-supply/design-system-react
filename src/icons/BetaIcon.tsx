export const BetaIcon = ({
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
        d="M12.8831 10.2C15.1353 10.2 16.961 8.58822 16.961 6.6C16.961 4.61177 15.1353 3 12.8831 3C10.6309 3 8.80516 4.61177 8.80516 6.6V19.2C8.80516 20.1941 7.89228 21 6.76619 21C6.01148 21 5.35255 20.638 5 20.1M8.80516 14.7C8.80516 17.1853 11.0874 19.2 13.9026 19.2C16.7178 19.2 19 17.1853 19 14.7C19 12.2147 16.7178 10.0866 13.9026 10.0866"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
