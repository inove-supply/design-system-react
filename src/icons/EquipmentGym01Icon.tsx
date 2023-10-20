export const EquipmentGym01Icon = ({
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
        d="M7.75 11.5H16.25C17.6429 11.5 18 11.9094 18 13.25C18 14.6429 17.5906 15 16.25 15H7.75C6.3571 15 6 14.5906 6 13.25C6 11.8571 6.40936 11.5 7.75 11.5Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 15H16.25C17.6429 15 18 15.4094 18 16.75C18 18.1429 17.5906 18.5 16.25 18.5H7.75C6.3571 18.5 6 18.0906 6 16.75C6 15.3571 6.40936 15 7.75 15Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 18.5H16.25C17.6429 18.5 18 18.9094 18 20.25C18 21.6429 17.5906 22 16.25 22H7.75C6.3571 22 6 21.5906 6 20.25C6 18.8571 6.40936 18.5 7.75 18.5Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7.50014L21.201 6.50136C20.6109 5.76374 20.3158 5.39493 19.9051 5.19754C19.5608 5.03203 19.1731 5.00529 18.5 5.00098M2 7.50014L2.79902 6.50136C3.38912 5.76374 3.68417 5.39493 4.09487 5.19754C4.43923 5.03203 4.82691 5.00529 5.5 5.00098M16 5.00098L8 5.00098"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V11.5M8 2V11.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
