export const KeyframeBottomIcon = ({
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
        d="M10.6909 5.00254C11.2951 4.33418 11.5971 4 12 4C12.4029 4 12.7049 4.33418 13.3091 5.00253L14.7948 6.64627C15.5983 7.53512 16 7.97954 16 8.5C16 9.02046 15.5983 9.46488 14.7948 10.3537L13.3091 11.9975C12.7049 12.6658 12.4029 13 12 13C11.5971 13 11.2951 12.6658 10.6909 11.9975L9.20516 10.3537C8.40172 9.46488 8 9.02046 8 8.5C8 7.97954 8.40172 7.53512 9.20515 6.64627L10.6909 5.00254Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 16V20M3 20H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
