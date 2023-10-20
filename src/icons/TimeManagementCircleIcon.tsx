export const TimeManagementCircleIcon = ({
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
        d="M7 19.5C7 20.8807 5.88071 22 4.5 22C3.11929 22 2 20.8807 2 19.5C2 18.1193 3.11929 17 4.5 17C5.88071 17 7 18.1193 7 19.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 19.5C22 20.8807 20.8807 22 19.5 22C18.1193 22 17 20.8807 17 19.5C17 18.1193 18.1193 17 19.5 17C20.8807 17 22 18.1193 22 19.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M19.5 17C19.3321 14.547 18.3951 14 15.227 14H8.77296C5.60493 14 4.66788 14.547 4.5 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6.5L13 5M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
