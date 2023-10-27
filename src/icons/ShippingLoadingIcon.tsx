export const ShippingLoadingIcon = ({
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
        d="M4 9.87755V6H18V9.87755C18 12.7637 18 14.2068 17.0888 15.1034C16.1776 16 14.711 16 11.7778 16H10.2222C7.28904 16 5.82245 16 4.91122 15.1034C4 14.2068 4 12.7637 4 9.87755Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6L4.67308 4.46154C5.19508 3.26838 5.45609 2.6718 5.98513 2.3359C6.51417 2 7.19278 2 8.55 2H13.45C14.8072 2 15.4858 2 16.0149 2.3359C16.5439 2.6718 16.8049 3.26838 17.3269 4.46154L18 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M9.5 9H12.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M3 16H18C19.6569 16 21 17.3431 21 19C21 20.6569 19.6569 22 18 22H3"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 19H17.009M11 19H11.009M5 19H5.00898"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
