export const RubElHizbIcon = ({
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
        d="M4.5 6.64286C4.5 5.6327 4.5 5.12763 4.81381 4.81381C5.12763 4.5 5.6327 4.5 6.64286 4.5H17.3571C18.3673 4.5 18.8724 4.5 19.1862 4.81381C19.5 5.12763 19.5 5.6327 19.5 6.64286V17.3571C19.5 18.3673 19.5 18.8724 19.1862 19.1862C18.8724 19.5 18.3673 19.5 17.3571 19.5H6.64286C5.6327 19.5 5.12763 19.5 4.81381 19.1862C4.5 18.8724 4.5 18.3673 4.5 17.3571V6.64286Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M10.509 3.05426C11.2119 2.35142 11.5633 2 12 2C12.4367 2 12.7881 2.35142 13.491 3.05427L20.9457 10.509C21.6486 11.2119 22 11.5633 22 12C22 12.4367 21.6486 12.7881 20.9457 13.491L13.491 20.9457C12.7881 21.6486 12.4367 22 12 22C11.5633 22 11.2119 21.6486 10.509 20.9457L3.05426 13.491C2.35142 12.7881 2 12.4367 2 12C2 11.5633 2.35142 11.2119 3.05427 10.509L10.509 3.05426Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
