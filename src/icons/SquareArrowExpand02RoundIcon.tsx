export const SquareArrowExpand02RoundIcon = ({
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
        d="M16.5148 16.5149C17.0896 15.9401 16.9941 13.4982 16.9941 13.4982M16.5148 16.5149C15.94 17.0897 13.4981 16.994 13.4981 16.994M16.5148 16.5149L13 13M7.48506 7.48512C8.05987 6.91031 10.5018 7.00596 10.5018 7.00596M7.48506 7.48512C6.91025 8.05993 7.00598 10.5018 7.00598 10.5018M7.48506 7.48512L11 11"
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
