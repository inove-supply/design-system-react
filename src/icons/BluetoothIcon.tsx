export const BluetoothIcon = ({
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
        d="M12.0004 12V6.66586C12.0004 4.80386 12.0004 3.87286 12.5857 3.578C13.171 3.28313 13.9102 3.84173 15.3886 4.95893L16.0945 5.49234C17.1298 6.27468 17.6475 6.66586 17.6475 7.19927C17.6475 7.73268 17.1298 8.12386 16.0945 8.9062L12.0004 12ZM12.0004 12V17.3341C12.0004 19.1961 12.0004 20.1271 12.5857 20.422C13.171 20.7169 13.9102 20.1583 15.3886 19.0411L16.0945 18.5077C17.1298 17.7253 17.6475 17.3341 17.6475 16.8007C17.6475 16.2673 17.1298 15.8761 16.0945 15.0938L12.0004 12ZM12.0004 12L5.64746 7.19927M12.0004 12L5.64746 16.8007"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9998 12H19.0088"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.99981 12H5.00879"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
