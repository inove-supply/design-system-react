export const CallMissed02Icon = ({
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
        d="M16.7133 13.5937C18.1939 13.9846 19.2229 14.4792 20.1589 15.0848C21.5432 15.9804 22.1367 17.5944 21.9737 19.1517C21.9049 19.8099 21.3744 20.1246 20.7592 19.9544L19.3705 19.57C18.2697 19.2653 17.7193 19.1129 17.3837 18.71C17.0481 18.307 17.0086 17.751 16.9296 16.6391L16.7133 13.5937ZM16.7133 13.5937C13.7164 12.8025 10.2871 12.8016 7.28669 13.5937M7.28669 13.5937C5.80606 13.9846 4.77711 14.4792 3.84113 15.0848C2.45683 15.9804 1.86334 17.5944 2.02628 19.1517C2.09514 19.8099 2.62563 20.1246 3.24078 19.9544L4.62954 19.57C5.73032 19.2653 6.28071 19.1129 6.61631 18.71C6.95191 18.307 6.9914 17.751 7.07038 16.6391L7.28669 13.5937Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M7.5 4.51385L9.87868 6.95844C10.8787 7.98615 11.3787 8.5 12 8.5C12.6213 8.5 13.1213 7.98615 14.1213 6.95844L17 4M10.5 4.20705C9.84324 4.19772 7.66821 3.74589 7.20705 4.20705C6.74589 4.66821 7.19772 6.84324 7.20705 7.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
