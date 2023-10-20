export const Backward01Icon = ({
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
        d="M4.06492 12.6258C4.31931 13.8374 5.67295 14.7077 8.38024 16.4481C11.3247 18.3411 12.797 19.2876 13.9895 18.9229C14.3934 18.7994 14.7654 18.5823 15.0777 18.2876C16 17.4178 16 15.6118 16 12C16 8.38816 16 6.58224 15.0777 5.71235C14.7654 5.41773 14.3934 5.20057 13.9895 5.07707C12.797 4.71243 11.3247 5.6589 8.38024 7.55186C5.67295 9.29233 4.31931 10.1626 4.06492 11.3742C3.97836 11.7865 3.97836 12.2135 4.06492 12.6258Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path d="M20 5V19" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
