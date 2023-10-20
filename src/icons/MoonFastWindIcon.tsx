export const MoonFastWindIcon = ({
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
        d="M19.5483 17C20.7476 15.9645 21.5819 14.6272 22 13.1756C19.5473 13.4746 17.0369 12.3432 15.7234 10.1113C14.4099 7.87928 14.6664 5.1807 16.1567 3.2463C14.1701 2.75234 11.9929 2.98823 10.0779 4.07295C7.30713 5.64236 5.83056 8.56635 6.0155 11.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 15C5.5 18.5 11.5755 17 12.7324 15C12.9026 14.7058 13 14.3643 13 14C13 12.8954 12.1046 12 11 12C9.89543 12 9 12.8954 9 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.0001 20.9146C14.1565 20.9699 14.3248 21 14.5001 21C15.3285 21 16.0001 20.3284 16.0001 19.5C16.0001 18.6716 15.3285 18 14.5001 18C14.206 18 13.9317 18.0846 13.7002 18.2309C12.5505 19.0225 10.4209 20.0378 8 20.301M5 20.1936C4.33025 20.0635 3.6594 19.8541 3 19.5478"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M19 20.0003C19.2581 20.0003 19.9557 19.8804 21 19.4551"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
