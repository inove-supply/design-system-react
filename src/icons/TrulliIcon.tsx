export const TrulliIcon = ({
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
        d="M3.67189 10.5471L7.47963 5.84679C9.55715 3.28226 10.5959 2 12 2C13.4041 2 14.4429 3.28226 16.5204 5.84679L20.3281 10.5471C20.8406 11.1798 21.0969 11.4961 20.9663 11.7481C20.8356 12 20.4153 12 19.5747 12H4.42528C3.58468 12 3.16438 12 3.03374 11.7481C2.9031 11.4961 3.15936 11.1798 3.67189 10.5471Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 8.50768C9.32807 9.40703 10.821 5.2314 13.5794 7.91042C15 9.29007 16.4164 9.205 18 8.50769"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M10 22V18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 12L19.5 20C19.5 20.9428 19.5 21.4142 19.2071 21.7071C18.9142 22 18.4428 22 17.5 22L6.5 22C5.55719 22 5.08579 22 4.79289 21.7071C4.5 21.4142 4.5 20.9428 4.5 20L4.5 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
