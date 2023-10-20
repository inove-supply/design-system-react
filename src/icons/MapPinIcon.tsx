export const MapPinIcon = ({
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
        d="M7 9.00195C4.82497 9.01507 3.64706 9.11956 2.87868 9.95197C2 10.9039 2 12.4359 2 15.5001C2 18.5642 2 20.0963 2.87868 21.0482C3.75736 22.0001 5.17157 22.0001 8 22.0001H16C18.8284 22.0001 20.2426 22.0001 21.1213 21.0482C22 20.0963 22 18.5642 22 15.5001C22 12.4359 22 10.9039 21.1213 9.95197C20.3529 9.11956 19.175 9.01507 17 9.00195"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12L10.5 14.625M18 19L13.8 16.55M13.8 16.55L18 13.75M13.8 16.55L10.5 14.625M10.5 14.625L6 17.6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7C13.3807 7 14.5 5.88071 14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5C9.5 5.88071 10.6193 7 12 7ZM12 7V11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
