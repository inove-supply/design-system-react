export const VideoReplayIcon = ({
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
        d="M17.7 21.3354C16.528 21.5 14.9996 21.5 12.95 21.5H11.05C7.01949 21.5 5.00424 21.5 3.75212 20.2479C2.5 18.9958 2.5 16.9805 2.5 12.95V11.05C2.5 7.01949 2.5 5.00424 3.75212 3.75212C5.00424 2.5 7.01949 2.5 11.05 2.5H12.95C16.9805 2.5 18.9958 2.5 20.2479 3.75212C21.5 5.00424 21.5 7.01949 21.5 11.05V12.95C21.5 14.1582 21.5 15.1853 21.4663 16.0651C21.4392 16.7701 21.4257 17.1227 21.1587 17.2544C20.8917 17.3861 20.5931 17.1748 19.9958 16.7522L18.65 15.8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9453 12.3948C14.7686 13.0215 13.9333 13.4644 12.2629 14.3502C10.648 15.2064 9.8406 15.6346 9.18992 15.4625C8.9209 15.3913 8.6758 15.2562 8.47812 15.07C8 14.6198 8 13.7465 8 12C8 10.2535 8 9.38018 8.47812 8.92995C8.6758 8.74381 8.9209 8.60868 9.18992 8.53753C9.8406 8.36544 10.648 8.79357 12.2629 9.64983C13.9333 10.5356 14.7686 10.9785 14.9453 11.6052C15.0182 11.8639 15.0182 12.1361 14.9453 12.3948Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
