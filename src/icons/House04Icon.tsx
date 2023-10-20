export const House04Icon = ({
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
        d="M7 9L11.7707 4.73514C13.0647 3.57838 13.7117 3 14.5 3C15.2883 3 15.9353 3.57838 17.2293 4.73514L22 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8V20M20.5 20V8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="3.5" cy="12" rx="1.5" ry="2" strokeWidth={strokeWidth} />
      <path d="M3.5 14V20" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M2 20H22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V15.9997C12 15.0571 12 14.5858 12.2929 14.2929C12.5858 14 13.0572 14 14 14H15C15.9428 14 16.4142 14 16.7071 14.2929C17 14.5858 17 15.0572 17 16V20"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 11H15.5M13.5 8H15.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
