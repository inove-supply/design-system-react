export const BloodBagIcon = ({
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
        d="M5 7.37225C13 3.24278 11.5 10.0046 19 7.37228"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M5 9C5 6.19108 5 4.78661 5.67412 3.77772C5.96596 3.34096 6.34096 2.96596 6.77772 2.67412C7.78661 2 9.19108 2 12 2C14.8089 2 16.2134 2 17.2223 2.67412C17.659 2.96596 18.034 3.34096 18.3259 3.77772C19 4.78661 19 6.19108 19 9V11C19 13.8089 19 15.2134 18.3259 16.2223C18.034 16.659 17.659 17.034 17.2223 17.3259C16.2134 18 14.8089 18 12 18C9.19108 18 7.78661 18 6.77772 17.3259C6.34096 17.034 5.96596 16.659 5.67412 16.2223C5 15.2134 5 13.8089 5 11V9Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M12.0142 10L10.5736 11.4876C9.79996 12.3003 9.81331 13.6088 10.587 14.4077C11.3739 15.2066 12.6411 15.1928 13.4148 14.3939C14.2017 13.5812 14.1884 12.2727 13.4148 11.4738L12.0142 10Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M8 22C10.2091 22 12 20.2091 12 18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
