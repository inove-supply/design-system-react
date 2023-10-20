export const SquareArrowDown01SharpIcon = ({
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
        d="M2.25 12C2.25 7.52166 2.25 5.28249 3.64124 3.89124C5.03249 2.5 7.27166 2.5 11.75 2.5C16.2283 2.5 18.4675 2.5 19.8588 3.89124C21.25 5.28249 21.25 7.52166 21.25 12C21.25 16.4783 21.25 18.7175 19.8588 20.1088C18.4675 21.5 16.2283 21.5 11.75 21.5C7.27166 21.5 5.03249 21.5 3.64124 20.1088C2.25 18.7175 2.25 16.4783 2.25 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M7 10L11.3753 13.6275C11.6748 13.8758 11.8246 14 12 14C12.1754 14 12.3252 13.8758 12.6247 13.6275L17 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
