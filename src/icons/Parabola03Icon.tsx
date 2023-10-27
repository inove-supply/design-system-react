export const Parabola03Icon = ({
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
        d="M11.25 22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22H11.25ZM13.25 3.03553L13.8205 2.54862V2.54862L13.25 3.03553ZM13.9295 4.98691C14.1985 5.30196 14.6719 5.33937 14.9869 5.07045C15.302 4.80154 15.3394 4.32814 15.0705 4.01309L13.9295 4.98691ZM8.92955 4.01309C8.66063 4.32814 8.69804 4.80154 9.01309 5.07045C9.32814 5.33937 9.80154 5.30196 10.0705 4.98691L8.92955 4.01309ZM10.75 3.03553L10.1795 2.54862L10.75 3.03553ZM12.75 22V2H11.25V22H12.75ZM12.6795 3.52245L13.9295 4.98691L15.0705 4.01309L13.8205 2.54862L12.6795 3.52245ZM10.0705 4.98691L11.3205 3.52245L10.1795 2.54862L8.92955 4.01309L10.0705 4.98691ZM13.8205 2.54862C13.5402 2.22025 13.2811 1.91419 13.0412 1.69971C12.7905 1.47569 12.4521 1.25 12 1.25V2.75C11.914 2.75 11.906 2.6969 12.0415 2.81805C12.1877 2.94875 12.3706 3.16046 12.6795 3.52245L13.8205 2.54862ZM11.3205 3.52245C11.6294 3.16046 11.8123 2.94875 11.9585 2.81805C12.094 2.6969 12.086 2.75 12 2.75V1.25C11.5479 1.25 11.2095 1.47569 10.9588 1.69972C10.7189 1.91419 10.4598 2.22025 10.1795 2.54862L11.3205 3.52245Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2 19.25C1.58579 19.25 1.25 19.5858 1.25 20C1.25 20.4142 1.58579 20.75 2 20.75V19.25ZM22 20.75C22.4142 20.75 22.75 20.4142 22.75 20C22.75 19.5858 22.4142 19.25 22 19.25V20.75ZM2 20.75H22V19.25H2V20.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21 2C21 10.2843 16.9706 17 12 17C7.02944 17 3 10.2843 3 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
