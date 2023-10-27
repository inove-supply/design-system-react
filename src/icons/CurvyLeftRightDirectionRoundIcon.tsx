export const CurvyLeftRightDirectionRoundIcon = ({
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
        d="M2 10.25C1.58579 10.25 1.25 10.5858 1.25 11C1.25 11.4142 1.58579 11.75 2 11.75V10.25ZM22 13.75C22.4142 13.75 22.75 13.4142 22.75 13C22.75 12.5858 22.4142 12.25 22 12.25V13.75ZM2 11.75H3.95595V10.25H2V11.75ZM7.29055 15V17.0845H8.79055V15H7.29055ZM12.7026 17.0845V6.96543H11.2026V17.0845H12.7026ZM15.2166 6.96543V9H16.7166V6.96543H15.2166ZM20.0512 13.75H22V12.25H20.0512V13.75ZM15.2166 9C15.2166 11.6381 17.396 13.75 20.0512 13.75V12.25C18.1947 12.25 16.7166 10.7802 16.7166 9H15.2166ZM13.9596 5.75C14.6687 5.75 15.2166 6.30889 15.2166 6.96543H16.7166C16.7166 5.45102 15.4674 4.25 13.9596 4.25V5.75ZM12.7026 6.96543C12.7026 6.30889 13.2505 5.75 13.9596 5.75V4.25C12.4519 4.25 11.2026 5.45102 11.2026 6.96543H12.7026ZM9.99659 19.75C11.4762 19.75 12.7026 18.5713 12.7026 17.0845H11.2026C11.2026 17.7135 10.6775 18.25 9.99659 18.25V19.75ZM7.29055 17.0845C7.29055 18.5713 8.51696 19.75 9.99659 19.75V18.25C9.31564 18.25 8.79055 17.7135 8.79055 17.0845H7.29055ZM3.95595 11.75C5.81247 11.75 7.29055 13.2198 7.29055 15H8.79055C8.79055 12.3619 6.61115 10.25 3.95595 10.25V11.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M20 15C20 15 22 13.527 22 13C22 12.4729 20 11 20 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.99998 13C3.99998 13 2 11.527 2 11C2 10.4729 4 9 4 9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
