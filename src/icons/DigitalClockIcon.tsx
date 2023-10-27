export const DigitalClockIcon = ({
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
        d="M5 19V21M19 19V21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M10 5L9.45858 3.61345C9.43124 3.54345 9.41757 3.50845 9.40111 3.47421C9.38465 3.43997 9.36672 3.40897 9.33088 3.34696C9.14894 3.03225 9.03695 2.86285 8.841 2.75067C8.2572 2.41644 6.7428 2.41644 6.159 2.75067C5.96305 2.86285 5.85106 3.03225 5.66912 3.34697C5.63328 3.40897 5.61535 3.43997 5.59889 3.47421C5.58243 3.50845 5.56876 3.54345 5.54142 3.61345L5 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M9.5 10C9.08579 10 8.75 10.3358 8.75 10.75C8.75 11.1642 9.08579 11.5 9.5 11.5V10ZM9.50898 11.5C9.9232 11.5 10.259 11.1642 10.259 10.75C10.259 10.3358 9.9232 10 9.50898 10V11.5ZM9.5 12.5C9.08579 12.5 8.75 12.8358 8.75 13.25C8.75 13.6642 9.08579 14 9.5 14V12.5ZM9.50898 14C9.9232 14 10.259 13.6642 10.259 13.25C10.259 12.8358 9.9232 12.5 9.50898 12.5V14ZM7.25 10C7.25 9.58579 6.91421 9.25 6.5 9.25C6.08579 9.25 5.75 9.58579 5.75 10H7.25ZM5.75 14C5.75 14.4142 6.08579 14.75 6.5 14.75C6.91421 14.75 7.25 14.4142 7.25 14H5.75ZM18.25 10C18.25 9.58579 17.9142 9.25 17.5 9.25C17.0858 9.25 16.75 9.58579 16.75 10H18.25ZM16.75 14C16.75 14.4142 17.0858 14.75 17.5 14.75C17.9142 14.75 18.25 14.4142 18.25 14H16.75ZM9.5 11.5H9.50898V10H9.5V11.5ZM9.5 14H9.50898V12.5H9.5V14ZM5.75 10V14H7.25V10H5.75ZM13.5 10.75H14V9.25H13.5V10.75ZM14.25 11V13H15.75V11H14.25ZM14 13.25H13.5V14.75H14V13.25ZM13.25 13V11H11.75V13H13.25ZM13.5 13.25C13.3794 13.25 13.2865 13.25 13.2073 13.248C13.1276 13.2459 13.0803 13.2423 13.0513 13.2384C13.0228 13.2346 13.0324 13.233 13.0607 13.2446C13.0949 13.2587 13.1379 13.2844 13.1768 13.3232L12.1161 14.3839C12.3519 14.6197 12.6321 14.6955 12.8514 14.725C13.0492 14.7516 13.2855 14.75 13.5 14.75V13.25ZM11.75 13C11.75 13.2145 11.7484 13.4508 11.775 13.6486C11.8045 13.8679 11.8803 14.1481 12.1161 14.3839L13.1768 13.3232C13.2156 13.3621 13.2413 13.4051 13.2554 13.4393C13.267 13.4676 13.2654 13.4772 13.2616 13.4487C13.2577 13.4197 13.2541 13.3724 13.252 13.2927C13.25 13.2135 13.25 13.1206 13.25 13H11.75ZM14.25 13C14.25 13.1206 14.25 13.2135 14.248 13.2927C14.2459 13.3724 14.2423 13.4197 14.2384 13.4487C14.2346 13.4772 14.233 13.4676 14.2446 13.4393C14.2587 13.4051 14.2844 13.3621 14.3232 13.3232L15.3839 14.3839C15.6197 14.1481 15.6955 13.8679 15.725 13.6486C15.7516 13.4508 15.75 13.2145 15.75 13H14.25ZM14 14.75C14.2145 14.75 14.4508 14.7516 14.6486 14.725C14.8679 14.6955 15.1481 14.6197 15.3839 14.3839L14.3232 13.3232C14.3621 13.2844 14.4051 13.2587 14.4393 13.2446C14.4676 13.233 14.4772 13.2346 14.4487 13.2384C14.4197 13.2423 14.3724 13.2459 14.2927 13.248C14.2135 13.25 14.1206 13.25 14 13.25V14.75ZM14 10.75C14.1206 10.75 14.2135 10.75 14.2927 10.752C14.3724 10.7541 14.4197 10.7577 14.4487 10.7616C14.4772 10.7654 14.4676 10.767 14.4393 10.7554C14.4051 10.7413 14.3621 10.7156 14.3232 10.6768L15.3839 9.61612C15.1481 9.38032 14.8679 9.30448 14.6486 9.27499C14.4508 9.24841 14.2145 9.25 14 9.25V10.75ZM15.75 11C15.75 10.7855 15.7516 10.5492 15.725 10.3514C15.6955 10.1321 15.6197 9.85192 15.3839 9.61612L14.3232 10.6768C14.2844 10.6379 14.2587 10.5949 14.2446 10.5607C14.233 10.5324 14.2346 10.5228 14.2384 10.5513C14.2423 10.5803 14.2459 10.6276 14.248 10.7073C14.25 10.7865 14.25 10.8794 14.25 11H15.75ZM13.5 9.25C13.2855 9.25 13.0492 9.24841 12.8514 9.27499C12.6321 9.30448 12.3519 9.38032 12.1161 9.61612L13.1768 10.6768C13.1379 10.7156 13.0949 10.7413 13.0607 10.7554C13.0324 10.767 13.0228 10.7654 13.0513 10.7616C13.0803 10.7577 13.1276 10.7541 13.2073 10.752C13.2865 10.75 13.3794 10.75 13.5 10.75V9.25ZM13.25 11C13.25 10.8794 13.25 10.7865 13.252 10.7073C13.2541 10.6276 13.2577 10.5803 13.2616 10.5513C13.2654 10.5228 13.267 10.5324 13.2554 10.5607C13.2413 10.5949 13.2156 10.6379 13.1768 10.6768L12.1161 9.61612C11.8803 9.85192 11.8045 10.1321 11.775 10.3514C11.7484 10.5492 11.75 10.7855 11.75 11H13.25ZM16.75 10V14H18.25V10H16.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
