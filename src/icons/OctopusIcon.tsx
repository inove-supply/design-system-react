export const OctopusIcon = ({
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
        d="M16.0925 13C17.2309 12.0981 18 10.8493 18 9.46931C18 6.71919 14.9455 2 12 2C9.05448 2 6 6.71919 6 9.46931C6 10.8493 6.76907 12.0981 7.90754 13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M14.0117 10L14.0027 10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0117 10L10.0027 10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 14C13.0164 18 13.8997 19.7143 17 22M10.5 14C10.9836 18 10.1002 19.7143 7 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 14C14.5 16 17.0791 18.5 19.0475 18.5C21.0158 18.5 22 17.2688 22 15.75C22 14.2312 20.8984 13 19.5396 13M10.5 14C9.5 16 6.92082 18.5 4.95249 18.5C2.98416 18.5 2 17.2688 2 15.75C2 14.2312 3.10156 13 4.46041 13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
