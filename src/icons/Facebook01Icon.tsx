export const Facebook01Icon = ({
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
        strokeLinejoin="round"
      />
      <path
        d="M17 8.75C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25V8.75ZM16 8V8.75V8ZM11.25 21.5C11.25 21.9142 11.5858 22.25 12 22.25C12.4142 22.25 12.75 21.9142 12.75 21.5H11.25ZM10 13.25C9.58579 13.25 9.25 13.5858 9.25 14C9.25 14.4142 9.58579 14.75 10 14.75V13.25ZM15 14.75C15.4142 14.75 15.75 14.4142 15.75 14C15.75 13.5858 15.4142 13.25 15 13.25V14.75ZM17 7.25H16V8.75H17V7.25ZM11.25 12V21.5H12.75V12H11.25ZM16 7.25C15.0784 7.25 14.3117 7.24841 13.7055 7.32991C13.0777 7.41432 12.5109 7.59999 12.0555 8.05546L13.1161 9.11612C13.2464 8.9858 13.4439 8.87858 13.9054 8.81654C14.3884 8.75159 15.036 8.75 16 8.75V7.25ZM12.75 12C12.75 11.036 12.7516 10.3884 12.8165 9.90539C12.8786 9.44393 12.9858 9.24643 13.1161 9.11612L12.0555 8.05546C11.6 8.51093 11.4143 9.07773 11.3299 9.70552C11.2484 10.3117 11.25 11.0784 11.25 12H12.75ZM10 14.75H15V13.25H10V14.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
