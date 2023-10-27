export const GemIcon = ({
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
        d="M9.85221 21.0098L5.44108 18.227C3.62622 17.0821 2.71879 16.5097 2.53271 15.569C2.34663 14.6284 2.96172 13.723 4.1919 11.9122L8.60303 5.41914C10.1516 3.13971 10.9259 2 12 2C13.0741 2 13.8484 3.13971 15.397 5.41914L19.8081 11.9122C21.0383 13.723 21.6534 14.6284 21.4673 15.569C21.2812 16.5097 20.3738 17.0821 18.5589 18.227L14.1478 21.0098C13.1014 21.6699 12.5781 22 12 22C11.4219 22 10.8986 21.6699 9.85221 21.0098Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2L14 14M21 15.569L14 14M12 22L14 14M3 15.569L14 14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
