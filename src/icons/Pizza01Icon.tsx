export const Pizza01Icon = ({
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
        d="M10.2201 18.821L18.6793 13.1312C20.1246 12.159 20.8472 11.673 20.9785 10.7879C21.1098 9.90283 20.6352 9.30806 19.686 8.11852C17.5076 5.3886 14.548 3.35345 11.1624 2.38141C9.87428 2.01158 9.23023 1.82667 8.53978 2.2186C7.84933 2.61053 7.62404 3.37564 7.17348 4.90586L4.40648 14.3032C3.11201 18.6995 2.46477 20.8977 3.54764 21.7392C4.63051 22.5807 6.49371 21.3275 10.2201 18.821Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7.5 5C7.5 5 8.03795 5.1182 8.90014 5.38146C11.6322 6.21565 14.0691 7.83278 16 10.0001"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M8.75 17.734C8.75 16.5815 9.60004 15.75 10.5267 15.75V14.25C8.66241 14.25 7.25 15.8666 7.25 17.734H8.75ZM10.5267 15.75C11.338 15.75 12.0831 16.3789 12.2636 17.3147L13.7364 17.0306C13.4383 15.485 12.1505 14.25 10.5267 14.25V15.75ZM9.55556 19.3949C9.08126 19.0476 8.75 18.443 8.75 17.734H7.25C7.25 18.9111 7.80122 19.9695 8.66946 20.6051L9.55556 19.3949Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7.25 10.4446C7.25 11.4999 6.47461 12.25 5.64305 12.25V13.75C7.4149 13.75 8.75 12.2119 8.75 10.4446H7.25ZM6.09623 8.71206C6.73256 8.92253 7.25 9.5924 7.25 10.4446H8.75C8.75 8.9937 7.86238 7.7163 6.56726 7.28794L6.09623 8.71206ZM5.64305 12.25C5.49588 12.25 5.35427 12.2279 5.21996 12.1867L4.78004 13.6208C5.05455 13.705 5.34434 13.75 5.64305 13.75V12.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M13.0078 11L12.9988 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
