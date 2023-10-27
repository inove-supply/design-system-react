export const KeyframesDoubleIcon = ({
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
        d="M14.002 4.5C14.3775 4.16667 14.6982 4 15.068 4C15.7661 4 16.2896 4.59409 17.3365 5.78228L19.9113 8.70448C21.3036 10.2847 21.9998 11.0747 21.9998 12C21.9998 12.9253 21.3036 13.7153 19.9113 15.2955L17.3365 18.2177C16.2896 19.4059 15.7661 20 15.068 20C14.6982 20 14.3775 19.8333 14.002 19.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M6.70914 5.78228C7.76637 4.59409 8.29499 4 9 4C9.70501 4 10.2336 4.59409 11.2909 5.78228L13.891 8.70448C15.297 10.2847 16 11.0747 16 12C16 12.9253 15.297 13.7153 13.891 15.2955L11.2909 18.2177C10.2336 19.4059 9.70501 20 9 20C8.29499 20 7.76637 19.4059 6.70914 18.2177L4.10902 15.2955C2.70301 13.7153 2 12.9253 2 12C2 11.0747 2.70301 10.2847 4.10902 8.70448L6.70914 5.78228Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
