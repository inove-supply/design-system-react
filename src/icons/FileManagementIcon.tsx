export const FileManagementIcon = ({
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
        d="M7 9.71428V11M7 9.71428C5.84322 9.71428 4.82406 9.14608 4.22632 8.28331M7 9.71428C8.15678 9.71428 9.17594 9.14608 9.77368 8.28331M7 3.28571C8.15687 3.28571 9.17609 3.854 9.77381 4.71688M7 3.28571C5.84313 3.28571 4.82391 3.854 4.22619 4.71688M7 3.28571V2M11 3.92857L9.77381 4.71688M3.00042 9.07143L4.22632 8.28331M3 3.92857L4.22619 4.71688M10.9996 9.07143L9.77368 8.28331M9.77381 4.71688C10.1273 5.22711 10.3333 5.84035 10.3333 6.5C10.3333 7.15973 10.1272 7.77304 9.77368 8.28331M4.22619 4.71688C3.87274 5.22711 3.66667 5.84035 3.66667 6.5C3.66667 7.15973 3.87279 7.77304 4.22632 8.28331"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
