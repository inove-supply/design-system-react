export const SpiralsIcon = ({
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
        d="M11.9532 2C17.5019 2 22 6.47715 22 12C22 17.5228 17.5019 22 11.9532 22C-0.631103 22 -1.82658 4.01755 11.4985 5C14.8499 5.2471 18.0289 8.41015 18.0289 12C18.0289 16.5 15.2348 18.5 11.4985 18.5C4.5 18.5 3.19042 8.46691 11.0021 9C12.508 9.10276 14.0162 10.3431 14.0162 12C14.0162 13.9278 13 15 11.1211 15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
