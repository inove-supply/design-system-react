export const JokerIcon = ({
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
      <circle
        cx="4"
        cy="5"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="20"
        cy="7"
        r="2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M16.6496 11.4256L17.3104 11.0709L16.6496 11.4256ZM18.2499 17C18.2499 17.4142 18.5857 17.75 18.9999 17.75C19.4141 17.75 19.7499 17.4142 19.7499 17H18.2499ZM10.5232 18.1763C10.6206 18.5789 11.0259 18.8263 11.4285 18.729C11.8311 18.6316 12.0785 18.2263 11.9812 17.8237L10.5232 18.1763ZM15.9887 11.7802C16.3467 12.4473 16.6809 12.9504 16.9744 13.3708C17.2774 13.8048 17.4987 14.0995 17.6891 14.4195C18.0241 14.9826 18.2499 15.6049 18.2499 17H19.7499C19.7499 15.3951 19.4791 14.4945 18.9782 13.6526C18.7506 13.27 18.4692 12.8916 18.2043 12.5121C17.9299 12.119 17.631 11.6682 17.3104 11.0709L15.9887 11.7802ZM11.9812 17.8237C11.5378 15.9902 11.7057 13.5202 12.7151 11.351C13.714 9.20454 15.5184 7.38376 18.3523 6.73085L18.0155 5.26915C14.6622 6.04173 12.5172 8.22095 11.3552 10.7181C10.2037 13.1926 9.99934 16.0098 10.5232 18.1763L11.9812 17.8237ZM18.2628 7.28849C17.3822 7.58202 16.5577 8.1537 16.0707 8.93481C15.5633 9.74842 15.4446 10.7664 15.9887 11.7802L17.3104 11.0709C17.0407 10.5684 17.0971 10.1236 17.3435 9.72848C17.6101 9.3009 18.1178 8.91798 18.7372 8.71151L18.2628 7.28849Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M4.96708 17C1.44345 11.5 8.98991 11 4.95936 7M6.37873 5C7.48278 5 10 6 10 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M5 17C10.2172 18.4523 13.3284 18.2088 19 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20C9.96256 21.4523 13.5182 21.2088 20 20"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
