export const BodyPartLegIcon = ({
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
        d="M5.00195 2C7.69328 2.31359 13.8995 3.89572 16.6429 7.74552C16.9786 8.21643 17.3321 8.54976 17.9115 8.69637C18.6362 8.87638 19.2361 9.36245 19.4538 10.0961C19.6857 10.8944 20.1139 11.7364 19.9779 12.5901C19.9258 12.9169 19.7658 13.218 19.4459 13.82L15.0989 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.00195 12C5.00195 13.7264 8.16635 14.5959 12.002 13.7264C11.4157 14.0677 10.4147 14.6835 9.31724 15.9511C8.75826 16.5968 8.51972 17.4954 8.48079 18.4026C8.42877 19.615 8.24891 20.9338 7.62695 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.00195 7C5.00195 7 6.96093 7.28919 8.50195 8.5C9.50195 9.28571 11.4186 9.80952 12.002 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
