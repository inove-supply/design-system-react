export const CongruentToIcon = ({
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
      <path d="M4 13H20" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M4 19H20" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M4 6.927C6.66667 3.9281 9.33333 4.80578 12 7C14.6667 9.19422 17.3333 10.0719 20 7.073"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
