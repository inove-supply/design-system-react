export const StackStarIcon = ({
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
        d="M16.8284 7.06234C18 8.12469 18 9.83451 18 13.2541V14.7459C18 18.1655 18 19.8753 16.8284 20.9377C15.6569 22 13.7712 22 10 22C6.22876 22 4.34315 22 3.17157 20.9377C2 19.8753 2 18.1655 2 14.7459V13.2541C2 9.83451 2 8.12469 3.17157 7.06234C4.34315 6 6.22876 6 10 6C13.7712 6 15.6569 6 16.8284 7.06234Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.06641 6C6.17344 4.61213 6.451 3.71504 7.1708 3.06234C8.34237 2 10.228 2 13.9992 2C17.7705 2 19.6561 2 20.8277 3.06234C21.9992 4.12469 21.9992 5.83451 21.9992 9.25414V10.7459C21.9992 14.1655 21.9992 15.8753 20.8277 16.9377C20.1745 17.5299 19.2993 17.792 17.9992 17.908"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6911 10.5777L11.395 11.9972C11.491 12.1947 11.7469 12.3843 11.9629 12.4206L13.2388 12.6343C14.0547 12.7714 14.2467 13.3682 13.6587 13.957L12.6668 14.9571C12.4989 15.1265 12.4069 15.4531 12.4589 15.687L12.7428 16.925C12.9668 17.9049 12.4509 18.284 11.591 17.7718L10.3951 17.0581C10.1791 16.929 9.82315 16.929 9.60318 17.0581L8.40731 17.7718C7.5514 18.284 7.03146 17.9009 7.25543 16.925L7.5394 15.687C7.5914 15.4531 7.49941 15.1265 7.33143 14.9571L6.33954 13.957C5.7556 13.3682 5.94358 12.7714 6.75949 12.6343L8.03535 12.4206C8.24732 12.3843 8.5033 12.1947 8.59929 11.9972L9.30321 10.5777C9.68717 9.80744 10.3111 9.80744 10.6911 10.5777Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
