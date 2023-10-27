export const Book04Icon = ({
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
        d="M7.5 5H16C16.8284 5 17.5 5.67157 17.5 6.5V8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3284 20.8284L18.7981 20.2981L18.7981 20.2981L19.3284 20.8284ZM18.5 2.75C18.9142 2.75 19.25 2.41421 19.25 2C19.25 1.58579 18.9142 1.25 18.5 1.25V2.75ZM19.75 10V14H21.25V10H19.75ZM12.5 21.25H11.5V22.75H12.5V21.25ZM4.25 14V5H2.75V14H4.25ZM11.5 21.25C9.59318 21.25 8.23851 21.2484 7.21085 21.1102C6.20476 20.975 5.62511 20.7213 5.2019 20.2981L4.14124 21.3588C4.88961 22.1071 5.83855 22.4392 7.01098 22.5969C8.16182 22.7516 9.63558 22.75 11.5 22.75V21.25ZM2.75 14C2.75 15.8644 2.74841 17.3382 2.90313 18.489C3.06076 19.6614 3.39288 20.6104 4.14124 21.3588L5.2019 20.2981C4.77869 19.8749 4.52502 19.2952 4.38976 18.2892C4.25159 17.2615 4.25 15.9068 4.25 14H2.75ZM19.75 14C19.75 15.9068 19.7484 17.2615 19.6102 18.2892C19.475 19.2952 19.2213 19.8749 18.7981 20.2981L19.8588 21.3588C20.6071 20.6104 20.9392 19.6614 21.0969 18.489C21.2516 17.3382 21.25 15.8644 21.25 14H19.75ZM12.5 22.75C14.3644 22.75 15.8382 22.7516 16.989 22.5969C18.1614 22.4392 19.1104 22.1071 19.8588 21.3588L18.7981 20.2981C18.3749 20.7213 17.7952 20.975 16.7892 21.1102C15.7615 21.2484 14.4068 21.25 12.5 21.25V22.75ZM18.5 1.25H6.5V2.75H18.5V1.25ZM6.5 8.75H18.5V7.25H6.5V8.75ZM2.75 5C2.75 7.07107 4.42893 8.75 6.5 8.75V7.25C5.25736 7.25 4.25 6.24264 4.25 5H2.75ZM6.5 1.25C4.42893 1.25 2.75 2.92893 2.75 5H4.25C4.25 3.75736 5.25736 2.75 6.5 2.75V1.25ZM21.25 10C21.25 8.48122 20.0188 7.25 18.5 7.25V8.75C19.1904 8.75 19.75 9.30964 19.75 10H21.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M15 13L9 13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17L9 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
