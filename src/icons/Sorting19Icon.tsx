export const Sorting19Icon = ({
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
        d="M7 9.99936V3.94812C7 3.3736 7 3.08634 6.76959 3.01485C6.26306 2.85769 5.5 3.99902 5.5 3.99902M7 9.99936H5.5M7 9.99936H8.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 17.499V15.749C9 14.9241 9 14.5116 8.70711 14.2553C8.41421 13.999 7.94281 13.999 7 13.999C6.05719 13.999 5.58579 13.999 5.29289 14.2553C5 14.5116 5 14.9241 5 15.749C5 16.574 5 16.9865 5.29289 17.2427C5.58579 17.499 6.05719 17.499 7 17.499H9ZM9 17.499V18.374C9 19.6115 9 20.2302 8.56066 20.6146C8.12132 20.999 7.41421 20.999 6 20.999H5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 19.999V3.99902M16.5 19.999C15.7998 19.999 14.4915 18.0047 14 17.499M16.5 19.999C17.2002 19.999 18.5085 18.0047 19 17.499"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
