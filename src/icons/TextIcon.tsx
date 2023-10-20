export const TextIcon = ({
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
        d="M15 21H9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM11.25 3V21H12.75V3H11.25Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M19 6C19 5.37191 19 5.05787 18.9194 4.78267C18.7518 4.21026 18.3066 3.71716 17.7541 3.49226C17.4886 3.38413 17.1885 3.35347 16.5884 3.29216C15.1695 3.14718 13.3874 3 12 3C10.6126 3 8.83047 3.14718 7.41161 3.29216C6.8115 3.35347 6.51144 3.38413 6.24586 3.49226C5.69344 3.71716 5.24816 4.21026 5.08057 4.78267C5 5.05787 5 5.37191 5 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
