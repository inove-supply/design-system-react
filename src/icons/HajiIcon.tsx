export const HajiIcon = ({
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
        d="M9.5 11.5L6.08998 13.2453C5.1458 13.7285 4.42974 14.5647 4.14652 15.5868C3.66954 17.3083 3 20.0686 3 22M14.5 11.5L17.91 13.2453C18.8542 13.7285 19.5703 14.5647 19.8535 15.5868C20.3305 17.3083 21 20.0686 21 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 22C7 20.8473 7.5 17 8.00137 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 16.9586C9.4359 17.1947 12.8462 16.5336 15 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 20C12 20 17 18 18 13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20 16.5C19.5452 18.7075 18.5 21 17 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M15.5005 9.05826L15.921 6.9029C16.4159 4.36646 14.5233 2 12 2C9.47667 2 7.58414 4.36646 8.07901 6.9029L8.49952 9.05826C8.83325 10.7688 10.2983 12 12 12C13.7017 12 15.1668 10.7688 15.5005 9.05826Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8 6L11.0299 5.1362C11.6668 4.9546 12.3332 4.9546 12.9701 5.1362L16 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
