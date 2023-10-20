export const AutoConversationsIcon = ({
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
        d="M2 18L6.73422 13.2658C7.3363 12.6637 7.63734 12.3627 8.01892 12.3415C8.40049 12.3204 8.73294 12.5863 9.39782 13.1183L11.5173 14.8138C12.2193 15.3754 12.5703 15.6562 12.9679 15.6225C13.3656 15.5887 13.6642 15.2527 14.2615 14.5808L21 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6H20C20.9428 6 21.4142 6 21.7071 6.29289C22 6.58579 22 7.05719 22 8L22 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8H11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
