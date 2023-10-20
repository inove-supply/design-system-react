export const Cone01Icon = ({
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
        d="M21 18C21 15.7909 16.9706 14 12 14C7.02944 14 3 15.7909 3 18C3 20.2091 7.02944 22 12 22C16.9706 22 21 20.2091 21 18Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M20.5 16.5L16.1561 7.39413C14.3427 3.79804 13.436 2 12 2C10.564 2 9.65732 3.79804 7.84393 7.39413L3.5 16.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
