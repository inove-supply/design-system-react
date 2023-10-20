export const Tornado02Icon = ({
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
        d="M9.01654 6.15879C10.9944 4.77262 17.9171 3.55944 18.906 6.15879C20.3862 10.0497 3.87743 12.3805 5.06077 6.15849C5.55508 3.55944 10.5002 2 12.9725 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M18 11.1934C15.423 13.0706 8.5771 13.8244 6 11.7816"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.0219 21.6941C13.0436 21.8816 12.0077 21.989 11 21.9995"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7 15.166C9.07731 16.0444 12.3835 15.9574 15 15.2812"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.03906 18.5039C9.49304 18.8598 11.2867 18.8854 12.9988 18.6635"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
