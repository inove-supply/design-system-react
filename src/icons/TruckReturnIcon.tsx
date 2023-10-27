export const TruckReturnIcon = ({
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
        d="M19 11H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2 16.5355 2 15.357 2 13V9C2 6.64298 2 5.46447 2.73223 4.73223C3.46447 4 4.64298 4 7 4H10.3C11.4168 4 11.9752 4 12.4271 4.14683C13.3404 4.44358 14.0564 5.15964 14.3532 6.07295C14.5 6.52485 14.5 7.08323 14.5 8.2C14.5 9.42079 14.5 10.0312 14.1657 10.444C14.0998 10.5254 14.0254 10.5998 13.944 10.6657C13.5312 11 12.9208 11 11.7 11H8M15 18H9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.82843 12L8.34151 12.5705L8.34151 12.5705L8.82843 12ZM10.4869 12.4295C10.802 12.6985 10.8394 13.1719 10.5705 13.4869C10.3015 13.802 9.82814 13.8394 9.51309 13.5705L10.4869 12.4295ZM9.51309 8.42955C9.82814 8.16063 10.3015 8.19804 10.5705 8.51309C10.8394 8.82814 10.802 9.30154 10.4869 9.57045L9.51309 8.42955ZM8.82843 10L8.34151 9.42955L8.34151 9.42955L8.82843 10ZM9.31534 11.4295L10.4869 12.4295L9.51309 13.5705L8.34151 12.5705L9.31534 11.4295ZM10.4869 9.57045L9.31534 10.5705L8.34151 9.42955L9.51309 8.42955L10.4869 9.57045ZM8.34151 12.5705C8.08218 12.3491 7.8279 12.1342 7.64794 11.9329C7.45843 11.7209 7.25 11.4155 7.25 11H8.75C8.75 10.8774 8.67964 10.8363 8.76628 10.9332C8.86246 11.0408 9.02239 11.1795 9.31534 11.4295L8.34151 12.5705ZM9.31534 10.5705C9.02239 10.8205 8.86246 10.9592 8.76628 11.0668C8.67964 11.1637 8.75 11.1226 8.75 11H7.25C7.25 10.5845 7.45843 10.2791 7.64794 10.0671C7.8279 9.86579 8.08218 9.6509 8.34151 9.42955L9.31534 10.5705Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
