export const PavilonIcon = ({
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
        d="M6 11V21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 11V21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 21L10.0065 17.9614C10.1261 17.2437 10.1859 16.8849 10.3463 16.6197C10.7446 15.9607 11.3843 16.0005 12 16.0005C12.6157 16.0005 13.2554 15.9607 13.6537 16.6197C13.8141 16.8849 13.8739 17.2437 13.9935 17.9614L14.5 21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 21H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2L12.7276 1.8181C12.6441 1.48422 12.3442 1.25 12 1.25C11.6558 1.25 11.3559 1.48422 11.2724 1.8181L12 2ZM3 8V7.25C2.75892 7.25 2.53253 7.36589 2.39157 7.56147C2.2506 7.75704 2.21225 8.00846 2.28849 8.23717L3 8ZM21 8L21.7115 8.23717C21.7878 8.00846 21.7494 7.75704 21.6084 7.56147C21.4675 7.36589 21.2411 7.25 21 7.25V8ZM11.2724 1.8181C10.8391 3.55142 8.59112 7.25 3 7.25V8.75C9.40888 8.75 12.1609 4.44858 12.7276 2.1819L11.2724 1.8181ZM11.2724 2.1819C11.8391 4.44858 14.5911 8.75 21 8.75V7.25C15.4089 7.25 13.1609 3.55142 12.7276 1.8181L11.2724 2.1819ZM7.16228 11.75H16.8377V10.25H7.16228V11.75ZM20.2885 7.76283C19.7934 9.24814 18.4034 10.25 16.8377 10.25V11.75C19.049 11.75 21.0122 10.335 21.7115 8.23717L20.2885 7.76283ZM2.28849 8.23717C2.98776 10.335 4.95097 11.75 7.16228 11.75V10.25C5.59662 10.25 4.20662 9.24814 3.71151 7.76283L2.28849 8.23717Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
