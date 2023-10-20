export const ZakatIcon = ({
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
        d="M18.9682 10.3551C18.6036 8.33276 17.4684 6.82687 16.4816 5.94236C16.1945 5.68497 16.0509 5.55628 15.7338 5.43717C15.4166 5.31807 15.144 5.31807 14.5988 5.31807H13.4012C12.856 5.31807 12.5834 5.31807 12.2662 5.43717C11.9491 5.55628 11.8055 5.68497 11.5184 5.94236C10.5316 6.82687 9.39645 8.33276 9.03182 10.3551C8.76052 11.8597 10.2663 13 11.9491 13H16.0509C17.7337 13 19.2395 11.8597 18.9682 10.3551Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4 14H6.39482C6.68897 14 6.97908 14.0663 7.24217 14.1936L9.28415 15.1816C9.54724 15.3089 9.83735 15.3751 10.1315 15.3751H11.1741C12.1825 15.3751 13 16.1662 13 17.142C13 17.1814 12.973 17.2161 12.9338 17.2269L10.3929 17.9295C9.93707 18.0555 9.449 18.0116 9.025 17.8064L6.84211 16.7503M13 16.5L17.5928 15.0889C18.407 14.8352 19.2871 15.136 19.7971 15.8423C20.1659 16.3529 20.0157 17.0842 19.4785 17.3942L11.9629 21.7305C11.4849 22.0063 10.9209 22.0736 10.3952 21.9176L4 20.0199"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
