export const Presentation04Icon = ({
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
        d="M2.5 11.5C2.5 14.3284 2.5 15.7426 3.37868 16.6213C4.25736 17.5 5.67157 17.5 8.5 17.5H15.5C18.3284 17.5 19.7426 17.5 20.6213 16.6213C21.5 15.7426 21.5 14.3284 21.5 11.5V9.5C21.5 6.67157 21.5 5.25736 20.6213 4.37868C19.7426 3.5 18.3284 3.5 15.5 3.5H8.5C5.67157 3.5 4.25736 3.5 3.37868 4.37868C2.5 5.25736 2.5 6.67157 2.5 9.5V11.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22L11.25 22ZM11.25 17L11.25 22L12.75 22L12.75 17L11.25 17Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 2L12 3.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 22L12.0001 19L17 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
