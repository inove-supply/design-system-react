export const MedicalMaskIcon = ({
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
        d="M10 8.5H8.70711C8.25435 8.5 7.82014 8.67986 7.5 9M14 8.5H15.2929C15.7456 8.5 16.1799 8.67986 16.5 9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.31313 17.9198C6.89597 16.5535 6.89576 14.4497 7.31168 13.0825C7.57009 12.2331 8.29788 12 9.11765 12H14.8823C15.701 12 16.4284 12.2327 16.6872 13.0807C17.1043 14.4476 17.1043 16.5524 16.6872 17.9193C16.4284 18.7673 15.701 19 14.8823 19H9.11765C8.29936 19 7.57194 18.7675 7.31313 17.9198Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13.5L2 12M17 13.5L22 12M7 17.5L3.5 17M17 17.5L20.5 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
