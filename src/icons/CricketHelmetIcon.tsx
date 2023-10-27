export const CricketHelmetIcon = ({
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
        d="M21 9.43911C19.6952 5.66379 16.0498 3 11.7568 3C6.36825 3 2 7.281 2 12.5619C2 15.503 3.35496 18.134 5.4865 19.888C6.83589 20.9984 8.24101 20.9851 9.93379 20.9851C11.1114 20.9851 12.7258 21.1962 13.4402 20.03C14.695 17.9818 12.2704 15.1302 13.8559 13.025C14.3237 12.4039 15.0997 12.0593 16.6516 11.3701L21 9.43911ZM21 9.43911L22 8.99503"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0078 17L9.99883 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M22 15.9114L17.6345 16.4677C15.8154 16.6995 14.0804 15.6639 13.5 14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 12L16.6046 17.4417C16.7927 19.1343 16.8867 19.9805 17.4562 20.4903C18.0258 21 18.8772 21 20.5802 21H22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 16L20.5 21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
