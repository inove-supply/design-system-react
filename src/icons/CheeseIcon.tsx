export const CheeseIcon = ({
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
        d="M22 10V13.7113C22 16.3939 22 17.7352 21.2244 18.6262C20.5311 19.4225 19.4318 19.6137 17.3727 19.836C17.1241 19.8628 16.9 19.6972 16.7922 19.4716C16.4649 18.7869 15.7853 18.3164 15 18.3164C14.0712 18.3164 13.2902 18.9746 13.0652 19.8668C13.0048 20.1064 12.8209 20.3101 12.5751 20.3357L8.59703 20.7492C5.515 21.0696 3.97397 21.2298 2.98698 20.3013C2 19.3727 2 17.7628 2 14.5429V11.0395"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.92976 11.9175L18.469 11.4342C21.2105 11.3194 22.8695 10.5154 21.5235 7.65944C20.5882 5.67494 18.9063 4.08622 16.823 3.22601C15.4742 2.66906 14.4121 3.23705 13.2962 3.89603C12.9147 4.12127 13.0788 4.55791 13.0788 4.91045C13.0788 6.02915 12.1759 6.93603 11.0621 6.93603C10.5717 6.93603 10.1223 6.76028 9.7727 6.46807C8.82025 5.67186 1.67251 10.3221 2.01169 11.3933C2.23981 12.1138 3.80313 12.0484 6.92976 11.9175Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M16.0078 8.20898L15.9988 8.20898"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M17.0078 15.209L16.9988 15.209"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7 16.209C7 17.0374 7.67157 17.709 8.5 17.709C9.32843 17.709 10 17.0374 10 16.209C10 15.3806 9.32843 14.709 8.5 14.709C7.67157 14.709 7 15.3806 7 16.209Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
