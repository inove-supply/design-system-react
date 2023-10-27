export const PassportIcon = ({
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
        d="M12.9502 22.0002C15.5949 22.0002 16.9172 22.0002 17.8666 21.2439C18.8159 20.4876 19.1188 19.1929 19.7245 16.6035L21.6419 8.40718C21.9772 6.97384 22.1448 6.25717 21.8404 5.73812C21.2876 4.7955 19.8787 5.00022 18.9592 5.00022"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9C2 5.70017 2 4.05025 3.02513 3.02513C4.05025 2 5.70017 2 9 2H12C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22H9C5.70017 22 4.05025 22 3.02513 20.9749C2 19.9497 2 18.2998 2 15V9Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M10.5 6C12.7091 6 14.5 7.79086 14.5 10C14.5 12.2091 12.7091 14 10.5 14M10.5 6C8.29086 6 6.5 7.79086 6.5 10C6.5 12.2091 8.29086 14 10.5 14M10.5 6C9.67157 6 9 7.79086 9 10C9 12.2091 9.67157 14 10.5 14M10.5 6C11.3284 6 12 7.79086 12 10C12 12.2091 11.3284 14 10.5 14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7 17L14 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
