export const TicketStarIcon = ({
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
        d="M15.0183 9.43335L15.5462 10.498C15.6182 10.6462 15.8102 10.7883 15.9722 10.8155L16.9291 10.9758C17.541 11.0787 17.685 11.5263 17.244 11.9678L16.5001 12.7179C16.3741 12.8449 16.3051 13.0899 16.3441 13.2653L16.5571 14.1938C16.7251 14.9288 16.3381 15.2131 15.6932 14.829L14.7963 14.2937C14.6343 14.1969 14.3674 14.1969 14.2024 14.2937L13.3055 14.829C12.6636 15.2131 12.2736 14.9258 12.4416 14.1938L12.6546 13.2653C12.6935 13.0899 12.6246 12.8449 12.4986 12.7179L11.7547 11.9678C11.3167 11.5263 11.4577 11.0787 12.0696 10.9758L13.0265 10.8155C13.1855 10.7883 13.3775 10.6462 13.4495 10.498L13.9774 9.43335C14.2654 8.85568 14.7333 8.85568 15.0183 9.43335Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17L8 20.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 3.5V7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 8.87895C21.9331 7.33687 21.7456 6.33298 21.2203 5.53884C20.9181 5.08196 20.5428 4.68459 20.1112 4.36468C18.9447 3.5 17.299 3.5 14.0078 3.5H9.99305C6.70178 3.5 5.05614 3.5 3.88962 4.36468C3.45805 4.68459 3.08267 5.08196 2.78047 5.53884C2.25526 6.33289 2.06776 7.33665 2.00083 8.87843C1.98938 9.14208 2.21648 9.34375 2.46531 9.34375C3.85109 9.34375 4.97449 10.533 4.97449 12C4.97449 13.467 3.85109 14.6562 2.46531 14.6562C2.21648 14.6562 1.98938 14.8579 2.00083 15.1216C2.06776 16.6634 2.25526 17.6671 2.78047 18.4612C3.08267 18.918 3.45805 19.3154 3.88962 19.6353C5.05614 20.5 6.70178 20.5 9.99306 20.5H14.0078C17.299 20.5 18.9447 20.5 20.1112 19.6353C20.5428 19.3154 20.9181 18.918 21.2203 18.4612C21.7456 17.667 21.9331 16.6631 22 15.1211V8.87895Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
