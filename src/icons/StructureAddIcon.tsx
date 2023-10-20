export const StructureAddIcon = ({
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
        d="M12 4.75C12.4142 4.75 12.75 4.41421 12.75 4C12.75 3.58579 12.4142 3.25 12 3.25V4.75ZM12 20.75C12.4142 20.75 12.75 20.4142 12.75 20C12.75 19.5858 12.4142 19.25 12 19.25V20.75ZM7.75 17C7.75 16.5858 7.41421 16.25 7 16.25C6.58579 16.25 6.25 16.5858 6.25 17H7.75ZM6.25 7C6.25 7.41421 6.58579 7.75 7 7.75C7.41421 7.75 7.75 7.41421 7.75 7H6.25ZM12 3.25H10V4.75H12V3.25ZM10 20.75H12V19.25H10V20.75ZM7.75 7C7.75 6.23188 7.97121 5.68808 8.31022 5.33923C8.64574 4.99397 9.18368 4.75 10 4.75V3.25C8.87593 3.25 7.91387 3.59476 7.23449 4.29386C6.5586 4.98937 6.25 5.94558 6.25 7H7.75ZM10 19.25C9.23188 19.25 8.68808 19.0288 8.33923 18.6898C7.99397 18.3543 7.75 17.8163 7.75 17H6.25C6.25 18.1241 6.59476 19.0861 7.29386 19.7655C7.98937 20.4414 8.94558 20.75 10 20.75V19.25Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M15 5C15 3.58579 15 2.87868 15.5126 2.43934C16.0251 2 16.8501 2 18.5 2C20.1499 2 20.9749 2 21.4874 2.43934C22 2.87868 22 3.58579 22 5C22 6.41421 22 7.12132 21.4874 7.56066C20.9749 8 20.1499 8 18.5 8C16.8501 8 16.0251 8 15.5126 7.56066C15 7.12132 15 6.41421 15 5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M15 19C15 17.5858 15 16.8787 15.5126 16.4393C16.0251 16 16.8501 16 18.5 16C20.1499 16 20.9749 16 21.4874 16.4393C22 16.8787 22 17.5858 22 19C22 20.4142 22 21.1213 21.4874 21.5607C20.9749 22 20.1499 22 18.5 22C16.8501 22 16.0251 22 15.5126 21.5607C15 21.1213 15 20.4142 15 19Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 12.75C9.41421 12.75 9.75 12.4142 9.75 12C9.75 11.5858 9.41421 11.25 9 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM6.25 14C6.25 14.4142 6.58579 14.75 7 14.75C7.41421 14.75 7.75 14.4142 7.75 14H6.25ZM7.75 10C7.75 9.58579 7.41421 9.25 7 9.25C6.58579 9.25 6.25 9.58579 6.25 10H7.75ZM11.25 12C11.25 14.3472 9.34721 16.25 7 16.25V17.75C10.1756 17.75 12.75 15.1756 12.75 12H11.25ZM7 16.25C4.65279 16.25 2.75 14.3472 2.75 12H1.25C1.25 15.1756 3.82436 17.75 7 17.75V16.25ZM2.75 12C2.75 9.65279 4.65279 7.75 7 7.75V6.25C3.82436 6.25 1.25 8.82436 1.25 12H2.75ZM7 7.75C9.34721 7.75 11.25 9.65279 11.25 12H12.75C12.75 8.82436 10.1756 6.25 7 6.25V7.75ZM9 11.25H7V12.75H9V11.25ZM7 11.25H5V12.75H7V11.25ZM7.75 14V12H6.25V14H7.75ZM7.75 12V10H6.25V12H7.75Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
