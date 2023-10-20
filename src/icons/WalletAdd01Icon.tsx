export const WalletAdd01Icon = ({
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
        d="M16.002 13.5C16.002 14.3284 16.6735 15 17.502 15C18.3304 15 19.002 14.3284 19.002 13.5C19.002 12.6716 18.3304 12 17.502 12C16.6735 12 16.002 12.6716 16.002 13.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2.00195 11C2.00195 7.22876 2.00195 5.34315 3.17353 4.17157C4.3451 3 6.23072 3 10.002 3H14.002C14.9319 3 15.3969 3 15.7784 3.10222C16.8137 3.37962 17.6223 4.18827 17.8997 5.22354C18.002 5.60504 18.002 6.07003 18.002 7M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H12.5005"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10 17H6M6 17H2M6 17V21M6 17L6 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
