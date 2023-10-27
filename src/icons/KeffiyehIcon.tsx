export const KeffiyehIcon = ({
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
        d="M6 5H18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M17.62 7.83371C16.8666 4.40421 14.9933 2 12 2C9.00669 2 7.13336 4.40421 6.38003 7.83371C5.86608 10.1734 4.74087 12.3564 3.55134 14.4304C3.22035 15.0076 3 15.5955 3 16.1316C3 17.1729 3.79818 18.2142 4.57112 19.3941C5.65943 21.0553 6.20358 21.8859 6.56891 21.9853C6.93423 22.0846 7.7456 21.6785 9.36831 20.8665C10.2012 20.4496 11.0848 20.1692 12 20.1692C12.9152 20.1692 13.7988 20.4496 14.6317 20.8665C16.2544 21.6785 17.0658 22.0846 17.4311 21.9853C17.7964 21.8859 18.3406 21.0553 19.4289 19.3941C20.2018 18.2142 21 17.1729 21 16.1316C21 15.5955 20.7796 15.0076 20.4487 14.4304C19.2591 12.3564 18.1339 10.1734 17.62 7.83371Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M6.5 22C7.01593 20.596 7.57692 17.3641 6.96996 15.8262C6.53677 14.7286 7.07434 13.631 7.78352 12.7813C8.23628 12.2389 8.58177 11.6075 8.768 10.9225C9.29923 8.96859 10.3923 8 12 8C13.6077 8 14.7008 8.96859 15.232 10.9225C15.4182 11.6075 15.7637 12.2389 16.2165 12.7813C16.9257 13.631 17.4632 14.7286 17.03 15.8262C16.4231 17.3641 16.9841 20.596 17.5 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
