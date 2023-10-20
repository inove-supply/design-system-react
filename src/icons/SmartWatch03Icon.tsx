export const SmartWatch03Icon = ({
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
        d="M4.5 12C4.5 8.71252 4.5 7.06878 5.40796 5.96243C5.57418 5.75989 5.75989 5.57418 5.96243 5.40796C7.06878 4.5 8.71252 4.5 12 4.5C15.2875 4.5 16.9312 4.5 18.0376 5.40796C18.2401 5.57418 18.4258 5.75989 18.592 5.96243C19.5 7.06878 19.5 8.71252 19.5 12C19.5 15.2875 19.5 16.9312 18.592 18.0376C18.4258 18.2401 18.2401 18.4258 18.0376 18.592C16.9312 19.5 15.2875 19.5 12 19.5C8.71252 19.5 7.06878 19.5 5.96243 18.592C5.75989 18.4258 5.57418 18.2401 5.40796 18.0376C4.5 16.9312 4.5 15.2875 4.5 12Z"
        strokeWidth={strokeWidth}
      />
      <path d="M9 22H15" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M9 2H15" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M9.3881 9.33138C10.3267 8.78308 11.1459 9.00404 11.638 9.356C11.8398 9.50032 11.9406 9.57248 12 9.57248C12.0594 9.57248 12.1602 9.50032 12.362 9.356C12.8541 9.00404 13.6733 8.78308 14.6119 9.33138C15.8437 10.051 16.1224 12.425 13.2812 14.4278C12.74 14.8093 12.4694 15 12 15C11.5306 15 11.26 14.8093 10.7188 14.4278C7.8776 12.425 8.15632 10.051 9.3881 9.33138Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
