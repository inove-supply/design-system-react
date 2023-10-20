export const WalletRemove01Icon = ({
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
        d="M10 15L3 22M10 22L3 15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10.002 7H16.002C18.8304 7 20.2446 7 21.1233 7.87868C22.002 8.75736 22.002 10.1716 22.002 13V15C22.002 17.8284 22.002 19.2426 21.1233 20.1213C20.2446 21 18.8304 21 16.002 21H13.501M18.002 7C18.002 6.07003 18.002 5.60504 17.8997 5.22354C17.6223 4.18827 16.8137 3.37962 15.7784 3.10222C15.3969 3 14.9319 3 14.002 3H10.002C6.23072 3 4.3451 3 3.17353 4.17157C2.00195 5.34315 2.00195 7.22876 2.00195 11V12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
