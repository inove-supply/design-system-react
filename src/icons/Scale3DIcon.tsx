export const Scale3DIcon = ({
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
      <path d="M12 13L17 17.5M12 13L7 17.5M12 13V8" strokeWidth={strokeWidth} />
      <path
        d="M18.1915 16.4456C18.7081 16.1485 18.9664 16 19.25 16C19.5336 16 19.7919 16.1485 20.3085 16.4456L20.9415 16.8097C21.4581 17.1068 21.7164 17.2553 21.8582 17.5C22 17.7447 22 18.0418 22 18.6359V19.3641C22 19.9582 22 20.2553 21.8582 20.5C21.7164 20.7447 21.4581 20.8932 20.9415 21.1903L20.3085 21.5544C19.7919 21.8515 19.5336 22 19.25 22C18.9664 22 18.7081 21.8515 18.1915 21.5544L17.5585 21.1903C17.0419 20.8932 16.7836 20.7447 16.6418 20.5C16.5 20.2553 16.5 19.9582 16.5 19.3641V18.6359C16.5 18.0418 16.5 17.7447 16.6418 17.5C16.7836 17.2553 17.0419 17.1068 17.5585 16.8097L18.1915 16.4456Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M3.69152 16.4456C4.2081 16.1485 4.46638 16 4.75 16C5.03362 16 5.2919 16.1485 5.80848 16.4456L6.44152 16.8097C6.9581 17.1068 7.21638 17.2553 7.35819 17.5C7.5 17.7447 7.5 18.0418 7.5 18.6359V19.3641C7.5 19.9582 7.5 20.2553 7.35819 20.5C7.21638 20.7447 6.9581 20.8932 6.44152 21.1903L5.80848 21.5544C5.2919 21.8515 5.03362 22 4.75 22C4.46638 22 4.2081 21.8515 3.69152 21.5544L3.05848 21.1903C2.5419 20.8932 2.28362 20.7447 2.14181 20.5C2 20.2553 2 19.9582 2 19.3641V18.6359C2 18.0418 2 17.7447 2.14181 17.5C2.28362 17.2553 2.5419 17.1068 3.05848 16.8097L3.69152 16.4456Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M10.9415 2.44563C11.4581 2.14854 11.7164 2 12 2C12.2836 2 12.5419 2.14854 13.0585 2.44563L13.6915 2.8097C14.2081 3.10679 14.4664 3.25533 14.6082 3.5C14.75 3.74467 14.75 4.04175 14.75 4.63593V5.36407C14.75 5.95825 14.75 6.25533 14.6082 6.5C14.4664 6.74467 14.2081 6.89321 13.6915 7.1903L13.0585 7.55437C12.5419 7.85146 12.2836 8 12 8C11.7164 8 11.4581 7.85146 10.9415 7.55437L10.3085 7.1903C9.7919 6.89321 9.53362 6.74467 9.39181 6.5C9.25 6.25533 9.25 5.95825 9.25 5.36407V4.63593C9.25 4.04175 9.25 3.74467 9.39181 3.5C9.53362 3.25533 9.7919 3.10679 10.3085 2.8097L10.9415 2.44563Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
