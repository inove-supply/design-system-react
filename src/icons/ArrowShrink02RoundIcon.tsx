export const ArrowShrink02RoundIcon = ({
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
        d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L21.5303 3.53033ZM12.9697 9.96967C12.6768 10.2626 12.6768 10.7374 12.9697 11.0303C13.2626 11.3232 13.7374 11.3232 14.0303 11.0303L12.9697 9.96967ZM20.4697 2.46967L12.9697 9.96967L14.0303 11.0303L21.5303 3.53033L20.4697 2.46967Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M11.0303 14.0303C11.3232 13.7374 11.3232 13.2626 11.0303 12.9697C10.7374 12.6768 10.2626 12.6768 9.96967 12.9697L11.0303 14.0303ZM2.46967 20.4697C2.17678 20.7626 2.17678 21.2374 2.46967 21.5303C2.76256 21.8232 3.23744 21.8232 3.53033 21.5303L2.46967 20.4697ZM9.96967 12.9697L2.46967 20.4697L3.53033 21.5303L11.0303 14.0303L9.96967 12.9697Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M17.5 10.7338C16.6556 10.7458 13.8591 11.3267 13.2662 10.7338C12.6733 10.1409 13.2542 7.34441 13.2662 6.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7338 17.5C10.7458 16.6556 11.3267 13.8591 10.7338 13.2662C10.1409 12.6733 7.34441 13.2542 6.5 13.2662"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
