export const AlphabetArabicIcon = ({
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
      <path d="M9 4L9 11" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M13 14H20.743C21.4486 14 21.8015 14 21.9479 13.7401C22.0944 13.4803 21.9203 13.2157 21.5721 12.6867C20.4517 10.9841 18.7844 10 17.117 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13 4V17.6667C13 18.7666 13 19.3166 12.7071 19.6583C12.4142 20 11.9428 20 11 20H10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5 4V17.6667C5 18.7666 5 19.3166 4.70711 19.6583C4.41421 20 3.94281 20 3 20H2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
