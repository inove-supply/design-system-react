export const TvSmartIcon = ({
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
        d="M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16.9 15.5C16.9 14.6163 17.6163 13.9 18.5 13.9M13.7 15.5C13.7 12.849 15.849 10.7 18.5 10.7M10.5 15.5C10.5 11.0817 14.0817 7.5 18.5 7.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18 19L19 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 19L5 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
