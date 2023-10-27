export const MedalSecondPlaceIcon = ({
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
        d="M5 15C5 11.134 8.02208 8 11.75 8H12.25C15.9779 8 19 11.134 19 15C19 18.866 15.9779 22 12.25 22H11.75C8.02208 22 5 18.866 5 15Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M10.5 13.1179C10.5804 12.3326 11.1076 12 11.6576 12H12.3239C12.8738 12 13.401 12.3326 13.4814 13.1179C13.5063 13.3608 13.5063 13.6392 13.4814 13.8821C13.4325 14.3602 12.8543 14.9086 12.8543 14.9086L12.0288 15.4801C11.9595 15.528 11.9249 15.552 11.9238 15.5527C11.9228 15.5535 12.0048 15.4963 11.972 15.5192C11.7666 15.6622 10.5 16.5811 10.5 17.5C10.5 18.0394 10.9373 18 11.4766 18H13.4814"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M14.248 2.29863C14.413 1.91867 14.2387 1.47695 13.8587 1.31202C13.4787 1.14709 13.037 1.32141 12.8721 1.70137L14.248 2.29863ZM18.688 2.29863C18.8529 1.91867 18.6786 1.47695 18.2986 1.31202C17.9187 1.14709 17.4769 1.32141 17.312 1.70137L18.688 2.29863ZM14.4906 8.20137C14.3256 8.58133 14.5 9.02305 14.8799 9.18798C15.2599 9.35291 15.7016 9.17859 15.8665 8.79863L14.4906 8.20137ZM10.312 7.5992C10.1471 7.97917 10.3214 8.42089 10.7014 8.58582C11.0813 8.75075 11.5231 8.57643 11.688 8.19647L10.312 7.5992ZM15.8665 8.79863L18.688 2.29863L17.312 1.70137L14.4906 8.20137L15.8665 8.79863ZM12.8721 1.70137L10.312 7.5992L11.688 8.19647L14.248 2.29863L12.8721 1.70137Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M9.75196 2.29863C9.58703 1.91867 9.76135 1.47695 10.1413 1.31202C10.5213 1.14709 10.963 1.32141 11.1279 1.70137L9.75196 2.29863ZM5.31202 2.29863C5.14709 1.91867 5.32141 1.47695 5.70137 1.31202C6.08133 1.14709 6.52305 1.32141 6.68798 1.70137L5.31202 2.29863ZM9.50942 8.20137C9.67435 8.58133 9.50003 9.02305 9.12007 9.18798C8.74011 9.35291 8.29839 9.17859 8.13346 8.79863L9.50942 8.20137ZM12.688 5.29542C12.8529 5.67538 12.6786 6.1171 12.2986 6.28203C11.9187 6.44696 11.4769 6.27264 11.312 5.89268L12.688 5.29542ZM8.13346 8.79863L5.31202 2.29863L6.68798 1.70137L9.50942 8.20137L8.13346 8.79863ZM11.1279 1.70137L12.688 5.29542L11.312 5.89268L9.75196 2.29863L11.1279 1.70137Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
