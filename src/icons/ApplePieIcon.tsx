export const ApplePieIcon = ({
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
        d="M16.5 7C18.6111 8.09821 20.1802 9.94542 20.7578 12.1376C21.5 12.1376 22 13.1645 22 14.0106C22 16.3424 18.5658 16.7405 18 14.5165C17.4968 16.4945 14.5032 16.4945 14 14.5165C13.4968 16.4945 10.5032 16.4945 10 14.5165C9.49677 16.4945 6.50323 16.4945 6 14.5165C5.43417 16.7405 2 16.3424 2 14.0106C2 13.1645 2.5 12.1376 3.24224 12.1376C3.81984 9.94542 5.38887 8.09821 7.5 7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 10.5L15 11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5L9 11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 16L4.13246 17.8974C4.79247 19.8774 5.12248 20.8675 5.90815 21.4337C6.69381 22 7.73739 22 9.82456 22H14.1754C16.2626 22 17.3062 22 18.0919 21.4337C18.8775 20.8675 19.2075 19.8774 19.8675 17.8974L20.5 16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
