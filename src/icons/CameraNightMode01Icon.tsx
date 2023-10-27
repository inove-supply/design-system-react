export const CameraNightMode01Icon = ({
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
        d="M12.1195 18C10.1205 18 8.5 16.4197 8.5 14.4702C8.5 12.7426 9.77269 11.3048 11.4536 11C11.2992 11.3925 11.2146 11.8186 11.2146 12.2641C11.2146 14.2135 12.8351 15.7939 14.8341 15.7939C15.0616 15.7939 15.2842 15.7734 15.5 15.7343C14.9787 17.0594 13.6617 18 12.1195 18Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M7 6C5.77936 6.00366 5.10383 6.03286 4.54873 6.26585C3.7712 6.5922 3.13801 7.19503 2.76811 7.9611C2.46618 8.58638 2.41677 9.3875 2.31796 10.9897L2.16312 13.5004C1.91739 17.4849 1.79452 19.4771 2.96369 20.7383C4.13285 21.9995 6.10252 21.9995 10.0419 21.9995H13.9581C17.8975 21.9995 19.8672 21.9995 21.0363 20.7383C22.2055 19.4771 22.0826 17.4849 21.8369 13.5004L21.682 10.9897C21.5832 9.3875 21.5338 8.58638 21.2319 7.9611C20.862 7.19503 20.2288 6.5922 19.4513 6.26585C18.8962 6.03286 18.2206 6.00366 17 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9998 6H12.0088"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
