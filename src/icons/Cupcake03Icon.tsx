export const Cupcake03Icon = ({
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
        d="M12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4ZM12 4C12 3.5 12.4 2.4 14 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6C7.79149 6 5.9019 8.49273 7.24928 10.0811C5.6231 9.73961 4 10.9457 4 12.5341C4 15.4859 8.66165 15.9075 9.27999 13.0367C9.84382 15.6544 14.1562 15.6544 14.72 13.0367C15.3384 15.9075 20 15.4859 20 12.5341C20 10.9457 18.3769 9.73961 16.7507 10.0811C18.0981 8.49273 16.2085 6 14 6"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M6 15L7.17111 19.0989C7.57006 20.4952 7.76954 21.1934 8.30421 21.5967C8.83888 22 9.56499 22 11.0172 22H12.9828C14.435 22 15.1611 22 15.6958 21.5967C16.2305 21.1934 16.4299 20.4952 16.8289 19.0989L18 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
