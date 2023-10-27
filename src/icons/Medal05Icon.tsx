export const Medal05Icon = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.2501 4.21216C8.51855 3.62427 8.65277 3.33032 8.91964 3.16516C9.18651 3 9.52725 3 10.2087 3H13.7913C14.4728 3 14.8135 3 15.0804 3.16516C15.3472 3.33032 15.4815 3.62427 15.7499 4.21216L17.4805 8.00215C17.9074 8.93697 18.1208 9.40438 17.9293 9.80465C17.7378 10.2049 17.2238 10.3657 16.1957 10.6874L12 12L7.80426 10.6874C6.77623 10.3657 6.26222 10.2049 6.0707 9.80465C5.87919 9.40438 6.09262 8.93697 6.51948 8.00215L8.2501 4.21216Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12L9 3.5M15 11L12 3"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7774 12.6499L13.5693 14.2468C13.6773 14.4691 13.9653 14.6823 14.2083 14.7231L15.6436 14.9636C16.5615 15.1178 16.7775 15.7893 16.1161 16.4516L15.0002 17.5767C14.8112 17.7673 14.7077 18.1347 14.7662 18.3979L15.0857 19.7906C15.3377 20.893 14.7572 21.3195 13.7898 20.7433L12.4445 19.9403C12.2015 19.7952 11.801 19.7952 11.5536 19.9403L10.2082 20.7433C9.24533 21.3195 8.66039 20.8885 8.91236 19.7906L9.23183 18.3979C9.29032 18.1347 9.18683 17.7673 8.99785 17.5767L7.88198 16.4516C7.22505 15.7893 7.43653 15.1178 8.35443 14.9636L9.78977 14.7231C10.0282 14.6823 10.3162 14.4691 10.4242 14.2468L11.2161 12.6499C11.6481 11.7834 12.35 11.7834 12.7774 12.6499Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
