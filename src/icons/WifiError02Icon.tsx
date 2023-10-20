export const WifiError02Icon = ({
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
        d="M8.25 17C8.67265 16.5774 9.16229 16.244 9.6906 16M15.75 17C15.3274 16.5774 14.8377 16.244 14.3094 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 14C17.4308 13.0692 16.2435 12.4025 15 12M5.5 14C6.59299 13.1038 7.778 12.4524 9 12.046"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.9999C3.92227 9.37665 5.94206 8.13515 8 7.5M22 10.9998C20.0778 9.3766 18.0579 8.13513 16 7.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20H12.0118"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5864 4.32708C12.6577 3.89098 11.3422 3.89096 10.4136 4.32708C10.0852 4.48128 9.95517 4.84472 10.0135 5.19151L12 17L13.9865 5.19153C14.0448 4.84473 13.9148 4.48128 13.5864 4.32708Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
