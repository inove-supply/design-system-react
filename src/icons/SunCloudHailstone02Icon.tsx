export const SunCloudHailstone02Icon = ({
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
        d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M17.4776 11.0448C17.485 11.0448 17.4925 11.0448 17.5 11.0448C19.9853 11.0448 22 13.0745 22 15.5784C22 16.921 21.5 18 21 18.5M17.4776 11.0448C17.4924 10.8789 17.5 10.7109 17.5 10.541C17.5 7.48081 15.0376 5 12 5C9.12324 5 6.76233 7.2251 6.52042 10.0602M17.4776 11.0448C17.3753 12.1877 16.9286 13.2306 16.2428 14.0672M6.52042 10.0602C3.98398 10.3034 2 12.4556 2 15.0746C2 16.4838 2.57432 17.617 3.5 18.5M6.52042 10.0602C6.67826 10.0451 6.83823 10.0373 7 10.0373C8.12582 10.0373 9.16474 10.4122 10.0005 11.0448"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0017 15L12.0062 15.0078M15.0005 17.9967L15.005 18.0044M9.00278 17.9967L9.00727 18.0044M17.9994 20.9933L18.0039 21.0011M6.00391 20.9933L6.0084 21.0011M12.0017 21.9922L12.0062 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
