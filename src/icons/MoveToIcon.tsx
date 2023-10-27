export const MoveToIcon = ({
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
        d="M9 5L19 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M5 5H5.00898"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11H5.00898"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 17H5.00898"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11L19 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M9 17L19 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M18.1716 18L18.6585 18.5705L18.6585 18.5705L18.1716 18ZM16.5131 18.4295C16.198 18.6985 16.1606 19.1719 16.4295 19.4869C16.6985 19.802 17.1719 19.8394 17.4869 19.5705L16.5131 18.4295ZM17.4869 14.4295C17.1719 14.1606 16.6985 14.198 16.4295 14.5131C16.1606 14.8281 16.198 15.3015 16.5131 15.5705L17.4869 14.4295ZM18.1716 16L18.6585 15.4295L18.6585 15.4295L18.1716 16ZM17.6847 17.4295L16.5131 18.4295L17.4869 19.5705L18.6585 18.5705L17.6847 17.4295ZM16.5131 15.5705L17.6847 16.5705L18.6585 15.4295L17.4869 14.4295L16.5131 15.5705ZM18.6585 18.5705C18.9178 18.3491 19.1721 18.1342 19.3521 17.9329C19.5416 17.7209 19.75 17.4155 19.75 17H18.25C18.25 16.8774 18.3204 16.8363 18.2337 16.9332C18.1375 17.0408 17.9776 17.1795 17.6847 17.4295L18.6585 18.5705ZM17.6847 16.5705C17.9776 16.8205 18.1375 16.9592 18.2337 17.0668C18.3204 17.1637 18.25 17.1226 18.25 17H19.75C19.75 16.5845 19.5416 16.2791 19.3521 16.0671C19.1721 15.8658 18.9178 15.6509 18.6585 15.4295L17.6847 16.5705Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
