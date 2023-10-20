export const CircleArrowDataTransferHorizontalRoundIcon = ({
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
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
      <path
        d="M16.5 10.2857H8.56622C7.91964 10.2857 7.59635 10.2857 7.51589 10.1093C7.43543 9.93296 7.66404 9.72538 8.12124 9.31022L9.56415 8M7.5 13.7143H15.4338C16.0804 13.7143 16.4037 13.7143 16.4841 13.8907C16.5646 14.067 16.336 14.2746 15.8788 14.6898L14.4358 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
