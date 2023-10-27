export const QuoteUpCircleIcon = ({
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
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M13.2544 14C13.2544 14.9428 13.2544 15.4142 13.5653 15.7071C13.8761 16 14.3765 16 15.3772 16C16.3779 16 16.8782 16 17.1891 15.7071C17.5 15.4142 17.5 14.9428 17.5 14C17.5 13.0572 17.5 12.5858 17.1891 12.2929C16.8782 12 16.3779 12 15.3772 12C14.3765 12 13.8761 12 13.5653 12.2929C13.2544 12.5858 13.2544 13.0572 13.2544 14ZM13.2544 14V11.9313C13.2544 10.0978 14.5895 8.54292 16.4386 8M6.5 14C6.5 14.9428 6.5 15.4142 6.81088 15.7071C7.12176 16 7.62211 16 8.62281 16C9.62351 16 10.1239 16 10.4347 15.7071C10.7456 15.4142 10.7456 14.9428 10.7456 14C10.7456 13.0572 10.7456 12.5858 10.4347 12.2929C10.1239 12 9.62351 12 8.62281 12C7.62211 12 7.12176 12 6.81088 12.2929C6.5 12.5858 6.5 13.0572 6.5 14ZM6.5 14V11.9313C6.5 10.0978 7.83509 8.54292 9.68421 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
