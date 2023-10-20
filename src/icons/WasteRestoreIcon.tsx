export const WasteRestoreIcon = ({
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
        d="M19.5 5L19 11.5M4.5 5L5.10461 15.5362C5.25945 18.1069 5.33688 19.3923 5.97868 20.3166C6.296 20.7736 6.7048 21.1593 7.17905 21.4492C7.76127 21.8051 8.46343 21.945 9.5 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11 15.498L12.1363 16.9638C12.708 14.8299 14.9014 13.5636 17.0352 14.1353C18.1275 14.428 18.9925 15.1456 19.5 16.0626M21 20.498L19.8637 19.0343C19.2919 21.1682 17.0986 22.4345 14.9647 21.8627C13.8978 21.5769 13.0477 20.8856 12.5359 19.999"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
