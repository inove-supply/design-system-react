export const BatteryEcoChargingIcon = ({
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
        d="M8 18.9997H13C15.8284 18.9997 17.2426 18.9997 18.1213 18.1211C19 17.2424 19 15.8282 19 12.9997C19 11.1364 19 9.88678 18.7488 8.99976M5.5 7.03809C4.24209 7.10866 3.44798 7.30911 2.87868 7.87841C2 8.75709 2 10.1713 2 12.9997C2 15.2435 2 16.5973 2.43866 17.4998"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M19 10.5L20.0272 10.6712C20.7085 10.7847 21.0491 10.8415 21.3076 11.0067C21.5618 11.1691 21.7612 11.4044 21.8796 11.6819C22 11.964 22 12.3093 22 13C22 13.6907 22 14.036 21.8796 14.3181C21.7612 14.5956 21.5618 14.8309 21.3076 14.9933C21.0491 15.1585 20.7085 15.2153 20.0272 15.3288L19 15.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M5.03319 20C4.54502 14.6 9.00032 13.5 11.0002 11M11.0339 15.8353C13.5787 15.1243 15.2108 13.4224 15.8162 10.8483C16.502 7.93305 15.2725 3.96327 12.1026 4.00026C12.1026 4.00026 12.4253 5.25961 12.143 5.8764C11.1022 8.15057 7.50025 7.99259 6.3325 10.8769C5.63711 12.4908 6.05765 14.2938 7.36616 15.3279C8.18838 15.9778 9.81192 16.1767 11.0339 15.8353Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
