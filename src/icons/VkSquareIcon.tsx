export const VkSquareIcon = ({
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
        strokeLinejoin="round"
      />
      <path
        d="M11.5 8H12.5V12.5M6.5 8C6.5 13.2 10.5 15.5 12.5 16V12.5M12.5 12.5C12.9301 12.4462 13.5198 12.2919 14.1482 12M14.1482 12C15.4678 11.3871 16.9581 10.1677 17.5 8M14.1482 12C15.2655 12.3333 17.5 13.6 17.5 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
