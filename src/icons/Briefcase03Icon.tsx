export const Briefcase03Icon = ({
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
        d="M10 12.3333C10 12.0233 10 11.8683 10.0341 11.7412C10.1265 11.3961 10.3961 11.1265 10.7412 11.0341C10.8683 11 11.0233 11 11.3333 11H12.6667C12.9767 11 13.1317 11 13.2588 11.0341C13.6039 11.1265 13.8735 11.3961 13.9659 11.7412C14 11.8683 14 12.0233 14 12.3333V13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13V12.3333Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.8016 13C14.1132 12.9095 14.4666 12.8005 14.88 12.673L19.0512 11.3866C20.5358 10.9288 21.2624 10.131 21.4204 8.74977C21.4911 8.13198 21.5265 7.82308 21.4768 7.57022C21.3349 6.84864 20.7289 6.26354 19.9213 6.06839C19.6383 6 19.283 6 18.5724 6H5.42757C4.717 6 4.36172 6 4.07871 6.06839C3.27111 6.26354 2.6651 6.84864 2.52323 7.57022C2.47351 7.82308 2.50886 8.13198 2.57956 8.74977C2.73764 10.131 3.46424 10.9288 4.94882 11.3866L9.11996 12.673C9.53336 12.8005 9.88684 12.9095 10.1984 13"
        strokeWidth={strokeWidth}
      />
      <path
        d="M3.46283 11L3.26658 13.1723C2.91481 17.0662 2.73892 19.0131 3.86734 20.2566C4.99576 21.5 6.93851 21.5 10.824 21.5H13.176C17.0615 21.5 19.0042 21.5 20.1327 20.2566C21.2611 19.0131 21.0852 17.0662 20.7334 13.1723L20.5372 11"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 5.5L15.4227 5.23509C15.0377 3.91505 14.8452 3.25503 14.3869 2.87752C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 2.87752C9.15478 3.25503 8.96228 3.91505 8.57727 5.23509L8.5 5.5"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
