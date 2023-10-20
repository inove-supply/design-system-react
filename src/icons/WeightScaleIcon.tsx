export const WeightScaleIcon = ({
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
        d="M19 15V18.8889C19 21.1138 18.2644 22 15.8889 22H8.11111C5.88617 22 5 21.2644 5 18.8889V15C5 11.134 8.13401 8 12 8C15.866 8 19 11.134 19 15Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16 15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M12 17L13 15" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M16.3124 5H7.68756C6.80396 5 6.36216 5 5.97341 4.84796C5.84428 4.79746 5.72076 4.73499 5.60466 4.66148C5.25513 4.44018 5.01007 4.09284 4.51994 3.39815C4.13795 2.85675 3.94696 2.58604 4.0128 2.3647C4.03364 2.29467 4.07039 2.22977 4.1205 2.17455C4.27889 2 4.6232 2 5.31184 2H18.6882C19.3768 2 19.7211 2 19.8795 2.17455C19.9296 2.22977 19.9664 2.29467 19.9872 2.3647C20.053 2.58604 19.862 2.85675 19.4801 3.39815C18.9899 4.09283 18.7449 4.44019 18.3953 4.66148C18.2792 4.73499 18.1557 4.79746 18.0266 4.84796C17.6378 5 17.196 5 16.3124 5Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14 8V5M10 8V5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
