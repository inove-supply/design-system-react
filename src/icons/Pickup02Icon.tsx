export const Pickup02Icon = ({
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
        d="M19 18C20.4232 18 21.0615 18 21.5137 17.5126C21.5331 17.4917 21.552 17.4702 21.5705 17.4482C22 16.935 22 16.1275 22 14.5125C22 13.2875 22 12.675 21.7599 12.1578C21.5092 11.6178 21.0574 11.2814 20.1073 10.5931C19.1636 9.90947 18.4926 9.14105 17.8533 8.08239C16.9415 6.57263 16.4856 5.81775 15.8019 5.40888C15.1182 5 14.3118 5 12.699 5H12M9 18H15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 5L14.7457 8.47979C15.175 10.4834 15.2447 12 17.5311 12H21.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 15H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L12 18"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="17"
        cy="18"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="7"
        cy="18"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25V12.75ZM2 12V11.25C1.58579 11.25 1.25 11.5858 1.25 12H2ZM2.4923 17.3282L2.07628 17.9522L2.07628 17.9522L2.4923 17.3282ZM5 18.75C5.41421 18.75 5.75 18.4142 5.75 18C5.75 17.5858 5.41421 17.25 5 17.25V18.75ZM12 11.25H2V12.75H12V11.25ZM1.25 12V16.4648H2.75V12H1.25ZM4.7111 18.75H5V17.25H4.7111V18.75ZM1.25 16.4648C1.25 16.7433 1.27934 17.0592 1.45859 17.3593C1.62769 17.6425 1.87968 17.8212 2.07628 17.9522L2.90833 16.7042C2.82197 16.6466 2.77644 16.6118 2.75045 16.5888C2.7283 16.5693 2.73476 16.5707 2.74643 16.5902C2.77529 16.6386 2.75 16.6504 2.75 16.4648H1.25ZM2.07628 17.9522C2.54095 18.262 2.8988 18.5079 3.30865 18.632C3.71849 18.7561 4.15263 18.75 4.7111 18.75V17.25C4.06732 17.25 3.89223 17.2415 3.74332 17.1964C3.59441 17.1513 3.44399 17.0613 2.90833 16.7042L2.07628 17.9522Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
