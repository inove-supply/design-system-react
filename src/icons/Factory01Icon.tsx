export const Factory01Icon = ({
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
        d="M2 21H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 21C4.5 18 5.5 14 5.5 8H12.5C12.5 14 13.5 18 15 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4697 21.5303C19.7626 21.8232 20.2374 21.8232 20.5303 21.5303C20.8232 21.2374 20.8232 20.7626 20.5303 20.4697L19.4697 21.5303ZM16.5 12H17.25C17.25 11.5858 16.9142 11.25 16.5 11.25V12ZM15.75 12C15.75 16.2012 17.3306 19.3913 19.4697 21.5303L20.5303 20.4697C18.6694 18.6087 17.25 15.7988 17.25 12H15.75ZM16.5 11.25H12V12.75H16.5V11.25Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 4.26495C13.1704 2.62795 14.6678 2.62795 15.8382 4.26495C16.5439 5.26947 17.4561 5.23227 18.179 4.22775C19.3322 2.59075 20.8296 2.59075 22 4.22775"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
