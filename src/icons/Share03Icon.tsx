export const Share03Icon = ({
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
        d="M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9995 6.02529L20 6.02276C16.2634 6.01331 14.3951 6.00859 13.0817 6.95266C12.6452 7.26639 12.2622 7.64845 11.9474 8.08412C11 9.39515 11 11.2634 11 15M20.9995 6.02529C21.0062 5.86266 20.9481 5.69906 20.8251 5.55333C20.0599 4.64686 18.0711 3 18.0711 3M20.9995 6.02529C20.9934 6.17112 20.9352 6.31616 20.8249 6.44681C20.0596 7.3531 18.0711 9 18.0711 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
