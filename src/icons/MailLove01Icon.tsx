export const MailLove01Icon = ({
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
        d="M2 5.5L8.91302 9.42462C11.4387 10.8585 12.5613 10.8585 15.087 9.42462L22 5.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M11.5 19.9959C11.0337 19.9898 9.56682 20.0077 9.09883 19.9959C5.95033 19.9166 4.37608 19.877 3.24496 18.7394C2.11383 17.6018 2.08114 16.0661 2.01577 12.9947C1.99475 12.0071 1.99474 11.0254 2.01576 10.0378C2.08114 6.96642 2.11382 5.43072 3.24495 4.29312C4.37608 3.15551 5.95033 3.11588 9.09882 3.03663C11.0393 2.98779 12.9607 2.98779 14.9012 3.03664C18.0497 3.1159 19.6239 3.15553 20.755 4.29313C21.8862 5.43073 21.9189 6.96643 21.9842 10.0378C21.9983 10.6973 22.0029 10.3542 21.9982 11.012"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.015 14.3866C16.0876 13.7469 17.0238 14.0047 17.5863 14.4153C17.8169 14.5837 17.9322 14.6679 18 14.6679C18.0678 14.6679 18.1831 14.5837 18.4137 14.4153C18.9762 14.0047 19.9124 13.7469 20.985 14.3866C22.3928 15.2261 22.7113 17.9958 19.4642 20.3324C18.8457 20.7775 18.5365 21 18 21C17.4635 21 17.1543 20.7775 16.5358 20.3324C13.2887 17.9958 13.6072 15.2261 15.015 14.3866Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
