export const WalletNotFound02Icon = ({
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
        d="M6.78937 6.833C5.17978 6.55311 3.88205 6.26039 3 6V15.0614C3 17.0558 3 18.0531 3.61958 18.8663C4.23916 19.6796 5.08923 19.9093 6.78937 20.3687C9.53623 21.1109 12.4235 21.553 15.0106 21.8058C17.6919 22.0677 19.0325 22.1987 20.0163 21.2998C20.2149 21.1182 20.3735 20.9144 20.5 20.681"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 7.5C12.2539 7.64451 13.5967 7.70543 15.0038 7.80293C17.9252 8.00537 19.3859 8.10658 20.1929 8.977C21 9.84742 21 11.2499 21 14.0547V16.0684C21 16.3972 21 16.7073 20.9985 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6C3 5.16216 3.38491 4.39699 4 4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6264 8C18.0035 6.57668 18.3447 3.98809 17.3281 2.70275C16.685 1.8895 15.7281 1.96617 14.7873 2.04906C11.5661 2.33285 8.96217 2.80766 7 3.2701"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L22 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
