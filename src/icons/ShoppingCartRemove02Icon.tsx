export const ShoppingCartRemove02Icon = ({
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
        d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 6H8M22 6H18.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10.5 3L13.5 6M13.5 6L16.5 9M13.5 6L10.5 9M13.5 6L16.5 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="6" cy="20" r="2" strokeWidth={strokeWidth} />
      <circle cx="17" cy="20" r="2" strokeWidth={strokeWidth} />
      <path d="M8 20L15 20" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
