export const ArrowMoveRightDownSharpIcon = ({
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
        d="M20 5H19.0667C12.907 5 9.82714 5 7.91357 7.12067C6 9.24133 6 12.6545 6 19.4808V21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 8L20.2929 5.70711C20.6262 5.37377 20.7929 5.20711 20.7929 5C20.7929 4.79289 20.6262 4.62623 20.2929 4.29289L18 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 19L5.29289 21.2929C5.62623 21.6262 5.79289 21.7929 6 21.7929C6.20711 21.7929 6.37377 21.6262 6.70711 21.2929L9 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
