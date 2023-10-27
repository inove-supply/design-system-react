export const ArrowExpandRoundIcon = ({
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
        d="M2.96967 4.03033C2.67678 3.73744 2.67678 3.26256 2.96967 2.96967C3.26256 2.67678 3.73744 2.67678 4.03033 2.96967L2.96967 4.03033ZM10.5303 9.46967C10.8232 9.76256 10.8232 10.2374 10.5303 10.5303C10.2374 10.8232 9.76256 10.8232 9.46967 10.5303L10.5303 9.46967ZM9.46967 10.5303L2.96967 4.03033L4.03033 2.96967L10.5303 9.46967L9.46967 10.5303Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2.96967 19.9697C2.67678 20.2626 2.67678 20.7374 2.96967 21.0303C3.26256 21.3232 3.73744 21.3232 4.03033 21.0303L2.96967 19.9697ZM10.5303 14.5303C10.8232 14.2374 10.8232 13.7626 10.5303 13.4697C10.2374 13.1768 9.76256 13.1768 9.46967 13.4697L10.5303 14.5303ZM9.46967 13.4697L2.96967 19.9697L4.03033 21.0303L10.5303 14.5303L9.46967 13.4697Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21.0303 4.03033C21.3232 3.73744 21.3232 3.26256 21.0303 2.96967C20.7374 2.67678 20.2626 2.67678 19.9697 2.96967L21.0303 4.03033ZM13.4697 9.46967C13.1768 9.76256 13.1768 10.2374 13.4697 10.5303C13.7626 10.8232 14.2374 10.8232 14.5303 10.5303L13.4697 9.46967ZM14.5303 10.5303L21.0303 4.03033L19.9697 2.96967L13.4697 9.46967L14.5303 10.5303Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21.0303 19.9697C21.3232 20.2626 21.3232 20.7374 21.0303 21.0303C20.7374 21.3232 20.2626 21.3232 19.9697 21.0303L21.0303 19.9697ZM13.4697 14.5303C13.1768 14.2374 13.1768 13.7626 13.4697 13.4697C13.7626 13.1768 14.2374 13.1768 14.5303 13.4697L13.4697 14.5303ZM14.5303 13.4697L21.0303 19.9697L19.9697 21.0303L13.4697 14.5303L14.5303 13.4697Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M8 3.09779C8 3.09779 4.03374 2.74194 3.38783 3.38785C2.74191 4.03375 3.09783 8 3.09783 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20.9022C8 20.9022 4.03374 21.2581 3.38783 20.6122C2.74191 19.9662 3.09783 16 3.09783 16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
