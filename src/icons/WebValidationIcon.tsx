export const WebValidationIcon = ({
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
        d="M20.9992 10C20.9907 6.41543 20.8861 4.52814 19.6088 3.31802C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.31802C2 4.63604 2 6.75736 2 11C2 15.2426 2 17.364 3.39124 18.682C4.61763 19.8438 6.50289 19.9815 10 19.9978"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M15 17.5C15 17.5 15.5 17.5 16 18.5C16 18.5 17.5882 16 19 15.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M2 8.5H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M6.49981 5.5H6.50879"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4998 5.5H10.5088"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
