export const ArrowExpand02RoundIcon = ({
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
        d="M9.96967 11.0303C10.2626 11.3232 10.7374 11.3232 11.0303 11.0303C11.3232 10.7374 11.3232 10.2626 11.0303 9.96967L9.96967 11.0303ZM4.03033 2.96967C3.73744 2.67678 3.26256 2.67678 2.96967 2.96967C2.67678 3.26256 2.67678 3.73744 2.96967 4.03033L4.03033 2.96967ZM11.0303 9.96967L4.03033 2.96967L2.96967 4.03033L9.96967 11.0303L11.0303 9.96967Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M19.9697 21.0303C20.2626 21.3232 20.7374 21.3232 21.0303 21.0303C21.3232 20.7374 21.3232 20.2626 21.0303 19.9697L19.9697 21.0303ZM14.0303 12.9697C13.7374 12.6768 13.2626 12.6768 12.9697 12.9697C12.6768 13.2626 12.6768 13.7374 12.9697 14.0303L14.0303 12.9697ZM21.0303 19.9697L14.0303 12.9697L12.9697 14.0303L19.9697 21.0303L21.0303 19.9697Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7.5 3.26621C6.65559 3.25421 3.85913 2.67328 3.26621 3.26621C2.67328 3.85913 3.25421 6.65559 3.26621 7.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7338 16.5C20.7458 17.3444 21.3267 20.1409 20.7338 20.7338C20.1409 21.3267 17.3444 20.7458 16.5 20.7338"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
