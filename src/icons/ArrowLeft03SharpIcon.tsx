export const ArrowLeft03SharpIcon = ({
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
      <path d="M4 6L4 18" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M9 12L19.9995 12.0002"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8L8.70711 11.2929C8.37377 11.6262 8.20711 11.7929 8.20711 12C8.20711 12.2071 8.37377 12.3738 8.70711 12.7071L12 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
