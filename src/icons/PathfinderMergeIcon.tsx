export const PathfinderMergeIcon = ({
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
        d="M3.31779 14.2364C4.2753 15 5.68353 15 8.5 15C8.77606 15 9 15.2239 9 15.5C9 18.3165 9 19.7247 9.76359 20.6822C9.92699 20.8871 10.1129 21.073 10.3178 21.2364C11.2753 22 12.6835 22 15.5 22C18.3165 22 19.7247 22 20.6822 21.2364C20.8871 21.073 21.073 20.8871 21.2364 20.6822C22 19.7247 22 18.3165 22 15.5C22 12.6835 22 11.2753 21.2364 10.3178C21.073 10.1129 20.8871 9.92699 20.6822 9.76359C19.7247 9 18.3165 9 15.5 9C15.224 9 15 8.77597 15 8.5C15 5.68353 15 4.2753 14.2364 3.31779C14.073 3.11289 13.8871 2.92699 13.6822 2.76359C12.7247 2 11.3165 2 8.5 2C5.68353 2 4.2753 2 3.31779 2.76359C3.11289 2.92699 2.92699 3.11289 2.76359 3.31779C2 4.2753 2 5.68353 2 8.5C2 11.3165 2 12.7247 2.76359 13.6822C2.92699 13.8871 3.11289 14.073 3.31779 14.2364Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
