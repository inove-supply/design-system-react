export const Uv02Icon = ({
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
      <path d="M12 3V4.5" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5.98828 6.98926L4.92762 5.9286"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M22 13L20.5 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M3.5 13L2 13" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M19.0703 5.92871L18.0097 6.98937"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.5 16V19C6.5 19.9428 6.5 20.4142 6.79289 20.7071C7.08579 21 7.55719 21 8.5 21V21C9.44281 21 9.91421 21 10.2071 20.7071C10.5 20.4142 10.5 19.9428 10.5 19V16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M13.5 16L15.5 21L17.5 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
