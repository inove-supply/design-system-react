export const Knife01Icon = ({
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
        d="M18.3865 8.11621L18.3955 8.11621"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M15.1024 16.7446C17.8895 13.7178 19.8287 11.3284 21.04 9.70091C21.703 8.81007 22.0345 8.36466 21.9972 7.75756C21.9193 6.48963 18.7253 3 17.3204 3C16.6774 3 16.16 3.53734 15.1252 4.61201L2.54984 17.6718C1.81672 18.4331 1.81672 19.6675 2.54984 20.4289C3.381 21.2921 4.76287 21.1587 5.42662 20.1512L7.71648 16.6756C8.63465 15.282 9.29389 15.2741 10.3945 16.4171C11.0597 17.108 11.9005 18.395 12.9477 18.3828C13.6008 18.3753 14.1013 17.8317 15.1024 16.7446Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
