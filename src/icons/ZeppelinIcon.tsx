export const ZeppelinIcon = ({
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
        d="M19 15.9971L18.6938 17.3197C18.3654 18.7379 18.2012 19.4471 17.6938 19.7938C17.1864 20.1406 16.5226 19.9972 15.195 19.7105L14.4288 19.545C13.7218 19.3924 13.3683 19.316 13.0668 19.1179C12.7654 18.9198 12.5402 18.6158 12.0898 18.0079L11 16.537"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M2 10.9971C2 13.9971 10 16.9971 15 16.9971C19 16.9971 22 14.3108 22 10.9971C22 7.68336 19 4.99707 15 4.99707C10 4.99707 2 7.99707 2 10.9971Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.9971H5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7.5 5.99731C6.74487 5.15039 5.54147 3.85514 4.36683 4.01322C4.02163 4.05967 3.68109 4.25064 3 4.63258L4 7.99724"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 15.9968C6.74487 16.8437 5.54147 18.139 4.36683 17.9809C4.02163 17.9345 3.68109 17.7435 3 17.3616L4 13.9969"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
