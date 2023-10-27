export const StarSquareIcon = ({
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
        d="M2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5C21 15.9783 21 18.2175 19.6088 19.6088C18.2175 21 15.9783 21 11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M12.3638 7.22209L13.2437 8.99644C13.3637 9.24344 13.6837 9.48035 13.9536 9.52572L15.5485 9.79288C16.5684 9.96426 16.8083 10.7103 16.0734 11.4462L14.8335 12.6964C14.6236 12.9081 14.5086 13.3164 14.5736 13.6087L14.9285 15.1562C15.2085 16.3812 14.5636 16.855 13.4887 16.2148L11.9939 15.3226C11.7239 15.1613 11.2789 15.1613 11.004 15.3226L9.50913 16.2148C8.43925 16.855 7.78932 16.3761 8.06929 15.1562L8.42425 13.6087C8.48925 13.3164 8.37426 12.9081 8.16428 12.6964L6.92442 11.4462C6.1945 10.7103 6.42947 9.96426 7.44936 9.79288L9.04419 9.52572C9.30916 9.48035 9.62912 9.24344 9.74911 8.99644L10.629 7.22209C11.109 6.2593 11.8889 6.2593 12.3638 7.22209Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
