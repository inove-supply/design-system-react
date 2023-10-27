export const ArrowUpRight02RoundIcon = ({
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
        d="M13 11L6 18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.541 6.08278L14.2992 6.19567C12.2873 6.37857 11.2814 6.47002 11.0447 7.12388C10.8079 7.77774 11.5222 8.49198 12.9507 9.92046L14.0795 11.0493C15.508 12.4778 16.2223 13.1921 16.8761 12.9553C17.53 12.7186 17.6214 11.7127 17.8043 9.70078L17.9172 8.45902C18.0273 7.24766 18.0824 6.64198 17.7202 6.27979C17.358 5.9176 16.7523 5.97266 15.541 6.08278Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
