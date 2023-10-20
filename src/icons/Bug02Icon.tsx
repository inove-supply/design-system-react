export const Bug02Icon = ({
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
        d="M11.25 13.8C11.25 14.2142 11.5858 14.55 12 14.55C12.4142 14.55 12.75 14.2142 12.75 13.8L11.25 13.8ZM17.4 16.65C16.9858 16.65 16.65 16.9858 16.65 17.4C16.65 17.8142 16.9858 18.15 17.4 18.15V16.65ZM19.35 21C19.35 21.4142 19.6858 21.75 20.1 21.75C20.5142 21.75 20.85 21.4142 20.85 21H19.35ZM6.6 18.15C7.01421 18.15 7.35 17.8142 7.35 17.4C7.35 16.9858 7.01421 16.65 6.6 16.65V18.15ZM3.15 21C3.15 21.4142 3.48579 21.75 3.9 21.75C4.31421 21.75 4.65 21.4142 4.65 21H3.15ZM3 13.05C2.58579 13.05 2.25 13.3858 2.25 13.8C2.25 14.2142 2.58579 14.55 3 14.55V13.05ZM5.7 14.55C6.11421 14.55 6.45 14.2142 6.45 13.8C6.45 13.3858 6.11421 13.05 5.7 13.05V14.55ZM18.3 13.05C17.8858 13.05 17.55 13.3858 17.55 13.8C17.55 14.2142 17.8858 14.55 18.3 14.55V13.05ZM21 14.55C21.4142 14.55 21.75 14.2142 21.75 13.8C21.75 13.3858 21.4142 13.05 21 13.05V14.55ZM18.3 9.45C17.8858 9.45 17.55 9.78579 17.55 10.2C17.55 10.6142 17.8858 10.95 18.3 10.95V9.45ZM21.75 6.6C21.75 6.18579 21.4142 5.85 21 5.85C20.5858 5.85 20.25 6.18579 20.25 6.6H21.75ZM5.7 10.95C6.11421 10.95 6.45 10.6142 6.45 10.2C6.45 9.78579 6.11421 9.45 5.7 9.45V10.95ZM3.75 6.6C3.75 6.18579 3.41421 5.85 3 5.85C2.58579 5.85 2.25 6.18579 2.25 6.6H3.75ZM8.76967 5.33033C9.06256 5.62322 9.53744 5.62322 9.83033 5.33033C10.1232 5.03744 10.1232 4.56256 9.83033 4.26967L8.76967 5.33033ZM8.03033 2.46967C7.73744 2.17678 7.26256 2.17678 6.96967 2.46967C6.67678 2.76256 6.67678 3.23744 6.96967 3.53033L8.03033 2.46967ZM14.1697 4.26967C13.8768 4.56256 13.8768 5.03744 14.1697 5.33033C14.4626 5.62322 14.9374 5.62322 15.2303 5.33033L14.1697 4.26967ZM17.0303 3.53033C17.3232 3.23744 17.3232 2.76256 17.0303 2.46967C16.7374 2.17678 16.2626 2.17678 15.9697 2.46967L17.0303 3.53033ZM11.25 10.2L11.25 13.8L12.75 13.8L12.75 10.2L11.25 10.2ZM17.55 12.9C17.55 17.1456 14.9007 20.25 12 20.25V21.75C16.0581 21.75 19.05 17.6014 19.05 12.9H17.55ZM12 20.25C9.09931 20.25 6.45 17.1456 6.45 12.9H4.95C4.95 17.6014 7.9419 21.75 12 21.75V20.25ZM6.45 12.9C6.45 8.65437 9.09931 5.55 12 5.55V4.05C7.9419 4.05 4.95 8.19861 4.95 12.9H6.45ZM12 5.55C14.9007 5.55 17.55 8.65437 17.55 12.9H19.05C19.05 8.19861 16.0581 4.05 12 4.05V5.55ZM17.4 18.15C17.8566 18.15 18.3271 18.395 18.7092 18.9044C19.0914 19.414 19.35 20.1525 19.35 21H20.85C20.85 19.8593 20.5042 18.7977 19.9092 18.0044C19.314 17.2109 18.4346 16.65 17.4 16.65V18.15ZM6.6 16.65C5.56542 16.65 4.68597 17.2109 4.09081 18.0044C3.49583 18.7977 3.15 19.8593 3.15 21H4.65C4.65 20.1525 4.90859 19.414 5.29081 18.9044C5.67286 18.395 6.14341 18.15 6.6 18.15V16.65ZM3 14.55H5.7V13.05H3V14.55ZM18.3 14.55H21V13.05H18.3V14.55ZM18.3 10.95C19.3346 10.95 20.214 10.3891 20.8092 9.59558C21.4042 8.80227 21.75 7.7407 21.75 6.6H20.25C20.25 7.44753 19.9914 8.18595 19.6092 8.69558C19.2271 9.20499 18.7566 9.45 18.3 9.45V10.95ZM5.7 9.45C5.24341 9.45 4.77286 9.20499 4.39081 8.69558C4.00859 8.18595 3.75 7.44753 3.75 6.6H2.25C2.25 7.7407 2.59583 8.80227 3.19081 9.59558C3.78597 10.3891 4.66542 10.95 5.7 10.95V9.45ZM16.96 7.79266C15.4992 8.85106 13.8034 9.45 12 9.45V10.95C14.1471 10.95 16.1465 10.2344 17.84 9.00734L16.96 7.79266ZM12 9.45C10.1966 9.45 8.50083 8.85106 7.04004 7.79266L6.15996 9.00734C7.85346 10.2344 9.85295 10.95 12 10.95V9.45ZM9.83033 4.26967L8.03033 2.46967L6.96967 3.53033L8.76967 5.33033L9.83033 4.26967ZM15.2303 5.33033L17.0303 3.53033L15.9697 2.46967L14.1697 4.26967L15.2303 5.33033Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
