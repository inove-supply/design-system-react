export const SoftDrink01Icon = ({
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
        d="M12 7V4.34832C12 2.1606 12.3737 1.6318 14.4968 2.22769L18 3.21095"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 7L7.1398 18.1606C7.31099 19.8368 7.39658 20.6749 7.96796 21.1813C9.1458 22.225 14.7472 22.3198 16.032 21.1813C16.6034 20.6749 16.689 19.8368 16.8602 18.1606L18 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M5 7H19" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 12H17" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 16H17" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
