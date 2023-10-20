export const ArrowExpandDiagonal02RoundIcon = ({
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
        d="M16 8L8 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.53033 8.46967C9.82322 8.76256 9.82322 9.23744 9.53033 9.53033C9.23744 9.82322 8.76256 9.82322 8.46967 9.53033L9.53033 8.46967ZM2.96967 4.03033C2.67678 3.73744 2.67678 3.26256 2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L2.96967 4.03033ZM8.46967 9.53033L2.96967 4.03033L4.03033 2.96967L9.53033 8.46967L8.46967 9.53033Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M21.0303 19.9697C21.3232 20.2626 21.3232 20.7374 21.0303 21.0303C20.7374 21.3232 20.2626 21.3232 19.9697 21.0303L21.0303 19.9697ZM14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L14.4697 15.5303ZM19.9697 21.0303L14.4697 15.5303L15.5303 14.4697L21.0303 19.9697L19.9697 21.0303Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M7 3.23663C6.24941 3.22596 3.76367 2.70959 3.23663 3.23663C2.70959 3.76367 3.22596 6.24941 3.23663 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7634 17C20.774 17.7506 21.2904 20.2363 20.7634 20.7634C20.2363 21.2904 17.7506 20.774 17 20.7634"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
