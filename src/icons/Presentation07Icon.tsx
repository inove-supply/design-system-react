export const Presentation07Icon = ({
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
      />
      <path
        d="M11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22L11.25 22ZM11.25 17L11.25 22L12.75 22L12.75 17L11.25 17Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M8.5 22L8.82821 21.6717C9.40628 21.0936 9.69532 20.8045 10.0629 20.6523C10.4305 20.5 10.8392 20.5 11.6568 20.5H12.343C13.1605 20.5 13.5692 20.5 13.9368 20.6522C14.3043 20.8045 14.5933 21.0935 15.1714 21.6716L15.4998 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2L12 3.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
