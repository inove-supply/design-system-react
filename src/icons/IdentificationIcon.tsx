export const IdentificationIcon = ({
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
        d="M9.1353 2.5C6.46902 2.56075 4.91168 2.81456 3.84762 3.87493C2.91634 4.80297 2.60504 6.10756 2.50098 8.2M14.8667 2.5C17.5329 2.56075 19.0903 2.81456 20.1543 3.87493C21.0856 4.80297 21.3969 6.10756 21.501 8.2M14.8667 21.5C17.5329 21.4392 19.0903 21.1854 20.1543 20.1251C21.0856 19.197 21.3969 17.8924 21.501 15.8M9.1353 21.5C6.46902 21.4392 4.91168 21.1854 3.84762 20.1251C2.91634 19.197 2.60504 17.8924 2.50098 15.8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17C9.83846 14.4046 14.1188 14.263 16 17M14.5 9.5C14.5 10.8807 13.3807 12 12 12C10.6193 12 9.5 10.8807 9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
