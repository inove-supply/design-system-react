export const CommandLineIcon = ({
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
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeWidth={strokeWidth}
      />
      <path d="M2.5 9H21.5" strokeWidth={strokeWidth} strokeLinejoin="round" />
      <path d="M6.99981 6H7.00879" strokeWidth={strokeWidth} />
      <path d="M10.9998 6H11.0088" strokeWidth={strokeWidth} />
      <path
        d="M16 13L17.2265 14.0572C17.7422 14.5016 18 14.7239 18 15C18 15.2761 17.7422 15.4984 17.2265 15.9428L16 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13L6.77346 14.0572C6.25782 14.5016 6 14.7239 6 15C6 15.2761 6.25782 15.4984 6.77346 15.9428L8 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 12L11 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
