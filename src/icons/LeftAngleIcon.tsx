export const LeftAngleIcon = ({
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
        d="M21 5C20.6068 4.59544 19.5602 3 19 3C18.4398 3 17.3932 4.59544 17 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 17C4.59544 17.3932 3 18.4398 3 19C3 19.5602 4.59544 20.6068 5 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12H18C15.1716 12 13.7574 12 12.8787 12.8787C12 13.7574 12 15.1716 12 18V19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 19H13C15.8284 19 17.2426 19 18.1213 18.1479C19 17.2959 19 15.9245 19 13.1818V3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
