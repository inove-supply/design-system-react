export const Route03Icon = ({
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
        d="M18 2C20.1647 2 22 3.81484 22 6.01659C22 8.25341 20.1348 9.82312 18.412 10.8905C18.2864 10.9623 18.1445 11 18 11C17.8555 11 17.7136 10.9623 17.588 10.8905C15.8684 9.8127 14 8.26115 14 6.01659C14 3.81484 15.8353 2 18 2Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M18 6H18.009"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="5"
        cy="19"
        r="3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7H9.5C7.567 7 6 8.34315 6 10C6 11.6569 7.567 13 9.5 13H12.5C14.433 13 16 14.3431 16 16C16 17.6569 14.433 19 12.5 19H11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
