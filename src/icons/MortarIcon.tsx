export const MortarIcon = ({
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
        d="M4.96256 12H19.0374C20.0144 12 20.5028 12 20.8047 12.3753C21.1065 12.7506 21.0135 13.1617 20.8276 13.984C20.2864 16.3763 18.7876 18.408 16.7527 19.6599C16.3614 19.9006 16.1944 20.3975 16.4056 20.8042C16.689 21.3497 16.2909 22 15.6735 22H8.32647C7.70915 22 7.31104 21.3497 7.5944 20.8042C7.80561 20.3975 7.63863 19.9006 7.24729 19.6599C5.21237 18.408 3.71356 16.3763 3.17245 13.984C2.98645 13.1617 2.89345 12.7506 3.1953 12.3753C3.49715 12 3.98562 12 4.96256 12Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M17.4588 12L19.0095 8.28104C19.1841 7.86217 19.6148 7.65205 20.047 7.57994C20.4208 7.51758 20.7187 7.3415 20.8785 7.05278C21.2753 6.33534 20.6683 5.1941 19.5226 4.50374C18.3769 3.81338 17.1264 3.83534 16.7295 4.55278C16.5698 4.8415 16.5726 5.19885 16.7078 5.56783C16.864 5.99454 16.905 6.48886 16.6448 6.85615L13 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6.50185 5.50185L10 9M8.60074 3.40297C10.1463 4.94854 9.75993 6.44156 8.60074 7.60074C7.44156 8.75993 5.94854 9.14632 4.40297 7.60074C2.85739 6.05516 3.00371 2.00371 3.00371 2.00371C3.00371 2.00371 7.05516 1.85739 8.60074 3.40297Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
