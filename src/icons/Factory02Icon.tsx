export const Factory02Icon = ({
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
        d="M2.05702 19.874L4.00488 4.70063C4.18289 3.31398 4.53457 3 5.95624 3C7.37791 3 7.72959 3.31398 7.90759 4.70063L10 21H3.05991C2.52521 21 2.25787 21 2.10693 20.8305C1.95599 20.6611 1.98967 20.3987 2.05702 19.874Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1537 21H21C21.4714 21 21.7071 21 21.8536 20.8536C22 20.7071 22 20.4714 22 20V7L17.6402 10.6332C16.9306 11.2245 16.5758 11.5201 16.2879 11.3853C16 11.2504 16 10.7886 16 9.86496V7L11.552 10.2349C11.0304 10.6143 10.7696 10.8039 10.4681 10.902C10.1666 11 9.84419 11 9.19926 11H9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6H8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15L14 15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 15H19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
