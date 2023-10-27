export const ReloadIcon = ({
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
        d="M15.1667 1L15.7646 2.11777C16.1689 2.87347 16.371 3.25131 16.2374 3.41313C16.1037 3.57495 15.6635 3.44426 14.7831 3.18288C13.9029 2.92156 12.9684 2.78095 12 2.78095C6.75329 2.78095 2.5 6.90846 2.5 12C2.5 13.6792 2.96262 15.2535 3.77093 16.6095M8.83333 23L8.23536 21.8822C7.83108 21.1265 7.62894 20.7487 7.7626 20.5869C7.89627 20.425 8.33649 20.5557 9.21689 20.8171C10.0971 21.0784 11.0316 21.219 12 21.219C17.2467 21.219 21.5 17.0915 21.5 12C21.5 10.3208 21.0374 8.74648 20.2291 7.39048"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
