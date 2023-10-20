export const ArrowDataTransferHorizontalSharpIcon = ({
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
        d="M19.5 9H6.97329C5.92408 9 5.39948 9 5.2731 8.68742C5.14672 8.37484 5.5239 8.01023 6.27826 7.28101L8.63793 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 15H17.0267C18.0759 15 18.6005 15 18.7269 15.3126C18.8533 15.6252 18.4761 15.9898 17.7217 16.719L15.3621 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
