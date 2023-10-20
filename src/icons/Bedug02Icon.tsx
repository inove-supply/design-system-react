export const Bedug02Icon = ({
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
        d="M22 10C22 6.13401 20.5 4 18 3C16.5342 2.37764 14.6088 2 12.5 2C10.3912 2 8.46579 2.37764 7 3"
        strokeWidth={strokeWidth}
      />
      <path
        d="M7 3C8.46579 2.37764 10.3912 2 12.5 2C14.6088 2 16.5342 2.37764 18 3C20.5 4 22 6.13401 22 10C22 13.866 20.5 16 18 17C16.5342 17.6224 14.6088 18 12.5 18C10.3912 18 8.46579 17.6224 7 17"
        strokeWidth={strokeWidth}
      />
      <path d="M9 22L18 13" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M2 15L7 10" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M3 10C3 6.13401 4.79086 3 7 3C9.20914 3 11 6.13401 11 10C11 13.866 9.20914 17 7 17C5.51321 17 4.21588 15.5804 3.52643 13.4736"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.99981 10H7.00879"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 22L16 20" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
