export const Pickup01Icon = ({
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
        d="M19 17C20.4232 17 21.0615 17 21.5137 16.5126C21.5331 16.4917 21.552 16.4702 21.5705 16.4482C22 15.935 22 15.1275 22 13.5125C22 12.2875 22 11.675 21.7599 11.1578C21.5092 10.6178 21.0574 10.2814 20.1073 9.59311C19.1636 8.90947 18.4926 8.14105 17.8533 7.08239C16.9415 5.57263 16.4856 4.81775 15.8019 4.40888C15.1182 4 14.3118 4 12.699 4H12M9 17H15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4L13.1185 7.47979C13.6665 9.18471 13.9405 10.0372 14.5119 10.5186C15.0833 11 15.8211 11 17.2966 11H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 14H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="17"
        cy="17"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="7"
        cy="17"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 4L12 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.75C12.4142 11.75 12.75 11.4142 12.75 11C12.75 10.5858 12.4142 10.25 12 10.25V11.75ZM2 11V10.25C1.58579 10.25 1.25 10.5858 1.25 11H2ZM2.4923 16.3282L2.07628 16.9522L2.07628 16.9522L2.4923 16.3282ZM5 17.75C5.41421 17.75 5.75 17.4142 5.75 17C5.75 16.5858 5.41421 16.25 5 16.25V17.75ZM12 10.25H2V11.75H12V10.25ZM1.25 11V15.4648H2.75V11H1.25ZM4.7111 17.75H5V16.25H4.7111V17.75ZM1.25 15.4648C1.25 15.7433 1.27934 16.0592 1.45859 16.3593C1.62769 16.6425 1.87968 16.8212 2.07628 16.9522L2.90833 15.7042C2.82197 15.6466 2.77644 15.6118 2.75045 15.5888C2.7283 15.5693 2.73476 15.5707 2.74643 15.5902C2.77529 15.6386 2.75 15.6504 2.75 15.4648H1.25ZM2.07628 16.9522C2.54095 17.262 2.8988 17.5079 3.30865 17.632C3.71849 17.7561 4.15263 17.75 4.7111 17.75V16.25C4.06732 16.25 3.89223 16.2415 3.74332 16.1964C3.59441 16.1513 3.44399 16.0613 2.90833 15.7042L2.07628 16.9522Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
