export const MoonCloudHailstoneIcon = ({
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
        d="M17.4776 11.0448C17.485 11.0448 17.4925 11.0448 17.5 11.0448C19.9853 11.0448 22 13.0745 22 15.5784C22 16.921 21.5 18 21 18.5M17.4776 11.0448C17.4924 10.8789 17.5 10.7109 17.5 10.541C17.5 7.48081 15.0376 5 12 5C9.12324 5 6.76233 7.2251 6.52042 10.0602M17.4776 11.0448C17.3753 12.1877 16.9286 13.2306 16.2428 14.0672M6.52042 10.0602C3.98398 10.3034 2 12.4556 2 15.0746C2 16.4838 2.57432 17.617 3.5 18.5M6.52042 10.0602C6.67826 10.0451 6.83823 10.0373 7 10.0373C8.12582 10.0373 9.16474 10.4122 10.0005 11.0448"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0017 15L12.0062 15.0078M15.0005 17.9967L15.005 18.0044M9.00278 17.9967L9.00727 18.0044M17.9994 20.9933L18.0039 21.0011M6.00391 20.9933L6.0084 21.0011M12.0017 21.9922L12.0062 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
