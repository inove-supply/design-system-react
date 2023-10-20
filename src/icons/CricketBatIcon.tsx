export const CricketBatIcon = ({
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
        d="M7 14.4733C7 14.9338 7 15.1641 7.08576 15.3711C7.17152 15.5782 7.33434 15.741 7.65998 16.0666L7.93335 16.34C8.25899 16.6657 8.42181 16.8285 8.62886 16.9142C8.83591 17 9.06617 17 9.52669 17H10.38C11.0708 17 11.4162 17 11.7267 16.8714C12.0373 16.7427 12.2815 16.4985 12.77 16.01L20.5434 8.23666C21.2858 7.49425 21.657 7.12305 21.8285 6.70896C22.0572 6.15683 22.0572 5.53647 21.8285 4.98435C21.657 4.57025 21.2858 4.19905 20.5434 3.45665C19.8009 2.71425 19.4297 2.34305 19.0157 2.17152C18.4635 1.94283 17.8432 1.94283 17.291 2.17152C16.8769 2.34305 16.5057 2.71425 15.7633 3.45665L7.98997 11.23C7.50151 11.7185 7.25728 11.9627 7.12864 12.2733C7 12.5838 7 12.9292 7 13.62V14.4733Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M6.92517 15L2.42971 19.4955C1.85676 20.0684 1.85676 20.9973 2.42971 21.5703C3.00266 22.1432 3.93159 22.1432 4.50454 21.5703L9 17.0748"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M6.5 20L4 17.5"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <circle
        r="2.5"
        transform="matrix(-1 0 0 1 18.5 18.5)"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}
