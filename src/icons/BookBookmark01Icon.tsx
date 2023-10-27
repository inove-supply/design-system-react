export const BookBookmark01Icon = ({
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
        d="M20 22.0001H6.5C5.11929 22.0001 4 20.8808 4 19.5001M4 19.5001V10.6837C4 7.69913 4 6.20682 4.75662 5.15857C5.00717 4.81144 5.31183 4.50679 5.65895 4.25623C6.70721 3.49961 8.19952 3.49961 11.1841 3.49961C12.1605 3.49961 13.3496 3.55106 14.3358 3.5644C15.235 3.57656 15.6846 3.58265 16.5222 3.43464C17.3597 3.28663 17.4492 3.2526 17.6282 3.18454C18.3982 2.89176 19.1272 2.43641 20 2V11.5001C20 13.3639 20 14.2958 19.6955 15.0309C19.2895 16.011 18.5108 16.7897 17.5307 17.1957C16.7956 17.5001 15.8638 17.5001 14 17.5001H6C4.89543 17.5001 4 18.3956 4 19.5001Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 17L18 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M8 4L8 7.69003C8 8.43013 8 8.80019 8.23811 8.94371C8.24836 8.94989 8.25884 8.95571 8.26951 8.96115C8.51756 9.08746 8.84124 8.89707 9.4886 8.51629C9.97254 8.23164 10.2145 8.08931 10.4815 8.08447C10.4938 8.08425 10.5062 8.08425 10.5185 8.08447C10.7855 8.08931 11.0275 8.23164 11.5114 8.51629C12.1588 8.89707 12.4824 9.08747 12.7305 8.96115C12.7412 8.95571 12.7516 8.94989 12.7619 8.94372C13 8.80019 13 8.43013 13 7.69003V4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
