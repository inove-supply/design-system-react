export const CapRoundIcon = ({
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
        d="M21 5L10 5C6.13401 5 3 8.13401 3 12C3 15.866 6.13401 19 10 19L21 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12Z"
        strokeWidth={strokeWidth}
      />
      <path d="M13 12L21 12" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
