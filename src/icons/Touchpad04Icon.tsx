export const Touchpad04Icon = ({
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
        d="M22 13.579V13.7425M22 13.7425C22 12.9192 21.4003 12.2166 20.582 12.0812L19.4545 11.8947V12.7368M22 13.7425V15.8246C22 17.6548 22 18.5699 21.7191 19.2984C21.2896 20.4124 20.4054 21.2927 19.2865 21.7203C18.5547 22 17.6356 22 15.7973 22C14.8332 22 14.3512 22 13.9026 21.9018C13.2181 21.752 12.5818 21.4353 12.0508 20.98C11.7028 20.6816 11.4135 20.2977 10.8351 19.5298L8.28626 16.1463C7.89462 15.6264 7.90588 14.9086 8.31364 14.4011C8.84655 13.7379 9.84017 13.6831 10.4434 14.2837L11.7333 15.6524V7.41176C11.7333 6.63207 12.3601 6 13.1333 6C13.9065 6 14.5333 6.63207 14.5333 7.41176V10.2105M14.5333 10.2105H15.2121C16.1493 10.2105 16.9091 10.9646 16.9091 11.8947M14.5333 10.2105V12.7368M16.9091 11.8947V12.7368M16.9091 11.8947V11.0526H17.7576C18.6948 11.0526 19.4545 11.8067 19.4545 12.7368M19.4545 12.7368V13.579"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 8.01013C21.9641 5.52637 21.7801 4.11823 20.8366 3.17355C19.6645 2 17.7781 2 14.0052 2H10.0035C6.2306 2 4.34416 2 3.17208 3.17355C2 4.3471 2 6.2359 2 10.0135V12.0169C2 13.8838 2 14.8172 2.30461 15.5536C2.71077 16.5353 3.4898 17.3153 4.47034 17.722C4.87798 17.8911 5.34612 17.9664 6 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
