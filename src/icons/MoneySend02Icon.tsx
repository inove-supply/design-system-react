export const MoneySend02Icon = ({
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
        d="M7 6.67011C5.93408 6.67011 4.91969 6.5508 4 6.33552C3.04003 6.11081 2 6.8021 2 7.80858V18.8175C2 19.6259 2 20.0301 2.19412 20.4469C2.30483 20.6846 2.55696 21.008 2.75898 21.1714C3.11319 21.4578 3.4088 21.527 4 21.6654C4.91969 21.8807 5.93408 22 7 22C8.91707 22 10.6675 21.6141 12 20.978C13.3325 20.342 15.0829 19.956 17 19.956C18.0659 19.956 19.0803 20.0753 20 20.2906C20.96 20.5153 22 19.824 22 18.8175V7.80858C22 7.00021 22 6.59603 21.8059 6.17921C21.6952 5.94149 21.443 5.61811 21.241 5.45475C20 4.43872 18 5.44223 18 5.44223"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M5.5 14.5L5.5 14.509"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 12.4922L18.5 12.5012"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 4.5C9.99153 3.9943 11.2998 2 12 2M14.5 4.5C14.0085 3.9943 12.7002 2 12 2M12 2V8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
