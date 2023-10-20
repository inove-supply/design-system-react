export const PokemonIcon = ({
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
        d="M12 21C16.4183 21 20 19.2091 20 17C20 16.0234 19.1597 15.468 18.9475 14.5886C18.8278 14.0928 19 13.5112 19 13C19 11.8639 18.7293 10.7909 18.2489 9.84218C20.1255 8.21287 22 5.60644 22 3C17.8474 3 15.7434 5.3492 15.0997 6.72194C13.1658 5.76534 10.8342 5.76534 8.90035 6.72194C8.25655 5.3492 6.15258 3 2 3C2 5.60644 3.87445 8.21287 5.75106 9.84218C5.27067 10.7909 5 11.8639 5 13C5 13.5112 5.17216 14.0928 5.05251 14.5886C4.8403 15.468 4 16.0234 4 17C4 19.2091 7.58172 21 12 21Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M11 16C11.7925 16.6596 12.206 16.6737 13 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5L8.99102 12.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0078 12.5L14.9988 12.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.75 16.6594C17.75 15.8065 18.3364 15.0256 19.2469 14.7082L18.7531 13.2918C17.3253 13.7896 16.25 15.0826 16.25 16.6594H17.75ZM18.7411 18.3667C18.1228 17.9745 17.75 17.3437 17.75 16.6594H16.25C16.25 17.9159 16.9375 18.9989 17.9376 19.6333L18.7411 18.3667Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M4.75309 14.7082C5.66364 15.0256 6.25 15.8065 6.25 16.6594H7.75C7.75 15.0826 6.67473 13.7896 5.24691 13.2918L4.75309 14.7082ZM6.25 16.6594C6.25 17.3437 5.87724 17.9745 5.25893 18.3667L6.06239 19.6333C7.06254 18.9989 7.75 17.9159 7.75 16.6594H6.25Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
