export const SatelliteIcon = ({
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
        d="M12.5355 6.10913C14.0144 4.63029 16.412 4.63029 17.8909 6.10913C19.3697 7.58796 19.3697 9.98563 17.8909 11.4645L15.7487 13.6066C14.8881 14.4672 14.4578 14.8975 13.937 14.98C13.7688 15.0067 13.5974 15.0067 13.4292 14.98C12.9084 14.8975 12.4781 14.4672 11.6175 13.6066L10.3934 12.3825C9.53278 11.5219 9.10247 11.0916 9.01998 10.5708C8.99334 10.4026 8.99334 10.2312 9.01998 10.063C9.10247 9.54219 9.53278 9.11188 10.3934 8.25126L12.5355 6.10913Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6.8483 14C6.96714 15.5706 8.41803 17.0084 10 17.1305M3.00586 15.2381C2.85202 18.2662 5.7538 21.1419 8.80421 20.9946"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5293 5.52954L10.9336 3.8673C10.3555 3.2891 10.0664 3 9.70711 3C9.34786 3 9.05876 3.2891 8.48057 3.8673L7.8673 4.48057C7.2891 5.05876 7 5.34786 7 5.70711C7 6.06635 7.2891 6.35545 7.8673 6.93365L9.31826 8.38462M18.4214 11.355L20.1327 13.0664C20.7109 13.6445 21 13.9336 21 14.2929C21 14.6521 20.7109 14.9412 20.1327 15.5194L19.5194 16.1327C18.9412 16.7109 18.6521 17 18.2929 17C17.9336 17 17.6445 16.7109 17.0664 16.1327L15.5111 14.5775"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
