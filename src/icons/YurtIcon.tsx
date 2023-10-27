export const YurtIcon = ({
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
        d="M10.1568 2.45596C7.44599 3.52155 5.26606 5.13458 3.84323 6.46166C3.21936 7.04354 2.90742 7.33448 3.02414 7.66724C3.14086 8 3.575 8 4.44328 8H19.5567C20.425 8 20.8591 8 20.9759 7.66724C21.0926 7.33448 20.7806 7.04354 20.1568 6.46166C18.7339 5.13458 16.554 3.52155 13.8432 2.45596C13.0699 2.15199 12.6833 2 12 2C11.3167 2 10.9301 2.15199 10.1568 2.45596Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.49705 22C3.8036 21.3068 3.45902 20.5479 3.37922 19.5907C3.27038 18.285 3.06714 15.816 3.01334 15.1622C3.0067 15.0815 3.00338 15.0411 3.00338 15C3.00338 14.9589 3.0067 14.9185 3.01334 14.8378C3.06714 14.184 3.27038 11.715 3.37922 10.4093C3.45902 9.45208 3.8036 8.69321 4.49705 8M19.5029 22C20.1964 21.3068 20.541 20.5479 20.6208 19.5907C20.7296 18.285 20.9329 15.816 20.9867 15.1622C20.9933 15.0815 20.9966 15.0411 20.9966 15C20.9966 14.9589 20.9933 14.9185 20.9867 14.8378C20.9329 14.184 20.7296 11.715 20.6208 10.4093C20.541 9.45208 20.1964 8.69321 19.5029 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 22H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15H9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V14C9 12.3453 9.34533 12 11 12H13C14.6547 12 15 12.3453 15 14V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.009 15H12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
