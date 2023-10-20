export const WasteIcon = ({
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
        d="M3 5H8.42963C9.09834 5 9.7228 4.6658 10.0937 4.1094L10.9063 2.8906C11.2772 2.3342 11.9017 2 12.5704 2H17.0585C17.9193 2 18.6836 2.55086 18.9558 3.36754L19.5 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M21 5H8" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M19.5 5L18.8803 14.906C18.8588 15.2333 18.8387 15.5385 18.8185 15.8235M4.5 5L5.10461 14.8966C5.25945 17.3107 5.33688 18.5177 5.97868 19.3857C6.296 19.8149 6.7048 20.1771 7.17905 20.4493C8.1383 21 9.42312 21 11.9927 21H14.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20 19C20 17.3431 18.6569 16 17 16C15.3431 16 14 17.3431 14 19C14 20.6569 15.3431 22 17 22C18.6569 22 20 20.6569 20 19Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
