export const CapcutRectangleIcon = ({
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
        d="M10.8 11.9998L6 14.4998C6 15.6783 6 15.7675 6.35155 16.1336C6.7031 16.4998 7.2689 16.4998 8.40052 16.4998H13.2016C14.3332 16.4998 14.899 16.4998 15.2505 16.1336C15.6021 15.7675 15.6021 15.6783 15.6021 14.4998M10.8 11.9998L18 8.24976M10.8 11.9998L6 9.49976C6 8.32124 6 8.23199 6.35155 7.86587C6.7031 7.49976 7.2689 7.49976 8.40052 7.49976H13.2016C14.3332 7.49976 14.899 7.49976 15.2505 7.86587C15.6021 8.23199 15.6021 8.32124 15.6021 9.49976M10.8 11.9998L18 15.7498"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.49805 11.9998C2.49805 7.52141 2.49805 5.28224 3.88929 3.891C5.28053 2.49976 7.5197 2.49976 11.998 2.49976C16.4764 2.49976 18.7156 2.49976 20.1068 3.891C21.498 5.28224 21.498 7.52141 21.498 11.9998C21.498 16.4781 21.498 18.7173 20.1068 20.1085C18.7156 21.4998 16.4764 21.4998 11.998 21.4998C7.5197 21.4998 5.28053 21.4998 3.88929 20.1085C2.49805 18.7173 2.49805 16.4781 2.49805 11.9998Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
