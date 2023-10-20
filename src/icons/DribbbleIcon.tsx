export const DribbbleIcon = ({
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
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
      <path
        d="M22 13.2644C21.0732 13.0906 20.12 13 19.1472 13C13.7948 13 9.03435 15.7425 6 20"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M19 5C15.8705 8.66742 11.1679 11 5.90962 11C4.56437 11 3.25548 10.8473 2 10.5587"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M14.6178 22C14.8684 20.786 15 19.5287 15 18.2407C15 11.9247 11.8343 6.34645 7 3"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}
