export const Parabola01Icon = ({
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
        d="M21 3C21 11.2843 16.9706 18 12 18C7.02944 18 3 11.2843 3 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M3 21H4.05882M15.7059 21H16.7647M19.9412 21H21M7.23529 21H8.29412M11.4706 21H12.5294"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
