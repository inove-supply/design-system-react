export const DeletePutBackIcon = ({
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
        d="M4.5 5.5L5.08671 15.1781C5.26178 18.066 5.34932 19.5099 6.14772 20.5018C6.38232 20.7932 6.65676 21.0505 6.96304 21.2662C8.00537 22 9.45801 22 12.3633 22H15.9867C17.4593 22 18.7162 20.9398 18.9583 19.4932C19.2643 17.6646 17.8483 16 15.9867 16H13.0357"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.5 18.5C13.9943 18.0085 12 16.7002 12 16C12 15.2998 13.9943 13.9915 14.5 13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 5.5H3" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M19 13.5L19.5 5.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
