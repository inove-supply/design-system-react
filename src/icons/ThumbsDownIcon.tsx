export const ThumbsDownIcon = ({
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
        d="M2 11C2 12.1046 2.89543 13 4 13C5.65685 13 7 11.6569 7 10V6C7 4.34315 5.65685 3 4 3C2.89543 3 2 3.89543 2 5V11Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4787 15.6937L15.2124 14.8337C14.9942 14.1289 14.8851 13.7765 14.969 13.4982C15.0369 13.2731 15.1859 13.079 15.389 12.9513C15.64 12.7935 16.0197 12.7935 16.7791 12.7935H17.1831C19.7532 12.7935 21.0382 12.7935 21.6452 12.0327C21.7145 11.9458 21.7762 11.8533 21.8296 11.7563C22.2965 10.9079 21.7657 9.76487 20.704 7.4789C19.7297 5.38111 19.2425 4.33222 18.338 3.71485C18.2505 3.65508 18.1605 3.5987 18.0683 3.54586C17.116 3 15.9362 3 13.5764 3H13.0646C10.2057 3 8.77628 3 7.88814 3.86053C7 4.72106 7 6.10607 7 8.87607V9.84966C7 11.3054 7 12.0332 7.25834 12.6994C7.51668 13.3656 8.01135 13.9134 9.00069 15.0089L13.0921 19.5394C13.1947 19.6531 13.246 19.7099 13.2913 19.7493C13.7135 20.1167 14.3652 20.0754 14.7344 19.6577C14.774 19.6129 14.8172 19.5501 14.9036 19.4245C15.0388 19.228 15.1064 19.1297 15.1654 19.0323C15.6928 18.1609 15.8524 17.1256 15.6108 16.1429C15.5838 16.0331 15.5488 15.9199 15.4787 15.6937Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
