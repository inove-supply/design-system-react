export const Sushi03Icon = ({
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
        d="M5 9.5C5 10.8807 7.01472 12 9.5 12C11.9853 12 14 10.8807 14 9.5C14 8.11929 11.9853 7 9.5 7C7.01472 7 5 8.11929 5 9.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M14 16.6471C14 17.9466 11.9853 19 9.5 19C7.01472 19 5 17.9466 5 16.6471V9.5M14 9.5V13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.5L9.49102 9.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 18L22 11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14L5 12.65M22 5L14 8.6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
