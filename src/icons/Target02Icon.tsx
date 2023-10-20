export const Target02Icon = ({
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
        d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16.6031 7.39687L12 12M16.6031 7.39687L16.2781 6.15129C16.0319 5.20771 16.369 4.11915 17.1487 3.33944L18.298 2.19006C18.6041 1.88401 19.0779 1.95969 19.1745 2.33007L19.6909 4.30912L21.6699 4.82548C22.0403 4.92211 22.116 5.39591 21.8099 5.70196L20.6606 6.85135C19.8809 7.63105 18.7923 7.96805 17.8487 7.72186L16.6031 7.39687Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
