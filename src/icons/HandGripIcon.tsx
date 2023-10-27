export const HandGripIcon = ({
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
        d="M2.34209 19.8156C4.06053 18.5763 4.98575 15.6198 5.4604 13.3476C5.59803 12.6888 5.65664 11.3535 6.41351 11.05C6.84624 10.8764 7.41395 11.1662 8.54935 11.7457C9.42191 12.1911 9.85819 12.4138 9.97088 12.8837C10.2411 14.0101 8.4191 14.4446 8.85203 15.5942C9.3353 16.8775 9.0071 17.2525 8.06816 18.0939C7.35009 18.7374 8.28388 19.5511 7.86825 20.2587C6.83365 22.0202 5.19899 22.5446 3.03619 21.3715C2.46319 21.0606 1.47447 20.4413 2.34209 19.8156Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M21.6579 19.8156C19.9395 18.5763 19.0143 15.6198 18.5396 13.3476C18.402 12.6888 18.3434 11.3535 17.5865 11.05C17.1538 10.8764 16.5861 11.1662 15.4506 11.7457C14.5781 12.1911 14.1418 12.4138 14.0291 12.8837C13.7601 14.0051 15.5771 14.4546 15.148 15.5942C14.6647 16.8775 14.9929 17.2525 15.9318 18.0939C16.6499 18.7374 15.7161 19.5511 16.1318 20.2587C17.1664 22.0202 18.801 22.5446 20.9638 21.3715C21.5368 21.0606 22.5255 20.4413 21.6579 19.8156Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M14.5 4.5C14.5 5.88071 13.3807 7 12 7C10.6193 7 9.5 5.88071 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M14.7764 11.6973C14.8854 12.097 15.2977 12.3326 15.6973 12.2236C16.097 12.1146 16.3326 11.7023 16.2236 11.3027L14.7764 11.6973ZM16.2236 11.3027L14.7236 5.80266L13.2764 6.19734L14.7764 11.6973L16.2236 11.3027Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M8.5 11.5L9.25 8.75"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
