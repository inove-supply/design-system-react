export const RadiusIcon = ({
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
        d="M18.1716 13L18.6585 13.5705L18.6585 13.5705L18.1716 13ZM16.5131 13.4295C16.198 13.6985 16.1606 14.1719 16.4295 14.4869C16.6985 14.802 17.1719 14.8394 17.4869 14.5705L16.5131 13.4295ZM17.4869 9.42955C17.1719 9.16063 16.6985 9.19804 16.4295 9.51309C16.1606 9.82814 16.198 10.3015 16.5131 10.5705L17.4869 9.42955ZM18.1716 11L18.6585 10.4295L18.6585 10.4295L18.1716 11ZM17.6847 12.4295L16.5131 13.4295L17.4869 14.5705L18.6585 13.5705L17.6847 12.4295ZM16.5131 10.5705L17.6847 11.5705L18.6585 10.4295L17.4869 9.42955L16.5131 10.5705ZM18.6585 13.5705C18.9178 13.3491 19.1721 13.1342 19.3521 12.9329C19.5416 12.7209 19.75 12.4155 19.75 12L18.25 12C18.25 11.8774 18.3204 11.8363 18.2337 11.9332C18.1375 12.0408 17.9776 12.1795 17.6847 12.4295L18.6585 13.5705ZM17.6847 11.5705C17.9776 11.8205 18.1375 11.9592 18.2337 12.0668C18.3204 12.1637 18.25 12.1226 18.25 12L19.75 12C19.75 11.5845 19.5416 11.2791 19.3521 11.0671C19.1721 10.8658 18.9178 10.6509 18.6585 10.4295L17.6847 11.5705Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M13.5 12H19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
