export const PoliceStationIcon = ({
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
        d="M15.6181 7C16.2653 7.12401 16.7429 7.3418 17.1213 7.72431C18 8.6126 18 10.0423 18 12.9016V22H6V12.9016C6 10.0423 6 8.6126 6.87868 7.72431C7.25705 7.3418 7.73473 7.12401 8.38188 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22H21C21.4714 22 21.7071 22 21.8536 21.8536C22 21.7071 22 21.4714 22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 22H3C2.5286 22 2.29289 22 2.14645 21.8536C2 21.7071 2 21.4714 2 21V16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 22L12 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15H10.2M15 15H13.8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.04217 4C10.9662 4 12.0004 2 12.0004 2C12.0004 2 13.0338 4 15.9578 4C16.1752 5.6875 15.6528 9.65 12.0004 11C8.34791 9.65 7.82476 5.6875 8.04217 4Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}
