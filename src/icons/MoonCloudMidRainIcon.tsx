export const MoonCloudMidRainIcon = ({
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
        d="M17.4776 11.0091C17.485 11.0091 17.4925 11.0091 17.5 11.0091C19.9853 11.0091 22 13.0269 22 15.5159C22 17.2442 20.9257 18.2931 19.5 19M17.4776 11.0091C17.4924 10.8442 17.5 10.6772 17.5 10.5083C17.5 7.46617 15.0376 5 12 5C9.12324 5 6.76233 7.21197 6.52042 10.0303M17.4776 11.0091C17.3954 11.9219 17.091 12.7704 16.6189 13.5M6.52042 10.0303C3.98398 10.2721 2 12.4116 2 15.0152C2 16.8687 3.0055 18.1412 4.5 19M6.52042 10.0303C6.67826 10.0153 6.83823 10.0076 7 10.0076C7.91072 10.0076 8.76457 10.2514 9.5 10.6775"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0434 13L10.907 14.036C10.3596 14.596 10.3596 15.492 10.9358 16.052C11.224 16.332 11.6401 16.5 12.0434 16.5C12.4468 16.5 12.7797 16.36 13.0678 16.108C13.6441 15.548 13.6441 14.624 13.0678 14.064L12.0434 13Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M8.54345 18.5L7.40701 19.536C6.8596 20.096 6.85963 20.992 7.43585 21.552C7.72396 21.832 8.14009 22 8.54345 22C8.9468 22 9.27972 21.86 9.56783 21.608C10.1441 21.048 10.1441 20.124 9.56783 19.564L8.54345 18.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M15.5434 18.5L14.407 19.536C13.8596 20.096 13.8596 20.992 14.4358 21.552C14.724 21.832 15.1401 22 15.5434 22C15.9468 22 16.2797 21.86 16.5678 21.608C17.1441 21.048 17.1441 20.124 16.5678 19.564L15.5434 18.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
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
