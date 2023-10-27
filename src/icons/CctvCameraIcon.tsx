export const CctvCameraIcon = ({
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
        d="M15 13V14C15 16.8284 15 18.2426 15.8787 19.1213C16.7574 20 18.1716 20 21 20"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M20.6914 18L20.6914 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 10.8292L8.46281 10.8889C7.65914 10.9782 7.25729 11.0229 6.93718 10.9882C5.37478 10.8189 4.1433 9.43436 4.00816 7.69526C3.98047 7.33895 4.02507 6.89263 4.11426 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M13.6914 7H13.7004"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M17 7L21.5 7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.246 4.22415C2.02398 3.32732 1.91297 2.8789 2.08182 2.5451C2.13924 2.43157 2.21764 2.33017 2.31277 2.24638C2.59249 2 3.05019 2 3.9656 2H16.5537C19.5616 2 22 4.46243 22 7.5C22 10.5376 19.5616 13 16.5537 13H11.8051C10.9893 13 10.5813 13 10.2309 12.8603C9.96064 12.7526 9.71719 12.5861 9.51778 12.3727C9.25919 12.096 9.10768 11.7135 8.80467 10.9485L8.26723 9.59167C7.95643 8.80701 7.80103 8.41468 7.51359 8.1244C7.22614 7.83413 6.83765 7.67719 6.06065 7.36333L4.3686 6.67983C3.64185 6.38626 3.27848 6.23948 3.00574 5.98088C2.91013 5.89022 2.82367 5.79019 2.74764 5.68227C2.53076 5.37443 2.43584 4.99101 2.246 4.22415Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
