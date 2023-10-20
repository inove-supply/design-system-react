export const LabsIcon = ({
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
        d="M17.5 21C15.567 21 14 19.433 14 17.5L14 3L21 3L21 17.5C21 19.433 19.433 21 17.5 21Z"
        strokeWidth={strokeWidth}
      />
      <path d="M22 3L13 3" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M17 7H14" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M10 16.875C10 19.9126 8 21 6 21C4 21 2 19.9126 2 16.875C2 13.8374 6 10 6 10C6 10 10 13.8374 10 16.875Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M14 12C15.083 11.1336 16.2974 9.87843 17.771 10.7626C19.0014 11.5009 20.0342 10.7244 21 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
