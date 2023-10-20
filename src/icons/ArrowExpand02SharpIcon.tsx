export const ArrowExpand02SharpIcon = ({
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
        d="M13.4961 13.502L20.4961 20.502"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.49609 3.50195L10.4961 10.502"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3.18589L3.95048 3.01621C3.48834 2.9905 3.25726 2.97764 3.1172 3.11922C2.97714 3.2608 2.99044 3.4938 3.01703 3.95981L3.19049 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8126 17L20.9832 20.0341C21.0097 20.504 21.0229 20.739 20.8798 20.8813C20.7368 21.0236 20.5013 21.0098 20.0303 20.9821L17 20.8042"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
