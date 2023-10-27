export const CayanTowerIcon = ({
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
        d="M18 22C18 19.8333 16.4136 15.3 14.9492 12.5C13.4848 9.7 12.3765 4.33333 11.9697 2L6.47299 4C4.64237 9.5 8.48152 15.6 11.8984 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18H11.5M8 15.0185L10.5 15M7.5 12H10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2L17.5719 4C18.5782 7 17.7186 10.362 15.9505 14.4155M6 22C6 20.2797 6.85094 17.152 8 14.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 22L20 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
