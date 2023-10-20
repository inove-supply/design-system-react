export const SwipeRight07Icon = ({
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
        d="M19.5 12V14.6667C19.5 16.84 19.5 17.9267 19.1689 18.7918C18.6627 20.1148 17.6207 21.1601 16.3019 21.6679C15.4395 22 14.3562 22 12.1896 22C11.0534 22 10.4853 22 9.95658 21.8834C9.14995 21.7056 8.40001 21.3294 7.77419 20.7888C7.36398 20.4344 7.02311 19.9785 6.34137 19.0667L3.33738 15.0487C2.8758 14.4314 2.88907 13.5789 3.36965 12.9763C3.99772 12.1888 5.16877 12.1237 5.8797 12.8369L7.5 14.4623V4.5C7.5 3.67157 8.17157 3 9 3C9.82843 3 10.5 3.67157 10.5 4.5V8M10.5 8H11.5C12.6046 8 13.5 8.89543 13.5 10M10.5 8V11M13.5 10V11M13.5 10V9H14.5C15.6046 9 16.5 9.89543 16.5 11M16.5 11V12M16.5 11V10L17.8288 10.2215C18.7932 10.3822 19.5 11.2166 19.5 12.1943V13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 4.5L15 4.5M21 4.5C21 3.79977 19.0057 2.49153 18.5 2M21 4.5C21 5.20023 19.0057 6.50847 18.5 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
