export const CertificateIcon = ({
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
        d="M9 5.02649C7.42349 4.60306 4.65212 3.46017 3.16165 4.30124C1.61279 5.17525 1.61278 10.8248 3.16165 11.6988C4.65212 12.5398 7.42349 11.3969 9 10.9735"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M15 5.02649C16.5765 4.60306 19.3479 3.46017 20.8384 4.30124C22.3872 5.17525 22.3872 10.8248 20.8384 11.6988C19.3479 12.5398 16.5765 11.3969 15 10.9735"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="8"
        r="4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M9.77244 11L8.34515 17.3753C8.01375 18.8555 7.84805 19.5957 8.18452 19.8368C9.33435 20.6607 10.7588 18.0976 12 18.0976C13.13 18.0976 14.817 20.5523 15.8155 19.8368C16.1519 19.5957 15.9862 18.8555 15.6548 17.3753L14.2276 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
