export const HandcuffsIcon = ({
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
        d="M2 14.1667C2 17.3883 4.68629 20 8 20C11.3137 20 14 17.3883 14 14.1667C14 12.1873 12.986 10.4382 11.4354 9.38356C11.1261 9.17319 11 8.998 11 8.61161C11 7.80878 11 7.40737 10.8671 7.09003C10.4148 6.01005 9.33985 6 8.31377 6H7.68623C6.66015 6 5.58523 6.01005 5.13291 7.09003C5 7.40737 5 7.80878 5 8.61161C5 8.97939 4.88397 9.16632 4.56458 9.38356C3.01403 10.4382 2 12.1873 2 14.1667Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5101 8.06642C14.8836 8.00151 15.289 8 15.6871 8H16.3146C17.3407 8 18.4156 8.01005 18.868 9.09003C19.0009 9.40737 19.0009 9.80878 19.0009 10.6116C19.0009 10.998 19.127 11.1732 19.4363 11.3836C20.9868 12.4382 22.0009 14.1873 22.0009 16.1667C22.0009 19.3883 19.3146 22 16.0009 22C15.0054 22 14.0666 21.7643 13.2402 21.3472"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="8"
        cy="14"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1152 17.9971C17.166 17.9372 17.9997 17.0661 17.9997 16.0003C17.9997 15.2598 17.5973 14.6133 16.9992 14.2676"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9V6.93331C16 5.28173 16 4.45594 15.5764 3.85855C15.1528 3.26117 14.4253 3.06089 12.9701 2.66032L12.8507 2.62744C10.677 2.02907 9.59021 1.72989 8.83911 2.31943C8.79173 2.35662 8.74584 2.39607 8.70159 2.43766C8 3.09705 8 4.33061 8 6.79775"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
