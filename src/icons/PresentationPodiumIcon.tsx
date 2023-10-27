export const PresentationPodiumIcon = ({
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
        d="M9.29424 14C7.91955 14 7.23221 14 6.65717 13.7642C6.02495 13.5049 5.48333 13.0456 5.10588 12.4488C4.76258 11.9059 4.6117 11.1951 4.30994 9.77358C4.05199 8.55844 3.92302 7.95087 4.04847 7.4685C4.186 6.93967 4.52244 6.49392 4.97901 6.23561C5.39547 6 5.98301 6 7.15811 6H16.8419C18.017 6 18.6045 6 19.021 6.23561C19.4776 6.49392 19.814 6.93967 19.9515 7.4685C20.077 7.95087 19.948 8.55844 19.6901 9.77359C19.3883 11.1951 19.2374 11.9059 18.8941 12.4488C18.5167 13.0456 17.9751 13.5049 17.3428 13.7642C16.7678 14 16.0804 14 14.7058 14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6 6L6.51493 3.94029C6.80001 2.79997 7.82459 2 9 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M18 6L17.4851 3.94029C17.2 2.79997 16.1754 2 15 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M9.28421 12L10.0603 17.5726C10.1053 17.8955 10.1278 18.0569 10.0834 18.1822C9.87682 18.7653 9.08754 18.3874 8.66068 18.5626C8.53152 18.6156 8.41501 18.7004 8.32003 18.8107C8.20789 18.9409 8.13871 19.1192 8.00036 19.4758C7.73896 20.1496 7.15042 21.0988 7.78292 21.7379C8.04234 22 8.50275 22 9.42357 22H14.5764C15.4972 22 15.9577 22 16.2171 21.7379C16.8496 21.0988 16.261 20.1496 15.9996 19.4758C15.8613 19.1192 15.7921 18.9409 15.68 18.8107C15.585 18.7004 15.4685 18.6156 15.3393 18.5626C14.9125 18.3874 14.1232 18.7653 13.9166 18.1822C13.8722 18.0569 13.8947 17.8955 13.9397 17.5726L14.7158 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
