export const ArrowShrink01RoundIcon = ({
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
        d="M11.0303 9.96967C11.3232 10.2626 11.3232 10.7374 11.0303 11.0303C10.7374 11.3232 10.2626 11.3232 9.96967 11.0303L11.0303 9.96967ZM2.46967 3.53033C2.17678 3.23744 2.17678 2.76256 2.46967 2.46967C2.76256 2.17678 3.23744 2.17678 3.53033 2.46967L2.46967 3.53033ZM3.53033 2.46967L11.0303 9.96967L9.96967 11.0303L2.46967 3.53033L3.53033 2.46967Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.9697 14.0303C12.6768 13.7374 12.6768 13.2626 12.9697 12.9697C13.2626 12.6768 13.7374 12.6768 14.0303 12.9697L12.9697 14.0303ZM21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L21.5303 20.4697ZM14.0303 12.9697L21.5303 20.4697L20.4697 21.5303L12.9697 14.0303L14.0303 12.9697Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6.5 10.7338C7.34441 10.7458 10.1409 11.3267 10.7338 10.7338C11.3267 10.1409 10.7458 7.34441 10.7338 6.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2662 17.5C13.2542 16.6556 12.6733 13.8591 13.2662 13.2662C13.8591 12.6733 16.6556 13.2542 17.5 13.2662"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
