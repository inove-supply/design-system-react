export const ArrowExpandDiagonal01RoundIcon = ({
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
        d="M8 8L16 16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4697 8.46967C14.1768 8.76256 14.1768 9.23744 14.4697 9.53033C14.7626 9.82322 15.2374 9.82322 15.5303 9.53033L14.4697 8.46967ZM21.0303 4.03033C21.3232 3.73744 21.3232 3.26256 21.0303 2.96967C20.7374 2.67678 20.2626 2.67678 19.9697 2.96967L21.0303 4.03033ZM15.5303 9.53033L21.0303 4.03033L19.9697 2.96967L14.4697 8.46967L15.5303 9.53033Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2.96967 19.9697C2.67678 20.2626 2.67678 20.7374 2.96967 21.0303C3.26256 21.3232 3.73744 21.3232 4.03033 21.0303L2.96967 19.9697ZM9.53033 15.5303C9.82322 15.2374 9.82322 14.7626 9.53033 14.4697C9.23744 14.1768 8.76256 14.1768 8.46967 14.4697L9.53033 15.5303ZM4.03033 21.0303L9.53033 15.5303L8.46967 14.4697L2.96967 19.9697L4.03033 21.0303Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M17 3.23663C17.7506 3.22596 20.2363 2.70959 20.7634 3.23663C21.2904 3.76367 20.774 6.24941 20.7634 7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.23663 17C3.22596 17.7506 2.70959 20.2363 3.23663 20.7634C3.76367 21.2904 6.24941 20.774 7 20.7634"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
