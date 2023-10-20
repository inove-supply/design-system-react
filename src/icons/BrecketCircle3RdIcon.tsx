export const BrecketCircle3RdIcon = ({
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
        d="M14 16C14.9241 16 15.6733 15.4883 15.6733 14.8571C15.6733 13.6365 15.6869 13.1336 16.755 12.4041C17.0817 12.1809 17.0817 11.8191 16.755 11.5959C15.6869 10.8664 15.6733 10.3635 15.6733 9.14286C15.6733 8.51167 14.9241 8 14 8M10 16C9.07588 16 8.32673 15.4883 8.32673 14.8571C8.32673 13.6365 8.31312 13.1336 7.24505 12.4041C6.91832 12.1809 6.91832 11.8191 7.24504 11.5959C8.31312 10.8664 8.32673 10.3635 8.32673 9.14286C8.32673 8.51167 9.07588 8 10 8"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
    </svg>
  )
}
