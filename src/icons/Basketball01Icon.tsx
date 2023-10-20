export const Basketball01Icon = ({
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
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2 12.9506C8.14512 13.5607 13.5577 8.11477 12.9506 2"
        strokeWidth={strokeWidth}
      />
      <path
        d="M11.0507 22.0002C10.4406 15.8551 15.8866 10.4424 22.0013 11.0496"
        strokeWidth={strokeWidth}
      />
      <path
        d="M17 20C17 12.8203 11.1797 7 4 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
