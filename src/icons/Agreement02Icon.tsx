export const Agreement02Icon = ({
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
        d="M22 3.5L18.5896 5.73307C17.7772 6.26496 16.8 6.4985 15.8297 6.39261L14.5265 6.25039C13.3423 6.12117 12.1587 6.49814 11.2771 7.28532L8.75986 9.5329C7.77913 10.4086 7.74271 11.9117 8.67993 12.8322C9.48235 13.6203 10.7473 13.7231 11.6707 13.0753L13.3355 11.9074C13.5688 11.7437 13.8607 11.6821 14.1419 11.7374L14.4754 11.8029C15.6329 12.0303 16.8344 11.7626 17.7788 11.0669L18.3693 10.6319"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.1419 11.7374C14.7613 12.9916 15.6 15.9 18 17.5C16.8333 18.8333 13.6 20.5 10 20.5C5.5 20.5 2 15.5 2 15.5M12 6.76781C11.2126 6.28417 9.0206 5.58265 6.03154 5.50673C5.68359 5.49789 5.34105 5.40917 5.03885 5.23649L2 3.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 17.5C18 17.5 20.5 17 22 15.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
