export const LongSleeveShirtIcon = ({
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
        d="M5.5 7C5.82861 7.98583 6.21894 8.98374 6.3592 10.0191C6.45996 10.7628 6.42039 11.5168 6.34125 13.0248L6 19.5267C6 20.2323 6.11985 20.6092 6.75491 20.9496C9.3676 22.3501 14.6324 22.3501 17.2451 20.9496C17.8802 20.6092 18 20.2323 18 19.5267L17.6588 13.0248C17.5796 11.5168 17.54 10.7628 17.6408 10.0191C17.7811 8.98374 18.1714 7.98583 18.5 7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.97108 18.5133C5.5045 18.7457 5.03918 19.0498 4.49657 18.9919C3.58003 18.8942 3.36671 18.4513 3.18021 17.343L2.09958 10.9212C1.95508 10.0625 1.9554 10.0558 2.18333 9.21526L2.72102 7.23229C3.085 5.88992 3.267 5.21874 3.70337 4.70677C4.13974 4.1948 4.77503 3.9071 6.04562 3.33172L8.59018 2.17941C8.98484 2.00069 8.98802 2 9.42155 2H14.5785C15.012 2 15.0152 2.00069 15.4098 2.17941L17.9544 3.33172C19.225 3.9071 19.8603 4.1948 20.2966 4.70677C20.733 5.21874 20.915 5.88992 21.279 7.23229L21.8167 9.21526C22.0446 10.0558 22.0449 10.0625 21.9004 10.9212L20.8198 17.343C20.633 18.4533 20.4186 18.8949 19.5002 18.9921C18.9331 19.0521 18.519 18.759 18.0257 18.5133"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 2.5C9 2.5 9.90752 4.41477 10.6606 4.81358C11.0467 5.01803 11.53 4.99957 12 4.99957C12.47 4.99957 12.9533 5.01803 13.3394 4.81358C14.0925 4.41477 15 2.5 15 2.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
