export const House05Icon = ({
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
        d="M4 11H20V22H4V11Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M14.5 22V19C14.5 18.0572 14.5 17.5858 14.2071 17.2929C13.9142 17 13.4428 17 12.5 17H11.5C10.5572 17 10.0858 17 9.79289 17.2929C9.5 17.5858 9.5 18.0572 9.5 19V22"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M2 9.72272C2 9.14519 2.26952 8.68219 2.81725 8.49915L10.9302 5.78791C11.7893 5.50081 12 5.02569 12 4.18627C12 3.42909 11.8761 1.91748 13.0641 2.00246C13.3438 2.02247 13.6832 2.28711 14.3619 2.81637L21.439 8.33482C21.8381 8.64599 22 9.01733 22 9.53507C22 10.4783 21.6036 11.0002 20.6848 11.0002H3.14677C2.40983 11.0002 2 10.4556 2 9.72272Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M3 22H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 15H8" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M17 15L16 15" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M5 7.5L5 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
