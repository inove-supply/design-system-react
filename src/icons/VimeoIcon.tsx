export const VimeoIcon = ({
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
        d="M21.3459 4.65406C19.0372 2.82124 15.4614 5.64316 14.5961 7.12694C15.8974 7.43176 18.5 7.54313 16 12.0276C15 13.6885 12.7 15.8145 11.5 11.0311C10 5.05175 10 0.567257 2 7.54313C2.47556 8.4911 3.76645 8.5883 4.74116 8.17029C5.62781 7.79005 6.54267 7.94136 7 9.53652C8 13.0245 8.5 19.9866 12 19.9866C15.6345 20.4812 24.461 7.12711 21.3459 4.65406Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
