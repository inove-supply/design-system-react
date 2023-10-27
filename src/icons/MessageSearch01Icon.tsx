export const MessageSearch01Icon = ({
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
        d="M12 3.00391C11.4383 3.01227 10.3789 3.03473 9.8294 3.07126C5.64639 3.34932 2.31441 6.72856 2.04024 10.9709C1.98659 11.8011 1.98659 12.6609 2.04024 13.4911C2.1401 15.0362 2.82343 16.4668 3.62791 17.6748C4.09501 18.5205 3.78674 19.576 3.30021 20.498C2.94941 21.1628 2.77401 21.4952 2.91484 21.7353C3.05568 21.9754 3.37026 21.9831 3.99943 21.9984C5.24367 22.0287 6.08268 21.6759 6.74868 21.1848C7.1264 20.9063 7.31527 20.767 7.44544 20.751C7.5756 20.735 7.83177 20.8405 8.34401 21.0515C8.8044 21.2411 9.33896 21.3581 9.8294 21.3907C11.2536 21.4854 12.7435 21.4856 14.1706 21.3907C18.3536 21.1127 21.6856 17.7334 21.9598 13.4911C21.9915 13.0004 22.0044 12.4993 21.9987 12.0002"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 15H15.5M8.5 10H12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.2649 7.27042L22 9M21.1714 5.08571C21.1714 3.38152 19.7899 2 18.0857 2C16.3815 2 15 3.38152 15 5.08571C15 6.78991 16.3815 8.17143 18.0857 8.17143C19.7899 8.17143 21.1714 6.78991 21.1714 5.08571Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
