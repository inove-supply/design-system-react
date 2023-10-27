export const RealEstate01Icon = ({
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
        d="M21 7.4849C21 6.38738 21 5.83862 20.7239 5.37551C20.4478 4.9124 19.9392 4.608 18.9219 3.99921L17.6276 3.22461C16.0308 2.26893 15.2323 1.7911 14.6162 2.08712C14 2.38315 14 3.24459 14 4.96746V22H21V7.4849Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M22 22H2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9H10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 15H10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 7.4849C3 6.38738 3 5.83862 3.27609 5.37551C3.55219 4.9124 4.06081 4.608 5.07807 3.99921L6.37237 3.22461C7.96923 2.26893 8.76767 1.7911 9.38383 2.08712C10 2.38315 10 3.24459 10 4.96746V22H3V7.4849Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M6.50117 8L6.49219 8M6.50117 12H6.49219M6.50117 16H6.49219"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5012 8L17.4922 8M17.5012 12H17.4922M17.5012 16H17.4922"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
