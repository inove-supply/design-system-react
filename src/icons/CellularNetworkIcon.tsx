export const CellularNetworkIcon = ({
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
      <path d="M12 11L12 20" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M16.9588 6C17.6186 6.86961 18 7.89801 18 9C18 10.102 17.6186 11.1304 16.9588 12M7.04117 6C6.38143 6.86961 6 7.89801 6 9C6 10.102 6.38143 11.1304 7.04117 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.3159 4C21.3796 5.43008 22 7.14984 22 9C22 10.8502 21.3796 12.5699 20.3159 14M3.68409 4C2.62036 5.43008 2 7.14984 2 9C2 10.8502 2.62036 12.5699 3.68409 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
