export const SmartPhone02Icon = ({
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
        d="M18.5 6C18.4191 4.58055 18.197 3.67665 17.5877 3.02513C16.629 2 15.086 2 12 2C8.91399 2 7.37099 2 6.41229 3.02513C5.80299 3.67665 5.58093 4.58055 5.5 6M18.5 18C18.4191 19.4194 18.197 20.3233 17.5877 20.9749C16.629 22 15.086 22 12 22C8.91399 22 7.37099 22 6.41229 20.9749C5.80298 20.3233 5.58093 19.4194 5.5 18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M11 19H13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8.5C4 8.5 5 8.846 5 9.8125C5 10.779 4 11.0335 4 12C4 12.9665 5 13.221 5 14.1875C5 15.154 4 15.5 4 15.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8.5C20 8.5 19 8.846 19 9.8125C19 10.779 20 11.0335 20 12C20 12.9665 19 13.221 19 14.1875C19 15.154 20 15.5 20 15.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
