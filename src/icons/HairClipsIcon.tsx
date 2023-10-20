export const HairClipsIcon = ({
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
        d="M9.34857 12.3315C8.34842 14.3854 12.5556 16.0303 10.9976 17.9999C9.49206 19.3878 7.84607 15.6201 4.5 15.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4.43903C16.6511 2.83733 13.1197 5.85076 11.0697 9.71325C8.66575 14.2427 5.84955 15.3123 2 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20C7 20 8 18 8 18M10.7143 15.2941C12.8448 12.2758 15.2857 10 21 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
