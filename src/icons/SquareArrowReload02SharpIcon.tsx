export const SquareArrowReload02SharpIcon = ({
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
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M16.5 11.5V11C16.5 10.0572 16.5 9.58579 16.2071 9.29289C15.9142 9 15.4428 9 14.5 9H10C9.12732 9 8.69098 9 8.55279 8.72361C8.41459 8.44721 8.67639 8.09814 9.2 7.4L9.5 7M7.5 12.5V13C7.5 13.9428 7.5 14.4142 7.79289 14.7071C8.08579 15 8.55719 15 9.5 15H14C14.8727 15 15.309 15 15.4472 15.2764C15.5854 15.5528 15.3236 15.9019 14.8 16.6L14.5 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
