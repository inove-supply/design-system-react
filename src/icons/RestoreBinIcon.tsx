export const RestoreBinIcon = ({
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
        d="M19.5 5.5L19 11.5M4.5 5.5L5.10461 15.5368C5.25945 18.1073 5.33688 19.3925 5.97868 20.3167C6.296 20.7737 6.7048 21.1594 7.17905 21.4493C7.76127 21.8051 8.46343 21.945 9.5 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11 15.5L12.1363 16.9657C12.708 14.8319 14.9014 13.5655 17.0352 14.1373C18.1275 14.43 18.9925 15.1475 19.5 16.0646M21 20.5L19.8637 19.0363C19.2919 21.1701 17.0986 22.4365 14.9647 21.8647C13.8978 21.5788 13.0477 20.8875 12.5359 20.001"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 5.5H3" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
