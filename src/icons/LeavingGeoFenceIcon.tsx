export const LeavingGeoFenceIcon = ({
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
        d="M12 17L12 3M12 3C11.6272 3 11.3272 3.34263 10.7272 4.02777L9 6.00006M12 3C12.3728 3 12.6728 3.34263 13.2728 4.02777L15 6.00006"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15C3.7492 15.6327 3 16.4385 3 17.3158C3 19.3505 7.02944 21 12 21C16.9706 21 21 19.3505 21 17.3158C21 16.4385 20.2508 15.6327 19 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
