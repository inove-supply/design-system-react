export const CircleArrowReload02RoundIcon = ({
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
        d="M9.6 7.5L8.68465 8.67019C8.15854 9.34278 8.25535 9.54545 9.10274 9.54545L14.4 9.54545C15.8615 9.54545 16 10.3125 16 11.5909M14.4 16.5L15.3153 15.3298C15.8415 14.6572 15.7447 14.4545 14.8973 14.4545H9.6C8.13846 14.4545 8 13.6875 8 12.4091"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
