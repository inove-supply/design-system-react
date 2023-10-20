export const FavouriteSquareIcon = ({
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
        d="M7.76872 7.49708C9.10954 6.67461 10.2798 7.00606 10.9828 7.53401C11.2711 7.75048 11.4152 7.85871 11.5 7.85871C11.5848 7.85871 11.7289 7.75048 12.0172 7.53401C12.7202 7.00606 13.8905 6.67461 15.2313 7.49708C16.991 8.57647 17.3891 12.1374 13.3302 15.1417C12.5571 15.7139 12.1706 16 11.5 16C10.8294 16 10.4429 15.7139 9.66976 15.1417C5.61086 12.1374 6.00903 8.57647 7.76872 7.49708Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}
