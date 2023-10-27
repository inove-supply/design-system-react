export const PlazaIcon = ({
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
        d="M3 21H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21V7.75122C5 7.12696 5 6.81484 5.14935 6.56401C5.2987 6.31317 5.56766 6.17359 6.10557 5.89441L10.1056 3.81844C11.4028 3.14517 12.0515 2.80854 12.5257 3.11279C13 3.41703 13 4.16977 13 5.67525V21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 21V12.2361C19 11.6347 19 11.334 18.8507 11.0923C18.7013 10.8507 18.4323 10.7162 17.8944 10.4472L13 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9L9.5 9M8.5 13H9.5M8.5 17H9.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
