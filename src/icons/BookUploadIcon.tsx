export const BookUploadIcon = ({
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
        d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M9 8.67347L10.409 7.18691C11.159 6.39564 11.534 6 12 6C12.466 6 12.841 6.39564 13.591 7.18692L15 8.67347M12 6.08723L12 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20.5 17C19.1193 17 18 18.1193 18 19.5C18 20.8807 19.1193 22 20.5 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
