export const HoldPhoneIcon = ({
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
        d="M21 20C20.3567 18.7133 19 17.0243 19 15.5279C19 13.8295 19.3671 11.7341 18.5777 10.1554C18.2445 9.48892 18 8.81397 18 8.05573V4.42857C18 4.19188 17.8081 4 17.5714 4C16.1513 4 15 5.15127 15 6.57143M8 18L11.6348 20.2717C11.8755 20.4222 12.0814 20.6222 12.2389 20.8583L13 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M5.02734 15C5.08201 16.0967 5.24516 16.7809 5.73203 17.2678C6.46426 18 7.64277 18 9.99979 18C12.3568 18 13.5353 18 14.2676 17.2678C14.9998 16.5355 14.9998 15.357 14.9998 13V7C14.9998 4.64298 14.9998 3.46447 14.2676 2.73223C13.5353 2 12.3568 2 9.99979 2C7.64277 2 6.46426 2 5.73203 2.73223C5.24516 3.2191 5.08201 3.90328 5.02734 5"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M4.25 7.5H5.75C6.44036 7.5 7 6.94036 7 6.25C7 5.55964 6.44036 5 5.75 5L4.25 5C3.55964 5 3 5.55964 3 6.25C3 6.94036 3.55964 7.5 4.25 7.5ZM4.25 7.5L6.75 7.5C7.44036 7.5 8 8.05964 8 8.75C8 9.44036 7.44036 10 6.75 10L4.25 10M4.25 7.5C3.55964 7.5 3 8.05964 3 8.75C3 9.44036 3.55964 10 4.25 10M4.25 10L5.75 10C6.44036 10 7 10.5596 7 11.25C7 11.9404 6.44036 12.5 5.75 12.5H4.25M4.25 10C3.55964 10 3 10.5596 3 11.25C3 11.9404 3.55964 12.5 4.25 12.5M4.25 12.5H5.25C5.94036 12.5 6.5 13.0596 6.5 13.75C6.5 14.4404 5.94036 15 5.25 15H4.25C3.55964 15 3 14.4404 3 13.75C3 13.0596 3.55964 12.5 4.25 12.5Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M9.99981 15H10.0088" strokeWidth={strokeWidth} />
    </svg>
  )
}
