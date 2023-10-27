export const DoorLockIcon = ({
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
        d="M3 22H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 22V6C4 2.69067 4.78933 2 8.57143 2H15.4286C19.2107 2 20 2.69067 20 6V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1786 11.8079C13.1786 12.2221 13.5144 12.5579 13.9286 12.5579C14.3428 12.5579 14.6786 12.2221 14.6786 11.8079H13.1786ZM12 16.25C10.743 16.25 9.75 15.2553 9.75 14.06H8.25C8.25 16.1121 9.94329 17.75 12 17.75V16.25ZM14.25 14.06C14.25 15.2553 13.257 16.25 12 16.25V17.75C14.0567 17.75 15.75 16.1121 15.75 14.06H14.25ZM12 11.87C13.257 11.87 14.25 12.8647 14.25 14.06H15.75C15.75 12.0079 14.0567 10.37 12 10.37V11.87ZM12 10.37C9.94329 10.37 8.25 12.0079 8.25 14.06H9.75C9.75 12.8647 10.743 11.87 12 11.87V10.37ZM13.1786 9.89V11.8079H14.6786V9.89H13.1786ZM10.8214 11.8079V9.89H9.32143V11.8079H10.8214ZM12 8.75C12.6653 8.75 13.1786 9.27461 13.1786 9.89H14.6786C14.6786 8.41776 13.465 7.25 12 7.25V8.75ZM12 7.25C10.535 7.25 9.32143 8.41776 9.32143 9.89H10.8214C10.8214 9.27461 11.3347 8.75 12 8.75V7.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
