export const BloodIcon = ({
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
        d="M5.5 15.5C3.28795 14.6166 2 12.4328 2 10.1746C2 7.24571 4.31698 4.35135 5.94326 2.68056C6.82649 1.77315 8.17351 1.77315 9.05674 2.68056C9.54874 3.18602 9.96485 3.80348 10.5 4.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M8 14.9263C8 11.3698 10.9489 7.85521 13.0187 5.82639C14.1428 4.72454 15.8572 4.72454 16.9813 5.82639C19.0511 7.85521 22 11.3698 22 14.9263C22 18.4134 19.3492 22 15 22C10.6508 22 8 18.4134 8 14.9263Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M18.5 15.5C18.5 17.7091 17 18.5 15.5 18.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
