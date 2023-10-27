export const XVariableIcon = ({
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
        d="M20 3.5C13.6327 3.5 10.3673 20.5 4 20.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 20.5C17.3824 20.5 16.5736 20.5 15.8917 20.1583C15.5045 19.9641 15.1519 19.6927 14.8512 19.3572C14.3219 18.7666 14.0315 17.9204 13.4508 16.2281L10.5492 7.77185C9.96847 6.07955 9.67813 5.2334 9.14881 4.64277C8.84813 4.30728 8.49555 4.03585 8.10825 3.84174C7.42642 3.5 6.61762 3.5 5 3.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
