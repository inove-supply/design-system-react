export const BubbleChatQuestionIcon = ({
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
        d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M10.5 10.0385C10.5 9.18879 11.1716 8.5 12 8.5C12.8284 8.5 13.5 9.18879 13.5 10.0385C13.5 10.3447 13.4127 10.6301 13.2623 10.8698C12.8141 11.5844 12 12.2657 12 13.1154V13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 15.5H12.009"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
