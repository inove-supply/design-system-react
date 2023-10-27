export const SoftwareIcon = ({
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
        d="M10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M18.2454 15C19.3433 13.6304 20 11.8919 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 11.8919 4.65672 13.6304 5.75463 15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M3 18.5C3 17.0955 3 16.3933 3.30335 15.8889C3.43468 15.6705 3.60343 15.483 3.79997 15.3371C4.25398 15 4.88598 15 6.15 15H17.85C19.114 15 19.746 15 20.2 15.3371C20.3966 15.483 20.5653 15.6705 20.6966 15.8889C21 16.3933 21 17.0955 21 18.5C21 19.9045 21 20.6067 20.6966 21.1111C20.5653 21.3295 20.3966 21.517 20.2 21.6629C19.746 22 19.114 22 17.85 22H6.15C4.88598 22 4.25398 22 3.79997 21.6629C3.60343 21.517 3.43468 21.3295 3.30335 21.1111C3 20.6067 3 19.9045 3 18.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M11 18H13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8906 6.61104L17.9021 4.59961"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
