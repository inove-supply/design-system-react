export const ArrowShrinkRoundIcon = ({
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
        d="M10.0303 8.96967C10.3232 9.26256 10.3232 9.73744 10.0303 10.0303C9.73744 10.3232 9.26256 10.3232 8.96967 10.0303L10.0303 8.96967ZM2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L2.46967 3.53033ZM3.53033 2.46967L10.0303 8.96967L8.96967 10.0303L2.46967 3.53033L3.53033 2.46967Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M10.0303 15.0303C10.3232 14.7374 10.3232 14.2626 10.0303 13.9697C9.73744 13.6768 9.26256 13.6768 8.96967 13.9697L10.0303 15.0303ZM2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L2.46967 20.4697ZM3.53033 21.5303L10.0303 15.0303L8.96967 13.9697L2.46967 20.4697L3.53033 21.5303Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M13.9697 8.96967C13.6768 9.26256 13.6768 9.73744 13.9697 10.0303C14.2626 10.3232 14.7374 10.3232 15.0303 10.0303L13.9697 8.96967ZM21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L21.5303 3.53033ZM20.4697 2.46967L13.9697 8.96967L15.0303 10.0303L21.5303 3.53033L20.4697 2.46967Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M13.9697 15.0303C13.6768 14.7374 13.6768 14.2626 13.9697 13.9697C14.2626 13.6768 14.7374 13.6768 15.0303 13.9697L13.9697 15.0303ZM21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L21.5303 20.4697ZM20.4697 21.5303L13.9697 15.0303L15.0303 13.9697L21.5303 20.4697L20.4697 21.5303Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6 9.76337C6.75059 9.77404 9.23633 10.2904 9.76337 9.76337C10.2904 9.23633 9.77404 6.75059 9.76337 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14.2366C6.75059 14.226 9.23633 13.7096 9.76337 14.2366C10.2904 14.7637 9.77404 17.2494 9.76337 18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9.76337C17.2494 9.77404 14.7637 10.2904 14.2366 9.76337C13.7096 9.23633 14.226 6.75059 14.2366 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 14.2366C17.2494 14.226 14.7637 13.7096 14.2366 14.2366C13.7096 14.7637 14.226 17.2494 14.2366 18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
