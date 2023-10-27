export const MoonCloudLittleSnowIcon = ({
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
        d="M17.4776 10.9867C17.485 10.9867 17.4925 10.9867 17.5 10.9867C19.9853 10.9867 22 12.9969 22 15.4767C22 17.2396 20.9817 18.7653 19.5 19.5M17.4776 10.9867C17.4924 10.8224 17.5 10.656 17.5 10.4878C17.5 7.45697 15.0376 5 12 5C9.12324 5 6.76233 7.20372 6.52042 10.0116M17.4776 10.9867C17.395 11.9014 16.9769 12.6883 16.5 13.4181M6.52042 10.0116C3.98398 10.2524 2 12.3839 2 14.9778C2 16.8244 3.0055 18.4367 4.5 19.2993M6.52042 10.0116C6.67826 9.99657 6.83823 9.98891 7 9.98891C8.12582 9.98891 9.16474 10.3602 10.0005 10.9867"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16L13 18M13 16L11 18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 20L17 22M17 20L15 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 20L9 22M9 20L7 22"
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
