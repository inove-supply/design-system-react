export const KeyframeTopIcon = ({
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
        d="M13.3091 18.9975C12.7049 19.6658 12.4029 20 12 20C11.5971 20 11.2951 19.6658 10.6909 18.9975L9.20516 17.3537C8.40172 16.4649 8 16.0205 8 15.5C8 14.9795 8.40172 14.5351 9.20515 13.6463L10.6909 12.0025C11.2951 11.3342 11.5971 11 12 11C12.4029 11 12.7049 11.3342 13.3091 12.0025L14.7948 13.6463C15.5983 14.5351 16 14.9795 16 15.5C16 16.0205 15.5983 16.4649 14.7948 17.3537L13.3091 18.9975Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 8V4M21 4L3 4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
