export const SafariIcon = ({
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
        d="M13.7214 13.7214C14.1043 13.3385 14.3231 12.828 14.7607 11.807L16.3172 8.17504C16.4736 7.81011 16.5518 7.62764 16.4621 7.53789C16.3724 7.44815 16.1899 7.52635 15.825 7.68275L12.193 9.23929C11.172 9.67688 10.6615 9.89567 10.2786 10.2786M13.7214 13.7214C13.3385 14.1043 12.828 14.3231 11.807 14.7607L8.17504 16.3172C7.81011 16.4736 7.62764 16.5518 7.53789 16.4621C7.44815 16.3724 7.52635 16.1899 7.68275 15.825L9.23929 12.193C9.67688 11.172 9.89567 10.6615 10.2786 10.2786M13.7214 13.7214L10.2786 10.2786"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 2L12 3.5M12 22L12 20.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12L20.5 12M2 12L3.5 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
