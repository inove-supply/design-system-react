export const Timer01Icon = ({
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
        d="M11.0809 13.152L8 7L13.4196 11.2796C14.1901 11.888 14.1941 13.0472 13.4277 13.6607C12.6614 14.2743 11.5189 14.0266 11.0809 13.152Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 4.81986C3.14864 6.63888 2 9.17371 2 11.9774C2 17.5127 6.47715 22 12 22C17.5228 22 22 17.5127 22 11.9774C22 7.12406 18.5581 3.07642 13.9872 2.15274C13.1512 1.9838 12.7332 1.89933 12.3666 2.20008C12 2.50083 12 2.987 12 3.95935V4.96161"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
