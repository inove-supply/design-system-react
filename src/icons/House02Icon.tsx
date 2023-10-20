export const House02Icon = ({
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
        d="M2 10H8.13008C8.36879 10 8.59962 9.90452 8.78087 9.7308L11.3492 7.2692C11.7237 6.91027 12.2763 6.91027 12.6508 7.2692L15.2191 9.7308C15.4004 9.90452 15.6312 10 15.8699 10H22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10L4.961 5.42432C5.82259 3.41397 6.45038 3 8.63758 3H15.3624C17.5496 3 18.1774 3.41397 19.039 5.42432L21 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10V21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 10V21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21L22 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.008 11L11.999 11" strokeWidth={strokeWidth} />
      <path
        d="M9.5 21V16.5C9.5 15.6716 10.1716 15 11 15H13C13.8284 15 14.5 15.6716 14.5 16.5V21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14H7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14L18 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
