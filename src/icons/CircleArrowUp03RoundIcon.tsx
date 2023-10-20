export const CircleArrowUp03RoundIcon = ({
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
        d="M16 7.75C16.4142 7.75 16.75 7.41421 16.75 7C16.75 6.58579 16.4142 6.25 16 6.25V7.75ZM8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75L8 6.25ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM13.9622 13.0227C14.2509 13.3198 14.7257 13.3265 15.0227 13.0378C15.3198 12.7491 15.3265 12.2743 15.0378 11.9773L13.9622 13.0227ZM8.96219 11.9773C8.67349 12.2743 8.68023 12.7491 8.97726 13.0378C9.27428 13.3265 9.74911 13.3198 10.0378 13.0227L8.96219 11.9773ZM16 6.25L8 6.25L8 7.75L16 7.75V6.25ZM11.25 10V17H12.75V10H11.25ZM12 10.75C11.9168 10.75 11.8884 10.7233 11.9344 10.7479C11.9745 10.7694 12.0399 10.8132 12.1306 10.8905C12.3127 11.0456 12.5262 11.274 12.7561 11.5452C12.9831 11.8132 13.2051 12.0975 13.4107 12.3593C13.6029 12.604 13.8051 12.8612 13.9622 13.0227L15.0378 11.9773C14.9491 11.886 14.8035 11.7042 14.5903 11.4328C14.3905 11.1784 14.1494 10.8693 13.9005 10.5755C13.6543 10.285 13.3787 9.98316 13.1032 9.74854C12.9652 9.63096 12.8096 9.51499 12.6422 9.42541C12.4807 9.33902 12.2583 9.25 12 9.25V10.75ZM10.0378 13.0227C10.1949 12.8612 10.3971 12.604 10.5893 12.3593C10.7949 12.0975 11.0169 11.8132 11.2439 11.5452C11.4738 11.274 11.6873 11.0456 11.8694 10.8905C11.9601 10.8132 12.0255 10.7694 12.0656 10.7479C12.1116 10.7233 12.0832 10.75 12 10.75V9.25C11.7417 9.25 11.5193 9.33902 11.3578 9.42541C11.1904 9.51499 11.0348 9.63096 10.8968 9.74854C10.6213 9.98316 10.3457 10.285 10.0995 10.5755C9.85056 10.8693 9.60953 11.1784 9.40971 11.4328C9.19651 11.7042 9.05089 11.886 8.96219 11.9773L10.0378 13.0227Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
