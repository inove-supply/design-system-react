export const HddIcon = ({
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
        d="M20 14V10C20 6.22876 20 4.34315 18.8973 3.17157C17.7947 2 16.02 2 12.4706 2L11.5294 2C7.98001 2 6.20531 2 5.10266 3.17157C4 4.34315 4 6.22876 4 10L4 14C4 17.7712 4 19.6569 5.10266 20.8284C6.20531 22 7.98001 22 11.5294 22H12.4706C16.02 22 17.7947 22 18.8973 20.8284C20 19.6569 20 17.7712 20 14Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.80059 12.6645C9.61627 13.4891 10.7485 14 12 14C14.4853 14 16.5 11.9853 16.5 9.5C16.5 7.01472 14.4853 5 12 5C9.51472 5 7.5 7.01472 7.5 9.5C7.5 10.7337 7.9965 11.8515 8.80059 12.6645ZM8.80059 12.6645L12 9.46504"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10 19H14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
