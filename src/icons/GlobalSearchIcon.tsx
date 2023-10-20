export const GlobalSearchIcon = ({
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
        d="M21.4697 22.5303C21.7626 22.8232 22.2374 22.8232 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L21.4697 22.5303ZM19.6697 20.7303L21.4697 22.5303L22.5303 21.4697L20.7303 19.6697L19.6697 20.7303ZM21.85 17.05C21.85 14.399 19.701 12.25 17.05 12.25V13.75C18.8725 13.75 20.35 15.2275 20.35 17.05H21.85ZM17.05 12.25C14.399 12.25 12.25 14.399 12.25 17.05H13.75C13.75 15.2275 15.2275 13.75 17.05 13.75V12.25ZM12.25 17.05C12.25 19.701 14.399 21.85 17.05 21.85V20.35C15.2275 20.35 13.75 18.8725 13.75 17.05H12.25ZM17.05 21.85C19.701 21.85 21.85 19.701 21.85 17.05H20.35C20.35 18.8725 18.8725 20.35 17.05 20.35V21.85Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}
