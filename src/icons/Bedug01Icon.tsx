export const Bedug01Icon = ({
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
      <ellipse
        cx="5"
        cy="9"
        rx="2"
        ry="7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M5 2L16.1103 3.58719C19.1126 4.01608 21 5.73626 21 9C21 11.0222 20.065 13.3797 18 14.0512M5 16L14.0942 14.7008"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.64345 2.61468C9.43065 2.25932 8.97005 2.14374 8.61468 2.35655C8.25932 2.56935 8.14374 3.02995 8.35655 3.38532L9.64345 2.61468ZM8.35655 14.6147C8.14374 14.9701 8.25932 15.4306 8.61468 15.6435C8.97005 15.8563 9.43065 15.7407 9.64345 15.3853L8.35655 14.6147ZM8.35655 3.38532C8.57687 3.75324 8.8085 4.46551 8.98083 5.48007C9.14938 6.47235 9.25 7.68462 9.25 9H10.75C10.75 7.61321 10.6443 6.31586 10.4596 5.22888C10.2788 4.16417 10.0104 3.22753 9.64345 2.61468L8.35655 3.38532ZM9.25 9C9.25 10.3154 9.14938 11.5276 8.98083 12.5199C8.8085 13.5345 8.57687 14.2468 8.35655 14.6147L9.64345 15.3853C10.0104 14.7725 10.2788 13.8358 10.4596 12.7711C10.6443 11.6841 10.75 10.3868 10.75 9H9.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M8.5 15.5L16 22M8 22L18 10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
