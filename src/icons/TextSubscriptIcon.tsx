export const TextSubscriptIcon = ({
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
        d="M13 21H7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.75 3C10.75 2.58579 10.4142 2.25 10 2.25C9.58579 2.25 9.25 2.58579 9.25 3H10.75ZM9.25 21C9.25 21.4142 9.58579 21.75 10 21.75C10.4142 21.75 10.75 21.4142 10.75 21H9.25ZM9.25 3V21H10.75V3H9.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M17 6C17 5.37191 17 5.05787 16.9194 4.78267C16.7518 4.21026 16.3066 3.71716 15.7541 3.49226C15.4886 3.38413 15.1885 3.35347 14.5884 3.29216C13.1695 3.14718 11.3874 3 10 3C8.61262 3 6.83047 3.14718 5.41161 3.29216C4.8115 3.35347 4.51144 3.38413 4.24586 3.49226C3.69344 3.71716 3.24816 4.21026 3.08057 4.78267C3 5.05787 3 5.37191 3 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M22 21H20C19.5286 21 19.2929 21 19.1464 20.8566C19 20.7133 19 20.4825 19 20.021V19.0766C19 18.2812 19.176 18.1253 20.0004 18.1094C20.7769 18.0944 21.2401 18.0388 21.5607 17.8333C22 17.5516 22 17.0983 22 16.1916C22 14.4594 19 15.1262 19 15.1262"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
