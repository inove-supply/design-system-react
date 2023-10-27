export const ScreenRotationIcon = ({
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
        d="M2 12C2.13134 15.1935 4.1976 21.442 11.2999 21.9778C11.718 22.0094 11.9271 22.0251 11.987 21.8984C12.047 21.7717 11.8959 21.6247 11.5937 21.3308L10.2375 20.0117"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M22 12C21.8687 8.80652 19.8024 2.55801 12.7001 2.02219C12.282 1.99065 12.0729 1.97488 12.013 2.10161C11.953 2.22834 12.1041 2.37529 12.4063 2.6692L13.7625 3.98829"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M8.07586 13.4457C6.71281 12.0827 6.03128 11.4012 6.00104 10.5845C5.97079 9.76786 6.60363 9.13502 7.86933 7.86933C9.13502 6.60363 9.76786 5.97079 10.5845 6.00104C11.4012 6.03128 12.0827 6.71281 13.4457 8.07586L15.9241 10.5543C17.2872 11.9173 17.9687 12.5988 17.999 13.4155C18.0292 14.2321 17.3964 14.865 16.1307 16.1307C14.865 17.3964 14.2321 18.0292 13.4155 17.999C12.5988 17.9687 11.9173 17.2872 10.5543 15.9241L8.07586 13.4457Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
