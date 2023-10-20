export const WifiLocationIcon = ({
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
        d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 9.47776C9.14883 8.54314 10.5209 8 11.9946 8C13.4729 8 14.849 8.54657 16 9.48661M14.1743 12C13.5182 11.5909 12.7779 11.3607 11.9946 11.3607C11.2152 11.3607 10.4784 11.5886 9.82477 11.9938"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 15H12.0064"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
