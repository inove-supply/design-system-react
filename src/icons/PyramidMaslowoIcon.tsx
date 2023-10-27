export const PyramidMaslowoIcon = ({
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
        d="M7.75024 7.56659C9.66926 4.5222 10.6288 3 12 3C13.3712 3 14.3307 4.52219 16.2498 7.56658L18.4941 11.1271C21.2362 15.4772 22.6072 17.6522 21.7426 19.3261C20.878 21 18.3834 21 13.3944 21H10.6056C5.61655 21 3.12205 21 2.25742 19.3261C1.3928 17.6522 2.76382 15.4772 5.50587 11.1271L7.75024 7.56659Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M3.5 15H9M20.5 15H15M7 9H17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9L12 21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
