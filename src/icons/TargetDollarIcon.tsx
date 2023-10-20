export const TargetDollarIcon = ({
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
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        strokeWidth={strokeWidth}
      />
      <path d="M12 2V4" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M22 12L20 12" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M12 20L12 22" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M4 12H2" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
