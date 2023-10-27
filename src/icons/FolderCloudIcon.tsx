export const FolderCloudIcon = ({
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
        d="M7.00127 6.50447H16.7537C18.861 6.50447 19.9146 6.50447 20.6714 7.01062C20.9991 7.22974 21.2804 7.51131 21.4994 7.83925C22.0051 8.59676 22 9.90157 22 12.0106M12.0025 6.50447L11.3689 5.23618C10.844 4.18546 10.3643 3.12782 9.20108 2.69122C8.69159 2.5 8.10957 2.5 6.94553 2.5C5.12859 2.5 4.22013 2.5 3.53845 2.88074C3.05253 3.15215 2.65159 3.55344 2.38041 4.03978C2 4.72204 2 5.63129 2 7.4498V10.5089C2 15.2282 2 17.5879 3.46484 19.054C4.57905 20.1692 6.20981 20.4361 9.00178 20.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M12 18.8333C12 20.3061 13.1193 21.5 14.5 21.5H19.75C20.9926 21.5 22 20.4255 22 19.1C22 17.6579 20.8197 16.6944 19.7388 16.7C19.8774 15.0592 18.6444 13.5 17 13.5C15.5616 13.5 14.3812 14.6779 14.2602 16.1788C12.992 16.3075 12 17.4469 12 18.8333Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
