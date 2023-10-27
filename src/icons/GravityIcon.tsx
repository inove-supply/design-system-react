export const GravityIcon = ({
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
        cx="12"
        cy="16"
        r="6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 2V4M17 2V4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.25 2C11.25 1.58579 11.5858 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2H11.25ZM11 6.67157L10.4295 7.15849L10.4295 7.15849L11 6.67157ZM9.42955 5.98691C9.16063 5.67186 9.19804 5.19846 9.51309 4.92955C9.82814 4.66063 10.3015 4.69804 10.5705 5.01309L9.42955 5.98691ZM13.4295 5.01309C13.6985 4.69804 14.1719 4.66063 14.4869 4.92955C14.802 5.19846 14.8394 5.67186 14.5705 5.98691L13.4295 5.01309ZM13 6.67157L13.5705 7.15849L13.5705 7.15849L13 6.67157ZM11.25 7.5V2H12.75V7.5H11.25ZM10.4295 7.15849L9.42955 5.98691L10.5705 5.01309L11.5705 6.18466L10.4295 7.15849ZM14.5705 5.98691L13.5705 7.15849L12.4295 6.18466L13.4295 5.01309L14.5705 5.98691ZM11.5705 6.18466C11.8205 6.47761 11.9592 6.63754 12.0668 6.73372C12.1637 6.82036 12.1226 6.75 12 6.75V8.25C11.5845 8.25 11.2791 8.04157 11.0671 7.85206C10.8658 7.6721 10.6509 7.41782 10.4295 7.15849L11.5705 6.18466ZM13.5705 7.15849C13.3491 7.41782 13.1342 7.6721 12.9329 7.85206C12.7209 8.04157 12.4155 8.25 12 8.25V6.75C11.8774 6.75 11.8363 6.82036 11.9332 6.73372C12.0408 6.63754 12.1795 6.47761 12.4295 6.18466L13.5705 7.15849Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
