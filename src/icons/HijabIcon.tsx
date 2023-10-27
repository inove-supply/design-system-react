export const HijabIcon = ({
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
        d="M12 5C10.3431 5 9 6.34315 9 8V10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10V8C15 6.34315 13.6569 5 12 5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M15 10C15 12.5 14.68 14.4 11.2667 16C7.85333 17.6 7 19.8333 7 21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M9 8H15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M17.8022 7.51864C17.8022 4.47078 15.2045 2 12 2C8.79554 2 6.19782 4.47078 6.19782 7.51864C6.19782 9.61659 5.45992 13.4691 3.05841 16.4349C2.31105 17.3578 1.93737 17.8193 2.00859 18.244C2.0798 18.6687 2.48003 18.9288 3.28049 19.4489C8.51571 22.8504 15.4843 22.8504 20.7195 19.4489C21.52 18.9288 21.9202 18.6687 21.9914 18.244C22.0626 17.8193 21.689 17.3578 20.9416 16.4349C18.5401 13.4691 17.8022 9.61659 17.8022 7.51864Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
