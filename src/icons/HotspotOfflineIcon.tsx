export const HotspotOfflineIcon = ({
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
        d="M14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M4 20.001C2.74418 18.3295 2 16.2516 2 14C2 10.7288 3.57069 7.82446 5.99903 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.5 4.62961C9.58934 4.22255 10.7687 4 12 4C17.5228 4 22 8.47715 22 14C22 15.2313 21.7775 16.4107 21.3704 17.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7.50087 18C6.56753 16.9385 6 15.5367 6 14C6 11.913 7.04673 10.0749 8.63494 9M16.2877 18C16.5573 17.6934 16.7963 17.3584 17 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18 14C18 10.6863 15.3137 8 12 8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M2 2L22 22" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
