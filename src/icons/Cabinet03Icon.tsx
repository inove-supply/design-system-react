export const Cabinet03Icon = ({
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
        d="M5.5 18V21M18.5 18V21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3H3V13C3 15.357 3 16.5355 3.82376 17.2678C4.64752 18 5.97335 18 8.625 18H15.375C18.0267 18 19.3525 18 20.1762 17.2678C21 16.5355 21 15.357 21 13V3Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 3H22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10.5L21 10.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.5L10.1554 13.5777C10.5758 13.7879 10.786 13.893 11.0126 13.9465C11.2393 14 11.4743 14 11.9443 14H12.0557C12.5257 14 12.7607 14 12.9874 13.9465C13.214 13.893 13.4242 13.7879 13.8446 13.5777L14 13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.5L10.1554 6.57771C10.5758 6.7879 10.786 6.893 11.0126 6.9465C11.2393 7 11.4743 7 11.9443 7H12.0557C12.5257 7 12.7607 7 12.9874 6.9465C13.214 6.893 13.4242 6.7879 13.8446 6.57771L14 6.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
