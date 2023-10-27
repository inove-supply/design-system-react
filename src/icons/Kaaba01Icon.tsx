export const Kaaba01Icon = ({
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
        d="M3 22V5.9907C3 5.25783 3 4.8914 3.20387 4.62261C3.40774 4.35383 3.76006 4.25575 4.46471 4.0596L11.4647 2.11106C11.7307 2.03702 11.8637 2 12 2C12.1363 2 12.2693 2.03702 12.5353 2.11106L19.5353 4.0596C20.2399 4.25575 20.5923 4.35383 20.7961 4.62261C21 4.8914 21 5.25783 21 5.9907V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2 22H22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M3 9L11.5661 7.04882C11.8519 6.98373 12.1481 6.98373 12.4339 7.04882L21 9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M19.65 12.7L21 13M15.6 11.8L16.5 12M12.9 11.2L12 11L11.1 11.2M4.35 12.7L3 13M8.4 11.8L7.5 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M12 7V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
