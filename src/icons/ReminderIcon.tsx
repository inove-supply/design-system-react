export const ReminderIcon = ({
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
        d="M12.9474 19.0004C12.8695 20.022 12.6757 20.6904 12.1945 21.1803C11.3891 22.0004 10.0927 22.0004 7.5 22.0004C4.90728 22.0004 3.61091 22.0004 2.80546 21.1803C2 20.3602 2 19.0403 2 16.4004V11.6004C2 8.96054 2 7.6406 2.80546 6.8205C3.29517 6.32189 3.96634 6.12643 5 6.0498"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7.49199 19.001H7.50098"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0785 2.00098H13.9215C11.0208 2.00098 9.57048 2.00098 8.70959 2.90423C7.8487 3.80748 7.93917 5.23426 8.12011 8.0878L8.24595 10.0725C8.28754 10.7283 8.30833 11.0562 8.38194 11.3297C8.66622 12.3859 9.53533 13.1907 10.6225 13.4045C10.904 13.4598 11.2373 13.4598 11.904 13.4598C12.8328 13.4598 12.8202 14.227 12.8202 14.9864C12.8202 15.5754 12.8202 15.87 13.0121 15.9712C13.204 16.0724 13.4526 15.909 13.9499 15.5823L16.9093 13.6376C17.1029 13.5104 17.2769 13.4598 17.5048 13.4598C18.727 13.4598 19.3381 13.4598 19.8333 13.276C21.5492 12.639 21.6918 11.0535 21.7909 9.49093L21.8799 8.0878C22.0608 5.23426 22.1513 3.80748 21.2904 2.90423C20.4295 2.00098 18.9792 2.00098 16.0785 2.00098Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M13.8342 8.42955C11.4258 6.71526 14.9993 5.00098 14.9993 5.00098C14.9993 5.00098 18.5746 6.71526 16.1663 8.42955M13.8342 8.42955H16.1663M13.8342 8.42955L13.2507 11.001M16.1663 8.42955L16.9821 11.001"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
