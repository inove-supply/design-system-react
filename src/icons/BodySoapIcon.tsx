export const BodySoapIcon = ({
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
        d="M4.5 13C4.5 10.2386 6.73858 8 9.5 8C12.2614 8 14.5 10.2386 14.5 13V18C14.5 19.8856 14.5 20.8284 13.9142 21.4142C13.3284 22 12.3856 22 10.5 22H8.5C6.61438 22 5.67157 22 5.08579 21.4142C4.5 20.8284 4.5 19.8856 4.5 18V13Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 13.1122C10.8607 9.83944 8.89093 14.9405 4.5 13.8418"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7.5 8V7C7.5 6.05719 7.5 5.58579 7.79289 5.29289C8.08579 5 8.55719 5 9.5 5C10.4428 5 10.9142 5 11.2071 5.29289C11.5 5.58579 11.5 6.05719 11.5 7V8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 5V2M9.5 2H7.5M9.5 2H12.9229C13.9117 2 14.7493 2.39009 15.5 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4414 8.97336C19.671 9.84608 19.2059 10.7313 18.4026 10.9505C17.5994 11.1697 16.7621 10.64 16.5325 9.76726C16.303 8.89454 17.3634 7 17.3634 7C17.3634 7 19.2118 8.10063 19.4414 8.97336Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
