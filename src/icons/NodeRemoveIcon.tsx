export const NodeRemoveIcon = ({
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
        d="M13.5 19.5H12.5C9.67157 19.5 8.25736 19.5 7.37868 18.6213C6.5 17.7426 6.5 16.3284 6.5 13.5V11.5M6.5 9V11.5M6.5 11.5H13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 11.5C13.5 10.3215 13.5 9.73223 13.8515 9.36612C14.2029 9 14.7686 9 15.9 9H17.1C18.2314 9 18.7971 9 19.1485 9.36612C19.5 9.73223 19.5 10.3215 19.5 11.5C19.5 12.6785 19.5 13.2678 19.1485 13.6339C18.7971 14 18.2314 14 17.1 14H15.9C14.7686 14 14.2029 14 13.8515 13.6339C13.5 13.2678 13.5 12.6785 13.5 11.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M13.5 19.5C13.5 18.3215 13.5 17.7322 13.8515 17.3661C14.2029 17 14.7686 17 15.9 17H17.1C18.2314 17 18.7971 17 19.1485 17.3661C19.5 17.7322 19.5 18.3215 19.5 19.5C19.5 20.6785 19.5 21.2678 19.1485 21.6339C18.7971 22 18.2314 22 17.1 22H15.9C14.7686 22 14.2029 22 13.8515 21.6339C13.5 21.2678 13.5 20.6785 13.5 19.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 2L6.5 4.5M6.5 4.5L4 7M6.5 4.5L9 7M6.5 4.5L4 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
