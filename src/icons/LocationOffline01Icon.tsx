export const LocationOffline01Icon = ({
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
        d="M17.5 17.6461C16.2676 18.9628 14.8763 20.1884 13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C4.02067 6.59797 4.46666 5.63512 5 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7 3.48631C8.46914 2.53477 10.213 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C21.6603 10.5221 20.8796 13.1643 19.2612 15.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M9 9C8.66525 9.53668 8.5 10.3209 8.5 11C8.5 12.933 10.067 14.5 12 14.5C12.6598 14.5 13.4732 14.3174 14 14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M11.5 7.53544C11.6633 7.51209 11.8302 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11C15.5 11.1698 15.4879 11.3367 15.4646 11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M2 2L22 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
