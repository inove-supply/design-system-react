export const Camera01Icon = ({
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
        d="M7 6.00098C5.77936 6.00464 5.10383 6.03384 4.54873 6.26683C3.7712 6.59318 3.13801 7.19601 2.76811 7.96207C2.46618 8.58735 2.41677 9.38847 2.31796 10.9907L2.16312 13.5014C1.91739 17.4858 1.79452 19.478 2.96369 20.7392C4.13285 22.0005 6.10252 22.0005 10.0419 22.0005H13.9581C17.8975 22.0005 19.8672 22.0005 21.0363 20.7392C22.2055 19.478 22.0826 17.4858 21.8369 13.5014L21.682 10.9907C21.5832 9.38847 21.5338 8.58735 21.2319 7.96207C20.862 7.19601 20.2288 6.59318 19.4513 6.26683C18.8962 6.03384 18.2206 6.00464 17 6.00098"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z"
        strokeWidth={strokeWidth}
      />
      <path d="M11.9998 6H12.0088" strokeWidth={strokeWidth} />
    </svg>
  )
}
