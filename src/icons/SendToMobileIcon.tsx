export const SendToMobileIcon = ({
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
        d="M17 6C16.9132 4.58055 16.6749 3.67665 16.021 3.02513C14.9923 2 13.3365 2 10.0249 2C6.71333 2 5.05754 2 4.02877 3.02513C3 4.05025 3 5.70017 3 9V15C3 18.2998 3 19.9497 4.02877 20.9749C5.05754 22 6.71333 22 10.0249 22C13.3365 22 14.9923 22 16.021 20.9749C16.6749 20.3233 16.9132 19.4194 17 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10 19H10.009"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9229 14.4713C17.6309 14.7651 17.6323 15.2399 17.9261 15.5319C18.2199 15.8239 18.6947 15.8225 18.9867 15.5287L17.9229 14.4713ZM19.9457 13.5L19.4138 12.9713L19.9457 13.5ZM19.9457 10.5L19.4138 11.0287L19.9457 10.5ZM18.9867 8.47128C18.6947 8.1775 18.2198 8.17606 17.9261 8.46807C17.6323 8.76007 17.6308 9.23494 17.9228 9.52872L18.9867 8.47128ZM11 11.25C10.5858 11.25 10.25 11.5858 10.25 12C10.25 12.4142 10.5858 12.75 11 12.75L11 11.25ZM18.9867 15.5287L20.4777 14.0287L19.4138 12.9713L17.9229 14.4713L18.9867 15.5287ZM20.4777 9.97129L18.9867 8.47128L17.9228 9.52872L19.4138 11.0287L20.4777 9.97129ZM20.4777 14.0287C20.8142 13.6902 21.1208 13.384 21.334 13.1028C21.5605 12.8041 21.75 12.4482 21.75 12L20.25 12C20.25 12.0038 20.2504 12.011 20.2413 12.0331C20.2297 12.0611 20.2026 12.1124 20.1388 12.1964C20.0007 12.3786 19.7802 12.6027 19.4138 12.9713L20.4777 14.0287ZM19.4138 11.0287C19.7801 11.3973 20.0006 11.6214 20.1388 11.8036C20.2026 11.8877 20.2297 11.9389 20.2413 11.9669C20.2504 11.989 20.25 11.9962 20.25 12L21.75 12C21.75 11.5518 21.5605 11.1959 21.334 10.8972C21.1208 10.6161 20.8142 10.3098 20.4777 9.97129L19.4138 11.0287ZM21 11.25L11 11.25L11 12.75L21 12.75V11.25Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
