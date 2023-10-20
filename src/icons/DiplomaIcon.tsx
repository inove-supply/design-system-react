export const DiplomaIcon = ({
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
        d="M18.5 17.838C19.5305 17.6867 20.2627 17.3941 20.8284 16.8284C22 15.6569 22 13.7712 22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17157 16.8284C3.97975 17.6366 5.1277 17.8873 7 17.965"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M17 7L7 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 14.5C14.5 15.8807 13.3807 17 12 17C10.6193 17 9.5 15.8807 9.5 14.5C9.5 13.1193 10.6193 12 12 12C13.3807 12 14.5 13.1193 14.5 14.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9.5 14.5C9.5 18.5659 11.2222 20.8706 12 22L13.5 19L15.25 20L17 21C16.2653 20.2888 15.5058 18.0471 15.5058 18.0471"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
