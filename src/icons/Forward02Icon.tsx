export const Forward02Icon = ({
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
        d="M21.8371 12.9178C21.5547 13.6884 20.7014 14.3047 18.9948 15.5372C16.6677 17.218 15.5041 18.0583 14.5312 17.9969C13.7882 17.9499 13.0976 17.6007 12.6223 17.0315C12 16.2863 12 14.8575 12 12C12 9.14246 12 7.71369 12.6223 6.96846C13.0976 6.39933 13.7882 6.0501 14.5312 6.00315C15.5041 5.94167 16.6677 6.78203 18.9948 8.46275C20.7014 9.6953 21.5547 10.3116 21.8371 11.0822C22.0543 11.675 22.0543 12.325 21.8371 12.9178Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M11.8371 12.9178C11.5547 13.6884 10.7014 14.3047 8.99482 15.5372C6.66769 17.218 5.50413 18.0583 4.5312 17.9969C3.78818 17.9499 3.09758 17.6007 2.62232 17.0315C2 16.2863 2 14.8575 2 12C2 9.14246 2 7.71369 2.62232 6.96846C3.09758 6.39933 3.78818 6.0501 4.5312 6.00315C5.50413 5.94167 6.66769 6.78203 8.99482 8.46275C10.7014 9.6953 11.5547 10.3116 11.8371 11.0822C12.0543 11.675 12.0543 12.325 11.8371 12.9178Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
