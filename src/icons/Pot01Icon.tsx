export const Pot01Icon = ({
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
        d="M2 9H22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M4 9L4.50393 14.5432C4.73952 17.1348 4.85732 18.4305 5.71663 19.2153C6.57594 20 7.87705 20 10.4793 20H13.5207C16.1229 20 17.4241 20 18.2834 19.2153C19.1427 18.4305 19.2605 17.1348 19.4961 14.5432L20 9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M4 6H20M9 6L9.62283 3.94291C9.85063 3.37343 10.4022 3 11.0155 3H12.9845C13.5978 3 14.1494 3.37343 14.3772 3.94291L15 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
