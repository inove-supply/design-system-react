export const MapsCircle01Icon = ({
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
        d="M15.1287 13.7468C14.9601 13.9092 14.7347 14 14.5001 14C14.2655 14 14.0401 13.9092 13.8715 13.7468C12.3272 12.2504 10.2576 10.5788 11.2669 8.15187C11.8126 6.83966 13.1225 6 14.5001 6C15.8777 6 17.1876 6.83966 17.7333 8.15187C18.7413 10.5757 16.6768 12.2555 15.1287 13.7468Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.5 9.5H14.509"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 15L5 19M15 21L3 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
