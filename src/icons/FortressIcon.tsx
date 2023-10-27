export const FortressIcon = ({
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
        d="M2 21H8C8.4714 21 8.70711 21 8.85355 20.8536C9 20.7071 9 20.4714 9 20V18C9 16.3431 10.3431 15 12 15C13.6569 15 15 16.3431 15 18V20C15 20.4714 15 20.7071 15.1464 20.8536C15.2929 21 15.5286 21 16 21H22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M3 21.0001V4.00003C3 3.52865 3 3.29296 3.14644 3.14651C3.29288 3.00007 3.52857 3.00005 3.99995 3.00003L4.68767 3C4.98767 2.99999 5.00299 3.01195 5.07575 3.30299L5.42425 4.697C5.49701 4.98802 5.51233 4.99999 5.81231 4.99999H7.18769C7.48767 4.99999 7.50299 4.98802 7.57575 4.697L7.92425 3.30306C7.99701 3.01204 8.01233 3.00008 8.31231 3.00008L9 3.00008C9.4714 3.00008 9.70711 3.00008 9.85355 3.14653C10 3.29297 10 3.52867 10 4.00008V8.00008C10 8.47148 10 8.70719 10.1464 8.85363C10.2929 9.00008 10.5286 9.00008 11 9.00008H13C13.4714 9.00008 13.7071 9.00008 13.8536 8.85363C14 8.70719 14 8.47148 14 8.00008V4.00008C14 3.52867 14 3.29297 14.1464 3.14653C14.2929 3.00008 14.5286 3.00008 15 3.00008L15.6877 3.00008C15.9877 3.00008 16.003 3.01204 16.0757 3.30306L16.4243 4.697C16.497 4.98803 16.5123 4.99999 16.8123 4.99999H18.1877C18.4877 4.99999 18.503 4.98802 18.5757 4.697L18.9242 3.30299C18.997 3.01195 19.0123 2.99999 19.3123 3L20 3.00003C20.4714 3.00005 20.7071 3.00007 20.8536 3.14651C21 3.29296 21 3.52865 21 4.00003V21.0001"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9H6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 12H11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 9H17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
