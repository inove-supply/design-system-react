export const Underpants03Icon = ({
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
        d="M14 18.5C14 15.8333 15.9 10 21.5 10M10 18.5C10 15.8333 8.1 10 2.5 10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 8H13.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8V9.56091C2 9.86218 2.0252 10.134 2.10806 10.4238C2.93715 13.3235 5.92032 17.6665 9.52749 18.8626C9.85085 18.9698 10.1521 19 10.4924 19H13.5076C13.8479 19 14.1492 18.9698 14.4725 18.8626C18.0797 17.6665 21.0629 13.3235 21.8919 10.4238C21.9748 10.134 22 9.86218 22 9.56091V8C22 6.58579 22 5.87868 21.5607 5.43934C21.1213 5 20.4142 5 19 5H5C3.58579 5 2.87868 5 2.43934 5.43934C2 5.87868 2 6.58579 2 8Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
