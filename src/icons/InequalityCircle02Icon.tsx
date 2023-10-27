export const InequalityCircle02Icon = ({
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
        d="M16 17.25C16.4142 17.25 16.75 16.9142 16.75 16.5C16.75 16.0858 16.4142 15.75 16 15.75V17.25ZM8 15.75C7.58579 15.75 7.25 16.0858 7.25 16.5C7.25 16.9142 7.58579 17.25 8 17.25V15.75ZM8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25V12.75ZM15.8383 12.6464L16.3437 12.0921L16.3342 12.0838L15.8383 12.6464ZM10.4959 6.93738C10.1852 6.66348 9.71129 6.69333 9.43738 7.00405C9.16348 7.31478 9.19333 7.78871 9.50405 8.06262L10.4959 6.93738ZM16 15.75H8V17.25H16V15.75ZM8 14.25H15.4505V12.75H8V14.25ZM16.3342 12.0838L10.4959 6.93738L9.50405 8.06262L15.3423 13.2091L16.3342 12.0838ZM15.4505 14.25C15.9876 14.25 16.4387 13.9446 16.64 13.5016C16.846 13.0482 16.7701 12.4811 16.3436 12.0922L15.333 13.2007C15.3039 13.1742 15.2687 13.1233 15.2553 13.0527C15.2427 12.9863 15.2538 12.9263 15.2743 12.8811C15.3175 12.7861 15.4019 12.75 15.4505 12.75V14.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
