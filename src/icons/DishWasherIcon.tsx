export const DishWasherIcon = ({
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
        d="M2 6C2 2.69067 2.69067 2 6 2H18C21.3093 2 22 2.69067 22 6V18C22 21.3093 21.3093 22 18 22H6C2.69067 22 2 21.3093 2 18V6Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8H22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M5 5H9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M19 5.00895V5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <circle
        cx="9"
        cy="15"
        r="3"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12L15.1376 11.2627C14.9184 11.2218 14.6923 11.2806 14.5208 11.4231C14.3492 11.5656 14.25 11.777 14.25 12L15 12ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18L14.25 18ZM17.0982 13.2736L16.365 13.4312V13.4312L17.0982 13.2736ZM17.4871 15.0836L18.2203 14.9261L18.2203 14.9261L17.4871 15.0836ZM16.0817 15.6149L16.0801 14.8649H16.0801L16.0817 15.6149ZM14.8174 14.9392C14.4156 15.0401 14.1717 15.4475 14.2726 15.8493C14.3734 16.251 14.7809 16.4949 15.1826 16.3941L14.8174 14.9392ZM14.25 12L14.25 18L15.75 18L15.75 12L14.25 12ZM16.365 13.4312L16.7538 15.2411L18.2203 14.9261L17.8315 13.1161L16.365 13.4312ZM16.0801 14.8649C15.7916 14.8655 15.555 14.8658 15.3663 14.873C15.1804 14.8801 14.9943 14.8948 14.8174 14.9392L15.1826 16.3941C15.2048 16.3885 15.2653 16.378 15.4234 16.3719C15.5787 16.366 15.7834 16.3655 16.0832 16.3649L16.0801 14.8649ZM17.8315 13.1161C17.702 12.5132 17.2681 12.1002 16.8053 11.8306C16.3393 11.5591 15.7569 11.3783 15.1376 11.2627L14.8624 12.7373C15.3893 12.8356 15.7877 12.9737 16.0501 13.1266C16.3157 13.2814 16.3579 13.3982 16.365 13.4312L17.8315 13.1161ZM16.7538 15.2411C16.7502 15.2243 16.7305 15.0769 16.8468 14.9276C16.9371 14.8115 17.029 14.8038 16.9664 14.8202C16.9144 14.8338 16.8171 14.8479 16.6514 14.8559C16.4903 14.8637 16.3039 14.8644 16.0801 14.8649L16.0832 16.3649C16.4792 16.3641 16.9751 16.3683 17.3458 16.2714C17.5389 16.2209 17.8245 16.1136 18.0305 15.8489C18.2624 15.5509 18.2804 15.2059 18.2203 14.9261L16.7538 15.2411Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
