export const Coffee01Icon = ({
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
        d="M5 7L6.7602 17.4048C7.06616 19.2134 7.21914 20.1177 7.76007 20.7417C9.21438 22.4194 14.7856 22.4194 16.2399 20.7417C16.7809 20.1177 16.9338 19.2134 17.2398 17.4048L19 7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M5 7L5.74278 5.2876C6.35168 3.88385 6.65613 3.18197 7.29101 2.7856C8.88049 1.79324 14.9452 1.68444 16.709 2.7856C17.3439 3.18197 17.6483 3.88385 18.2572 5.2876L19 7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M4 7H20"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <ellipse
        cx="12"
        cy="14.5"
        rx="2"
        ry="2.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
