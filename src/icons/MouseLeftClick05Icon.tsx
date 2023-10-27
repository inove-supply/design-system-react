export const MouseLeftClick05Icon = ({
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
        d="M10 2.31844C10.7306 2.11067 11.5601 2 12.5 2C18.5 2 20 6.50998 20 12C20 17.49 18.5 22 12.5 22C6.49993 22 5 17.49 5 12C5 11.4906 5.01291 10.9897 5.04113 10.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M14 7C14 6.53406 14 6.30109 13.9239 6.11732C13.8224 5.87229 13.6277 5.67761 13.3827 5.57612C13.1989 5.5 12.9659 5.5 12.5 5.5C12.0341 5.5 11.8011 5.5 11.6173 5.57612C11.3723 5.67761 11.1776 5.87229 11.0761 6.11732C11 6.30109 11 6.53406 11 7V7.5C11 7.96594 11 8.19891 11.0761 8.38268C11.1776 8.62771 11.3723 8.82239 11.6173 8.92388C11.8011 9 12.0341 9 12.5 9C12.9659 9 13.1989 9 13.3827 8.92388C13.6277 8.82239 13.8224 8.62771 13.9239 8.38268C14 8.19891 14 7.96594 14 7.5V7Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.5 5.5V2M12.5 12V9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 12H19.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="5.5"
        cy="5.5"
        r="2.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
