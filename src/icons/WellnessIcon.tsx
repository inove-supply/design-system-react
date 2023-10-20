export const WellnessIcon = ({
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
        d="M4 14.0695C5.0145 14.0695 6.43122 13.7685 7.31944 14.4193L9.08188 15.7108C9.73667 16.1906 10.4458 16.0325 11.1765 15.9178C12.1389 15.7667 13 16.5875 13 17.6562C13 17.9482 10.9272 18.6905 10.6276 18.8316C10.0391 19.1088 9.36297 19.0406 8.83021 18.6502L6.84211 17.1934"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 17L17.091 15.1096C17.8244 14.854 18.6331 15.0535 19.1797 15.625L19.8505 16.3262C20.0902 16.5768 20.0338 16.9976 19.7375 17.1697L11.8829 21.7315C11.4097 22.0063 10.8514 22.0734 10.3309 21.9179L4 20.0269"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.002 12C12.002 12 14.102 9.76142 14.102 7C14.102 4.23858 12.002 2 12.002 2C12.002 2 9.90195 4.23858 9.90195 7C9.90195 9.76142 12.002 12 12.002 12ZM12.002 12C12.002 12 15.069 11.9316 17.002 9.95918C18.9349 7.98674 19.002 4.85714 19.002 4.85714C19.002 4.85714 17.7325 4.88544 16.3123 5.43087M12.002 12C12.002 12 8.93495 11.9316 7.00195 9.95918C5.06896 7.98674 5.00195 4.85714 5.00195 4.85714C5.00195 4.85714 6.27141 4.88544 7.69163 5.43087"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
