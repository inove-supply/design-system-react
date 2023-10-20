export const SquareArrowRight03RoundIcon = ({
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
        d="M16.25 16C16.25 16.4142 16.5858 16.75 17 16.75C17.4142 16.75 17.75 16.4142 17.75 16H16.25ZM17.75 8C17.75 7.58579 17.4142 7.25 17 7.25C16.5858 7.25 16.25 7.58579 16.25 8H17.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75L7 11.25ZM10.9773 13.9622C10.6802 14.2509 10.6735 14.7257 10.9622 15.0227C11.2509 15.3198 11.7257 15.3265 12.0227 15.0378L10.9773 13.9622ZM12.0227 8.96219C11.7257 8.67349 11.2509 8.68023 10.9622 8.97726C10.6735 9.27428 10.6802 9.74911 10.9773 10.0378L12.0227 8.96219ZM17.75 16V8H16.25V16H17.75ZM14 11.25L7 11.25L7 12.75L14 12.75V11.25ZM13.25 12C13.25 11.9168 13.2767 11.8884 13.2521 11.9344C13.2306 11.9745 13.1868 12.0399 13.1095 12.1306C12.9544 12.3127 12.726 12.5262 12.4548 12.7561C12.1868 12.9831 11.9025 13.2051 11.6407 13.4107C11.396 13.6029 11.1388 13.8051 10.9773 13.9622L12.0227 15.0378C12.114 14.9491 12.2958 14.8035 12.5672 14.5903C12.8216 14.3905 13.1307 14.1494 13.4245 13.9005C13.715 13.6543 14.0168 13.3787 14.2515 13.1032C14.369 12.9652 14.485 12.8096 14.5746 12.6422C14.661 12.4807 14.75 12.2583 14.75 12H13.25ZM10.9773 10.0378C11.1388 10.1949 11.396 10.3971 11.6407 10.5893C11.9025 10.7949 12.1868 11.0169 12.4548 11.2439C12.726 11.4738 12.9544 11.6873 13.1095 11.8694C13.1868 11.9601 13.2306 12.0255 13.2521 12.0656C13.2767 12.1116 13.25 12.0832 13.25 12H14.75C14.75 11.7417 14.661 11.5193 14.5746 11.3578C14.485 11.1904 14.369 11.0348 14.2515 10.8968C14.0168 10.6213 13.715 10.3457 13.4245 10.0995C13.1307 9.85056 12.8216 9.60952 12.5672 9.40971C12.2958 9.19651 12.114 9.05089 12.0227 8.96219L10.9773 10.0378Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
