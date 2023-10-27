export const CircleArrowLeft03RoundIcon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7.75 8C7.75 7.58579 7.41421 7.25 7 7.25C6.58579 7.25 6.25 7.58579 6.25 8L7.75 8ZM6.25 16C6.25 16.4142 6.58579 16.75 7 16.75C7.41421 16.75 7.75 16.4142 7.75 16H6.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM13.0227 10.0378C13.3198 9.74911 13.3265 9.27428 13.0378 8.97726C12.7491 8.68023 12.2743 8.67349 11.9773 8.96219L13.0227 10.0378ZM11.9773 15.0378C12.2743 15.3265 12.7491 15.3198 13.0378 15.0227C13.3265 14.7257 13.3198 14.2509 13.0227 13.9622L11.9773 15.0378ZM6.25 8L6.25 16H7.75L7.75 8L6.25 8ZM10 12.75H17V11.25H10V12.75ZM10.75 12C10.75 12.0832 10.7233 12.1116 10.7479 12.0656C10.7694 12.0255 10.8132 11.9601 10.8905 11.8694C11.0456 11.6873 11.274 11.4738 11.5452 11.2439C11.8132 11.0169 12.0975 10.7949 12.3593 10.5893C12.604 10.3971 12.8612 10.1949 13.0227 10.0378L11.9773 8.96219C11.886 9.05089 11.7042 9.19651 11.4328 9.40971C11.1784 9.60952 10.8693 9.85056 10.5755 10.0995C10.285 10.3457 9.98316 10.6213 9.74854 10.8968C9.63096 11.0348 9.51499 11.1904 9.42541 11.3578C9.33902 11.5193 9.25 11.7417 9.25 12H10.75ZM13.0227 13.9622C12.8612 13.8051 12.604 13.6029 12.3593 13.4107C12.0975 13.2051 11.8132 12.9831 11.5452 12.7561C11.274 12.5262 11.0456 12.3127 10.8905 12.1306C10.8132 12.0399 10.7694 11.9745 10.7479 11.9344C10.7233 11.8884 10.75 11.9168 10.75 12H9.25C9.25 12.2583 9.33902 12.4807 9.42541 12.6422C9.51499 12.8096 9.63096 12.9652 9.74854 13.1032C9.98316 13.3787 10.285 13.6543 10.5755 13.9005C10.8693 14.1494 11.1784 14.3905 11.4328 14.5903C11.7042 14.8035 11.886 14.9491 11.9773 15.0378L13.0227 13.9622Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
