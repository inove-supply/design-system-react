export const ArrowExpand01RoundIcon = ({
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
        d="M21.0303 4.03033C21.3232 3.73744 21.3232 3.26256 21.0303 2.96967C20.7374 2.67678 20.2626 2.67678 19.9697 2.96967L21.0303 4.03033ZM12.9697 9.96967C12.6768 10.2626 12.6768 10.7374 12.9697 11.0303C13.2626 11.3232 13.7374 11.3232 14.0303 11.0303L12.9697 9.96967ZM14.0303 11.0303L21.0303 4.03033L19.9697 2.96967L12.9697 9.96967L14.0303 11.0303Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2.96967 19.9697C2.67678 20.2626 2.67678 20.7374 2.96967 21.0303C3.26256 21.3232 3.73744 21.3232 4.03033 21.0303L2.96967 19.9697ZM11.0303 14.0303C11.3232 13.7374 11.3232 13.2626 11.0303 12.9697C10.7374 12.6768 10.2626 12.6768 9.96967 12.9697L11.0303 14.0303ZM4.03033 21.0303L11.0303 14.0303L9.96967 12.9697L2.96967 19.9697L4.03033 21.0303Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M16.5 3.26621C17.3444 3.25421 20.1409 2.67328 20.7338 3.26621C21.3267 3.85913 20.7458 6.65559 20.7338 7.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.26621 16.5C3.25421 17.3444 2.67328 20.1409 3.26621 20.7338C3.85913 21.3267 6.65559 20.7458 7.5 20.7338"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
