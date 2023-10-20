export const HotspotIcon = ({
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
      <circle
        cx="12"
        cy="14"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M4 20.001C2.74418 18.3295 2 16.2516 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14C22 16.2516 21.2558 18.3295 20 20.001"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7.52779 18C6.57771 16.9385 6 15.5367 6 14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14C18 15.5367 17.4223 16.9385 16.4722 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
