export const UserSearch02Icon = ({
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
        d="M5.17909 15.2964C3.92152 16.0335 0.624236 17.5386 2.6325 19.422C3.61352 20.342 4.70613 21 6.0798 21H13.9183C15.2919 21 16.3845 20.342 17.3655 19.422C19.3738 17.5386 16.0765 16.0335 14.819 15.2964C11.87 13.5679 8.12808 13.5679 5.17909 15.2964Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.999 7C13.999 9.20914 12.2082 11 9.99902 11C7.78988 11 5.99902 9.20914 5.99902 7C5.99902 4.79086 7.78988 3 9.99902 3C12.2082 3 13.999 4.79086 13.999 7Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21.4679 9.5286C21.7599 9.82245 22.2348 9.82399 22.5286 9.53205C22.8224 9.24012 22.824 8.76525 22.5321 8.4714L21.4679 9.5286ZM20.0817 8.13325L21.4679 9.5286L22.5321 8.4714L21.1458 7.07605L20.0817 8.13325ZM22.15 5.7C22.15 3.79462 20.6054 2.25 18.7 2.25V3.75C19.777 3.75 20.65 4.62304 20.65 5.7H22.15ZM18.7 2.25C16.7946 2.25 15.25 3.79462 15.25 5.7H16.75C16.75 4.62304 17.623 3.75 18.7 3.75V2.25ZM15.25 5.7C15.25 7.60538 16.7946 9.15 18.7 9.15V7.65C17.623 7.65 16.75 6.77696 16.75 5.7H15.25ZM18.7 9.15C20.6054 9.15 22.15 7.60538 22.15 5.7H20.65C20.65 6.77696 19.777 7.65 18.7 7.65V9.15Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
