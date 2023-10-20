export const ChartRoseIcon = ({
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
        d="M9.77821 8C6.70996 8 4.22266 10.2386 4.22266 13H9.77821V8Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2.69232 15.8912C3.91511 18.3147 6.62776 20 9.77778 20L9.77778 13H5C3.55493 13 2.8324 13 2.39309 13.7137C1.95377 14.4275 2.19995 14.9154 2.69232 15.8912Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12.7413 21.5981C16.817 20.4613 19.7773 17.0418 19.7773 13H9.77734V19C9.77734 20.4624 9.77734 21.1936 10.3703 21.6438C10.9632 22.094 11.5559 21.9287 12.7413 21.5981Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M21.5533 10.0442C20.381 6.25325 17.0095 3.28684 12.7537 2.32846C11.5202 2.05069 10.9035 1.9118 10.3404 2.36217C9.77734 2.81253 9.77734 3.54169 9.77734 5V13H18.9996C20.4605 13 21.1909 13 21.6406 12.3903C22.0902 11.7806 21.9112 11.2018 21.5533 10.0442Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
