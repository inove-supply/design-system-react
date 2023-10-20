export const SquareArrowReload01SharpIcon = ({
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
        d="M7.5 11.5V11C7.5 10.0572 7.5 9.58579 7.79289 9.29289C8.08579 9 8.55719 9 9.5 9H14C14.8727 9 15.309 9 15.4472 8.72361C15.5854 8.44721 15.3236 8.09814 14.8 7.4L14.5 7M16.5 12V13C16.5 13.9428 16.5 14.4142 16.2071 14.7071C15.9142 15 15.4428 15 14.5 15H10C9.12732 15 8.69098 15 8.55279 15.2764C8.41459 15.5528 8.67639 15.9019 9.2 16.6L9.5 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
