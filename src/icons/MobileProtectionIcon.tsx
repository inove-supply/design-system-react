export const MobileProtectionIcon = ({
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
        d="M17.5 13.5003V15.0003C17.5 18.3001 17.5 19.9501 16.4749 20.9752C15.4497 22.0003 13.7998 22.0003 10.5 22.0003C7.20017 22.0003 5.55025 22.0003 4.52513 20.9752C3.5 19.9501 3.5 18.3001 3.5 15.0003V9.00031C3.5 5.70048 3.5 4.05056 4.52513 3.02544C5.38151 2.16906 6.67392 2.02809 9 2.00488"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M15.9991 2C14.5744 2 13.6506 2.90855 12.5581 3.23971C12.1138 3.37436 11.8917 3.44168 11.8018 3.53659C11.7119 3.6315 11.6856 3.77019 11.633 4.04756C11.0696 7.0157 12.301 9.75979 15.2375 10.8279C15.553 10.9426 15.7108 11 16.0007 11C16.2906 11 16.4484 10.9426 16.7639 10.8279C19.7002 9.75978 20.9304 7.01569 20.3669 4.04756C20.3142 3.77014 20.2879 3.63143 20.198 3.53652C20.1081 3.44161 19.886 3.37432 19.4418 3.23974C18.3488 2.90862 17.4239 2 15.9991 2Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19H11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
