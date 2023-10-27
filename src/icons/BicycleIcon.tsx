export const BicycleIcon = ({
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
        cx="6"
        cy="16"
        r="4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="18"
        cy="16"
        r="4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16H10.3706C10.7302 16 11.0622 15.8069 11.2399 15.4942L15.5 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13L7 7M7 7H5M7 7H9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0511 4.90623L14.3257 5.09682L14.3267 5.10048L15.0511 4.90623ZM17.3015 16.1943C17.4087 16.5943 17.82 16.8317 18.2201 16.7244C18.6202 16.6171 18.8576 16.2058 18.7503 15.8057L17.3015 16.1943ZM19.2781 6.42627C19.3905 6.82495 19.8048 7.05703 20.2035 6.94464C20.6022 6.83225 20.8343 6.41796 20.7219 6.01928L19.2781 6.42627ZM14.3267 5.10048L17.3015 16.1943L18.7503 15.8057L15.7755 4.71198L14.3267 5.10048ZM15.7947 3.25C15.445 3.25 14.9254 3.30242 14.5679 3.69337C14.1754 4.1227 14.216 4.67949 14.3257 5.09682L15.7765 4.71564C15.7619 4.66009 15.7549 4.61959 15.7519 4.59211C15.7489 4.56455 15.7504 4.5548 15.75 4.55897C15.7495 4.56389 15.7466 4.58437 15.7341 4.61391C15.7279 4.62856 15.7199 4.64431 15.7096 4.6604C15.6993 4.67651 15.6876 4.69169 15.6749 4.70558C15.649 4.73395 15.6239 4.75143 15.6072 4.7609C15.5914 4.76983 15.5851 4.77054 15.5945 4.76789C15.6039 4.7652 15.6245 4.76043 15.6595 4.7565C15.6942 4.7526 15.7388 4.75 15.7947 4.75V3.25ZM20.7219 6.01928C20.3708 4.77396 19.5762 4.05062 18.6224 3.66733C17.7171 3.3035 16.6813 3.25 15.7947 3.25V4.75C16.6584 4.75 17.444 4.81037 18.0631 5.05916C18.6338 5.28849 19.0668 5.67655 19.2781 6.42627L20.7219 6.01928Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
