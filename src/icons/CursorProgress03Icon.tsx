export const CursorProgress03Icon = ({
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
        d="M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M16.5673 13.0425C16.9912 12.9858 17.4213 12.9858 17.8453 13.0425M20.1107 13.9793C20.4482 14.237 20.7628 14.5516 21.0205 14.8891M21.9576 17.1559C22.0141 17.5791 22.0141 18.0083 21.9576 18.4315M14.4367 14.1863C12.5005 16.0205 12.5727 18.8841 14.3437 20.6546C16.1343 22.4449 19.0474 22.5032 20.875 20.4993"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
