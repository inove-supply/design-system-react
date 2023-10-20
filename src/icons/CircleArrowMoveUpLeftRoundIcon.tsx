export const CircleArrowMoveUpLeftRoundIcon = ({
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
        d="M15.75 16C15.75 16.4142 15.4142 16.75 15 16.75C14.5858 16.75 14.25 16.4142 14.25 16H15.75ZM9 10.4782C8.58579 10.4782 8.25 10.1424 8.25 9.72821C8.25 9.314 8.58579 8.97821 9 8.97821V10.4782ZM11.0238 9.78761L10.9038 10.5279L11.0238 9.78761ZM14.942 13.798L15.6831 13.6833L14.942 13.798ZM9.83263 7.482C10.1187 7.18245 10.5935 7.17154 10.893 7.45762C11.1926 7.7437 11.2035 8.21845 10.9174 8.518L9.83263 7.482ZM9.19493 9.23561L8.65255 8.71761L9.19493 9.23561ZM9.19493 10.2211L8.65255 10.7391L9.19493 10.2211ZM10.9174 10.9387C11.2035 11.2383 11.1926 11.713 10.893 11.9991C10.5935 12.2852 10.1187 12.2743 9.83263 11.9747L10.9174 10.9387ZM14.25 16V15.5176H15.75V16H14.25ZM9 8.97821C9.83483 8.97821 10.7007 8.97544 11.1438 9.04727L10.9038 10.5279C10.6141 10.481 9.91675 10.4782 9 10.4782V8.97821ZM14.25 15.5176C14.25 14.5931 14.2478 14.2163 14.2008 13.9126L15.6831 13.6833C15.7522 14.1297 15.75 14.6492 15.75 15.5176H14.25ZM11.1438 9.04727C13.4912 9.4278 15.3155 11.3077 15.6831 13.6833L14.2008 13.9126C13.9295 12.1595 12.5902 10.8013 10.9038 10.5279L11.1438 9.04727ZM10.9174 8.518L9.73731 9.75361L8.65255 8.71761L9.83263 7.482L10.9174 8.518ZM9.73731 9.70313L10.9174 10.9387L9.83263 11.9747L8.65255 10.7391L9.73731 9.70313ZM9.73731 9.75361C9.7492 9.74117 9.75 9.73018 9.75 9.72837C9.75 9.72656 9.7492 9.71558 9.73731 9.70313L8.65255 10.7391C8.11582 10.1771 8.11582 9.27961 8.65255 8.71761L9.73731 9.75361Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
