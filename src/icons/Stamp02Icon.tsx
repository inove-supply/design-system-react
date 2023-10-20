export const Stamp02Icon = ({
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
        d="M9.99128 15C9.99128 14.0015 9.90819 11.6348 8.15796 8.26951C7.38157 6.77671 7.39203 5.2142 7.6806 3.98372C7.77486 3.58177 8.01266 3.37651 8.33553 3.15508C8.70845 2.89932 8.89491 2.77143 9.08803 2.66275C9.70688 2.31447 10.393 2.10186 11.1006 2.03909C11.6881 1.98697 12.3119 1.98697 12.8994 2.03909C13.607 2.10186 14.2931 2.31447 14.912 2.66275C15.1051 2.77143 15.2916 2.89932 15.6645 3.15508C15.9873 3.37651 16.2251 3.58177 16.3194 3.98372C16.608 5.2142 16.6184 6.77671 15.842 8.26951C14.0918 11.6348 14.0087 14.0015 14.0087 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.0883 17.7351C7.52832 16.4151 7.74832 15.755 8.2721 15.3775C8.79587 15 9.49159 15 10.883 15H13.117C14.5084 15 15.2041 15 15.7279 15.3775C16.2517 15.755 16.4717 16.4151 16.9117 17.7351L17 18H7L7.0883 17.7351Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4.25262 20.1823C4.46592 19.645 4.57257 19.3764 4.72208 19.1551C5.10369 18.5902 5.70937 18.1937 6.40325 18.0545C6.67511 18 6.97885 18 7.58633 18L16.4137 18C17.0212 18 17.3249 18 17.5967 18.0545C18.2906 18.1937 18.8963 18.5902 19.2779 19.1551C19.4274 19.3764 19.5341 19.645 19.7474 20.1823C19.9125 20.5983 19.9951 20.8063 19.9996 20.9744C20.0115 21.4099 19.7234 21.8025 19.2876 21.945C19.1194 22 18.8842 22 18.4139 22H5.5861C5.11579 22 4.88064 22 4.71244 21.945C4.27658 21.8025 3.98853 21.4099 4.00035 20.9744C4.00491 20.8063 4.08748 20.5983 4.25262 20.1823Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
