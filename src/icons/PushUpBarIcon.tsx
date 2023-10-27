export const PushUpBarIcon = ({
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
        d="M3.5 10V8.5C3.5 6.61438 3.5 5.67157 4.08579 5.08579C4.67157 4.5 5.61438 4.5 7.5 4.5M20.5 10V8.5C20.5 6.61438 20.5 5.67157 19.9142 5.08579C19.3284 4.5 18.3856 4.5 16.5 4.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10H19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10H2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.36774 3.50788H14.6323C15.1691 3.50788 15.9008 3.41222 16.2766 3.88743C16.5 4.16989 16.5 4.58782 16.5 5.42367C16.5 5.94012 16.402 6.1124 15.913 6.31305L14.8339 6.75578C14.4233 6.92423 14.218 7.00846 14.004 6.99933C13.2715 6.96808 12.7454 6.19327 12 6.19327C11.2546 6.19327 10.7285 6.96808 9.996 6.99933C9.78196 7.00846 9.57667 6.92423 9.16611 6.75578L8.08704 6.31305C7.59799 6.1124 7.5 5.94012 7.5 5.42367C7.5 4.58782 7.5 4.16989 7.72338 3.88743C8.0992 3.41222 8.83092 3.50788 9.36774 3.50788Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.36774 14.0002H14.6323C15.1691 14.0002 15.9008 13.9046 16.2766 14.3798C16.5 14.6623 16.5 15.0802 16.5 15.916C16.5 16.4325 16.402 16.6048 15.913 16.8054L14.8339 17.2481C14.4233 17.4166 14.218 17.5008 14.004 17.4917C13.2715 17.4604 12.7454 16.6856 12 16.6856C11.2546 16.6856 10.7285 17.4604 9.996 17.4917C9.78196 17.5008 9.57667 17.4166 9.16611 17.2481L8.08704 16.8054C7.59799 16.6048 7.5 16.4325 7.5 15.916C7.5 15.0802 7.5 14.6623 7.72338 14.3798C8.0992 13.9046 8.83092 14.0002 9.36774 14.0002Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.41421 20.414V18.914C3.41421 17.0284 3.41421 16.0855 4 15.4998C4.58579 14.914 5.52859 14.914 7.41421 14.914M20.4142 20.414V18.914C20.4142 17.0284 20.4142 16.0855 19.8284 15.4998C19.2426 14.914 18.2998 14.914 16.4142 14.914"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 20.5H19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20.5H2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
