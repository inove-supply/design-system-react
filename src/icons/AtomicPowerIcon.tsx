export const AtomicPowerIcon = ({
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
        d="M21.6256 8.5C22.2803 6.23358 22.0965 4.26617 20.9152 3.08484C18.416 0.585663 12.3985 2.55113 7.47484 7.47484C6.94885 8.00082 6.45663 8.53929 6 9.08462M18 14.9154C17.5434 15.4607 17.0511 15.9992 16.5252 16.5252C11.6015 21.4489 5.58402 23.4143 3.08484 20.9152C1.81744 19.6478 1.69825 17.4755 2.5308 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 9L10.8043 11.3004C10.5668 11.6084 10.4481 11.7623 10.5217 11.8812C10.5952 12 10.8093 12 11.2375 12H12.7625C13.1907 12 13.4048 12 13.4783 12.1188C13.5519 12.2377 13.4332 12.3916 13.1957 12.6996L11.2375 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 18.3399C8.81272 17.7904 8.13398 17.1843 7.47484 16.5252C2.55113 11.6015 0.585661 5.58402 3.08484 3.08484C4.35224 1.81744 6.52446 1.69825 9 2.5308M14.5 21.2897C17.1813 22.3126 19.5631 22.2672 20.9152 20.9152C23.4143 18.416 21.4489 12.3985 16.5252 7.47484C15.866 6.8157 15.1873 6.20957 14.5 5.66008"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
