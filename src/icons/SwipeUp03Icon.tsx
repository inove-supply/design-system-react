export const SwipeUp03Icon = ({
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
        d="M5.87124 12.671L8.00514 14.5V4.75C8.00514 3.7835 8.78864 3 9.75514 3C10.7216 3 11.5051 3.7835 11.5051 4.75V10L14.493 10.4776C16.4216 10.7669 17.386 10.9115 18.0652 11.3184C19.1872 11.9906 20 13 20 14.4736C20 15.5 19.7463 16.1886 19.1296 18.0387C18.7383 19.2127 18.5426 19.7996 18.2236 20.2643C17.6983 21.0293 16.9233 21.5878 16.0315 21.8442C15.4898 22 14.8711 22 13.6336 22H12.5847C10.9395 22 10.1169 22 9.38462 21.6981C9.25329 21.644 9.12494 21.5829 9.00012 21.5151C8.30405 21.1371 7.78533 20.4987 6.74791 19.2219L3.38941 15.0883C2.87331 14.4531 2.86987 13.5441 3.38114 12.905C3.99565 12.1369 5.12437 12.0308 5.87124 12.671Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 2L18.5 8M18.5 2C17.7998 2 16.4915 3.9943 16 4.5M18.5 2C19.2002 2 20.5085 3.9943 21 4.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
