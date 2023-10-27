export const ZoomCircleIcon = ({
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6.5 11V10C6.5 9.5286 6.5 9.29289 6.64645 9.14645C6.79289 9 7.0286 9 7.5 9H9C10.8856 9 11.8284 9 12.4142 9.58579C13 10.1716 13 11.1144 13 13V14C13 14.4714 13 14.7071 12.8536 14.8536C12.7071 15 12.4714 15 12 15H10.5C8.61438 15 7.67157 15 7.08579 14.4142C6.5 13.8284 6.5 12.8856 6.5 11Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4498 10.5352L15.7998 10.1976C16.5247 9.49854 16.8872 9.14899 17.1936 9.27553C17.5 9.40207 17.5 9.90131 17.5 10.8998V13.1002C17.5 14.0987 17.5 14.5979 17.1936 14.7245C16.8872 14.851 16.5247 14.5015 15.7998 13.8024L15.4498 13.4648C15.0061 13.0369 15 13.0226 15 12.4115V11.5885C15 10.9774 15.0061 10.9631 15.4498 10.5352Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
