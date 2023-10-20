export const Coins02Icon = ({
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
        d="M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13.1669 20.9689C12.063 21.6239 10.7742 21.9999 9.3975 21.9999C5.31197 21.9999 2 18.688 2 14.6024C2 13.2258 2.37607 11.9369 3.03107 10.833"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
