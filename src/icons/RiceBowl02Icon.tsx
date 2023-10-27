export const RiceBowl02Icon = ({
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
        d="M6 9L6.73072 7.88715C8.5751 5.07821 9.4973 3.67374 10.684 3.23546C11.5341 2.92151 12.4659 2.92151 13.316 3.23546C14.5027 3.67374 15.4249 5.07821 17.2693 7.88714L18 8.99999"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.7256 20.3049C17.6228 21 15.7485 21 12 21C8.25145 21 6.37718 21 5.27439 20.3049C3.97149 19.4837 3.14038 18.0526 3.01914 16.4815C2.99794 16.2067 2.98734 16.0693 2.98478 15.9194C2.98223 15.7694 2.99053 15.5762 3.00713 15.1899C3.04542 14.2991 3.26441 12.6191 4.2748 11C5.11593 12.6336 7.91891 15.1596 10.5006 17.1682M18.7256 20.3049C20.0285 19.4837 20.8596 18.0526 20.9809 16.4815C21.0021 16.2067 21.0127 16.0693 21.0152 15.9194C21.0178 15.7694 21.0095 15.5762 20.9929 15.1899C20.9546 14.2991 20.7356 12.6191 19.7252 11C18.3163 13.0751 13.6993 17.214 10.5006 17.1682M18.7256 20.3049C15.4906 20.2278 12.7105 18.8875 10.5006 17.1682"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 11.5L14.491 11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 7C11.6667 7.33333 12.3 8 13.5 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11L9.5 11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
