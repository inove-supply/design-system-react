export const MoneyRemove02Icon = ({
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
        d="M12 19C10.6675 19.6224 8.91707 20 7 20C5.93408 20 4.91969 19.8833 4 19.6726C3.4088 19.5372 3.11319 19.4695 2.75898 19.1892C2.55696 19.0294 2.30483 18.7129 2.19412 18.4803C2 18.0725 2 17.677 2 16.886V6.11397C2 5.12914 3.04003 4.45273 4 4.6726C4.91969 4.88325 5.93408 5 7 5C8.91707 5 10.6675 4.62236 12 4C13.3325 3.37764 15.0829 3 17 3C18.0659 3 19.0803 3.11675 20 3.3274C20.5912 3.46281 20.8868 3.53051 21.241 3.81079C21.443 3.97064 21.6952 4.28705 21.8059 4.51966C22 4.92751 22 5.32299 22 6.11397V12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M15 18H22" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M5.5 13L5.5 13.009"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 10.9922L18.5 11.0012"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
