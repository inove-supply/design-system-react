export const FlowSquareIcon = ({
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
        d="M12.5 4.5C12.5 3.32149 12.5 2.73223 12.8661 2.36612C13.2322 2 13.8215 2 15 2C16.1785 2 16.7678 2 17.1339 2.36612C17.5 2.73223 17.5 3.32149 17.5 4.5C17.5 5.67851 17.5 6.26777 17.1339 6.63388C16.7678 7 16.1785 7 15 7C13.8215 7 13.2322 7 12.8661 6.63388C12.5 6.26777 12.5 5.67851 12.5 4.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.5 19.5C12.5 18.3215 12.5 17.7322 12.8661 17.3661C13.2322 17 13.8215 17 15 17C16.1785 17 16.7678 17 17.1339 17.3661C17.5 17.7322 17.5 18.3215 17.5 19.5C17.5 20.6785 17.5 21.2678 17.1339 21.6339C16.7678 22 16.1785 22 15 22C13.8215 22 13.2322 22 12.8661 21.6339C12.5 21.2678 12.5 20.6785 12.5 19.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2 12C2 10.5858 2 9.87868 2.51256 9.43934C3.02513 9 3.85008 9 5.5 9C7.14992 9 7.97487 9 8.48744 9.43934C9 9.87868 9 10.5858 9 12C9 13.4142 9 14.1213 8.48744 14.5607C7.97487 15 7.14992 15 5.5 15C3.85008 15 3.02513 15 2.51256 14.5607C2 14.1213 2 13.4142 2 12Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21.9994 4.50009H17.5M5.5 9.00018V8C5.5 6.59554 5.5 5.89331 5.83706 5.38886C5.98298 5.17048 6.17048 4.98298 6.38886 4.83706C6.89331 4.5 7.59554 4.5 9 4.5H12.5M21.9994 19.5004H17.5M5.5 15.0003V16.0005C5.5 17.405 5.5 18.1072 5.83706 18.6116C5.98298 18.83 6.17048 19.0175 6.38886 19.1634C6.89331 19.5005 7.59554 19.5005 9 19.5005H12.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
