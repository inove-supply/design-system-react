export const Bus03Icon = ({
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
        d="M6 10V5M11 10V5M16 10V5.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.01218 17C3.59223 17 2.88225 17 2.44112 16.5607C2 16.1213 2 15.4142 2 14V8C2 6.58579 2 5.87868 2.44112 5.43934C2.88225 5 3.59223 5 5.01218 5H12.0966C15.5703 5 17.3071 5 18.6363 5.70624C19.6151 6.22633 20.4307 7.0055 20.9932 7.95786C21.757 9.25111 21.8293 10.9794 21.974 14.436C22.0129 15.3678 22.0324 15.8337 21.8503 16.1862C21.7165 16.4454 21.5096 16.6601 21.2552 16.8041C20.9091 17 20.441 17 19.5046 17H19M9 17H15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 12.75C21.9142 12.75 22.25 12.4142 22.25 12C22.25 11.5858 21.9142 11.25 21.5 11.25V12.75ZM17.6385 11.776L17.2442 12.414L17.6385 11.776ZM2 9.25C1.58579 9.25 1.25 9.58579 1.25 10C1.25 10.4142 1.58579 10.75 2 10.75V9.25ZM16.3307 10.521L16.9311 10.0715L16.9311 10.0715L16.3307 10.521ZM19.3541 12.75H21.5V11.25H19.3541V12.75ZM19.3541 11.25C18.8876 11.25 18.5945 11.2491 18.371 11.226C18.1649 11.2047 18.0839 11.1696 18.0328 11.138L17.2442 12.414C17.5555 12.6064 17.8812 12.6833 18.2168 12.718C18.535 12.7509 18.9184 12.75 19.3541 12.75V11.25ZM15.382 9.25H2V10.75H15.382V9.25ZM15.7304 10.9705C16.1324 11.5076 16.713 12.0857 17.2442 12.414L18.0328 11.138C17.7046 10.9352 17.2557 10.5051 16.9311 10.0715L15.7304 10.9705ZM15.382 10.75C15.4659 10.75 15.6057 10.8041 15.7304 10.9705L16.9311 10.0715C16.6017 9.63159 16.0556 9.25 15.382 9.25V10.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="7"
        cy="17"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="17"
        cy="17"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
