export const SquareArrowShrink02RoundIcon = ({
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
      />
      <path
        d="M12.9833 11.0167C12.4085 10.4419 12.5041 8 12.5041 8M12.9833 11.0167C13.5581 11.5915 16 11.4958 16 11.4958M12.9833 11.0167L17 7M11.0131 12.9868C10.4383 12.412 7.99641 12.5077 7.99641 12.5077M11.0131 12.9868C11.5879 13.5616 11.4922 16.0035 11.4922 16.0035M11.0131 12.9868L7 16.9999"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
