export const GlassesIcon = ({
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
        d="M7.5 20H6.45416C5.09333 20 4.41291 20 3.91897 19.6827C3.67759 19.5276 3.4724 19.3224 3.31733 19.081C3 18.5871 3 17.9067 3 16.5458C3 16.1093 3 15.891 2.95448 15.6813C2.93177 15.5767 2.9007 15.4741 2.86157 15.3744C2.78313 15.1747 2.66204 14.9931 2.41987 14.6298L2 14H7.5C8.43188 14 8.89782 14 9.26537 14.1522C9.75542 14.3552 10.1448 14.7446 10.3478 15.2346C10.5 15.6022 10.5 16.0681 10.5 17C10.5 17.9319 10.5 18.3978 10.3478 18.7654C10.1448 19.2554 9.75542 19.6448 9.26537 19.8478C8.89782 20 8.43188 20 7.5 20Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 20H17.5458C18.9067 20 19.5871 20 20.081 19.6827C20.3224 19.5276 20.5276 19.3224 20.6827 19.081C21 18.5871 21 17.9067 21 16.5458C21 16.1093 21 15.891 21.0455 15.6813C21.0682 15.5767 21.0993 15.4741 21.1384 15.3744C21.2169 15.1747 21.338 14.9931 21.5801 14.6298L22 14H16.5C15.5681 14 15.1022 14 14.7346 14.1522C14.2446 14.3552 13.8552 14.7446 13.6522 15.2346C13.5 15.6022 13.5 16.0681 13.5 17C13.5 17.9319 13.5 18.3978 13.6522 18.7654C13.8552 19.2554 14.2446 19.6448 14.7346 19.8478C15.1022 20 15.5681 20 16.5 20Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14L18.5259 5.46423C18.2366 4.75344 18.092 4.39804 17.8922 4.22854C17.597 3.97809 17.2005 3.92952 16.8629 4.10248C16.6345 4.21953 16.423 4.53131 16 5.15486"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 14L5.47409 5.46423C5.76338 4.75344 5.90803 4.39804 6.1078 4.22854C6.40296 3.97809 6.79947 3.92952 7.13705 4.10248C7.36553 4.21953 7.57702 4.53131 8 5.15486"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
