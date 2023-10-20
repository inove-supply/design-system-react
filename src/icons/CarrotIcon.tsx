export const CarrotIcon = ({
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
        d="M8.20026 9.07541C6.09891 11.1768 0.635392 20.0024 2.31647 21.6835C3.99756 23.3646 12.8232 17.9011 14.9246 15.7997C17.0259 13.6984 18.2868 12.4376 14.9246 9.07541C11.5624 5.71325 10.3016 6.97406 8.20026 9.07541Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.5 15.5L13 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11L8.5 12.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 19L8 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 2C15.5185 2.51852 15.8555 3.63331 15.0001 5.11102M22 9C21.4815 8.48148 20.3668 8.14445 18.8892 9M19.2782 4.72192L17.3339 6.66636"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
