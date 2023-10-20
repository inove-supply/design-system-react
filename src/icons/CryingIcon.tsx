export const CryingIcon = ({
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
        d="M15.5 21.3704C14.4107 21.7775 13.2313 22 12 22C10.7687 22 9.58933 21.7775 8.5 21.3704M3.33782 17C2.48697 15.5291 2 13.8214 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.8214 21.513 15.5291 20.6622 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15.9998C9.83563 15.372 10.8744 15 12 15C13.1256 15 14.1644 15.372 15 15.9998"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.5H8.20711C7.75435 9.5 7.32014 9.67986 7 10M14.5 9.5H15.7929C16.2456 9.5 16.6799 9.67986 17 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 13L6 22M18 13V22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
