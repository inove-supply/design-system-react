export const Briefcase02Icon = ({
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
        d="M2.57956 8.62505C2.50886 8.03528 2.47351 7.74039 2.52323 7.499C2.6651 6.81015 3.27111 6.25159 4.07871 6.06529C4.36172 6 4.717 6 5.42757 6H18.5724C19.283 6 19.6383 6 19.9213 6.06529C20.7289 6.25159 21.3349 6.81015 21.4768 7.499C21.5265 7.74039 21.4911 8.03528 21.4204 8.62505C21.2584 9.97669 20.4991 10.716 19.0512 11.1423L14.88 12.3703C13.4541 12.7901 12.7411 13 12 13C11.2589 13 10.5459 12.7901 9.11996 12.3703L4.94882 11.1423C3.50094 10.7161 2.7416 9.97669 2.57956 8.62505Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M3.46283 10.5L3.26658 12.7757C2.91481 16.855 2.73892 18.8947 3.86734 20.1974C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.1974C21.2611 18.8947 21.0852 16.855 20.7334 12.7757L20.5372 10.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 5.5L15.4227 5.23509C15.0377 3.91505 14.8452 3.25503 14.3869 2.87752C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 2.87752C9.15478 3.25503 8.96228 3.91505 8.57727 5.23509L8.5 5.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
