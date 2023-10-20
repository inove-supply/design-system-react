export const Pacman02Icon = ({
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
        d="M20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10V20.4C4 21.2837 4.71634 22 5.6 22C6.48366 22 7.2 21.2837 7.2 20.4V19.6C7.2 18.7163 7.91634 18 8.8 18C9.68366 18 10.4 18.7163 10.4 19.6V20.4C10.4 21.2837 11.1163 22 12 22C12.8837 22 13.6 21.2837 13.6 20.4V19.6C13.6 18.7163 14.3163 18 15.2 18C16.0837 18 16.8 18.7163 16.8 19.6V20.4C16.8 21.2837 17.5163 22 18.4 22C19.2837 22 20 21.2837 20 20.4V10Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9.00896 10H9M15 10H14.991"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
