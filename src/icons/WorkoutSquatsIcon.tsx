export const WorkoutSquatsIcon = ({
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
        d="M13 4.5C13 5.32843 12.3284 6 11.5 6C10.6716 6 10 5.32843 10 4.5C10 3.67157 10.6716 3 11.5 3C12.3284 3 13 3.67157 13 4.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M10.9477 21L12.0786 17.5908C12.482 16.3747 12.6837 15.7667 12.3821 15.3462C12.0806 14.9258 11.4427 14.9258 10.167 14.9258H8.9329M18 8.34546L16.2639 9.34233C15.3862 9.84631 14.9473 10.0983 14.4623 10.1209C13.9774 10.1434 13.5172 9.93325 12.5969 9.5129L11.8137 9.15516M8.9329 14.9258H7.92524C6.97669 14.9258 6.50242 14.9258 6.20005 14.5526C5.89768 14.1794 5.98421 13.7596 6.15728 12.9201C6.44708 11.5144 7.02913 9.76698 8.09216 8.57871C8.38558 8.25073 8.53228 8.08674 8.85504 8.01898C9.17781 7.95122 9.43598 8.06914 9.95232 8.30498L11.8137 9.15516M8.9329 14.9258C9.1743 13.6098 10.0884 10.6132 11.8137 9.15516"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
