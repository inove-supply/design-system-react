export const TestTube03Icon = ({
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
        d="M15.4718 7.8502L15.8194 7.18565V7.18565L15.4718 7.8502ZM15.25 2C15.25 1.58579 14.9142 1.25 14.5 1.25C14.0858 1.25 13.75 1.58579 13.75 2H15.25ZM8.52824 7.8502L8.18057 7.18565H8.18057L8.52824 7.8502ZM10.25 2C10.25 1.58579 9.91421 1.25 9.5 1.25C9.08579 1.25 8.75 1.58579 8.75 2H10.25ZM18.75 14.5C18.75 18.2279 15.7279 21.25 12 21.25V22.75C16.5563 22.75 20.25 19.0563 20.25 14.5H18.75ZM12 21.25C8.27208 21.25 5.25 18.2279 5.25 14.5H3.75C3.75 19.0563 7.44365 22.75 12 22.75V21.25ZM15.1241 8.51475C17.2809 9.64307 18.75 11.9006 18.75 14.5H20.25C20.25 11.3206 18.4513 8.56251 15.8194 7.18565L15.1241 8.51475ZM13.75 2V6.366H15.25V2H13.75ZM5.25 14.5C5.25 11.9006 6.71914 9.64307 8.8759 8.51475L8.18057 7.18565C5.54873 8.56251 3.75 11.3206 3.75 14.5H5.25ZM10.25 6.366V2H8.75V6.366H10.25ZM8.8759 8.51475C9.63161 8.1194 10.25 7.33783 10.25 6.366H8.75C8.75 6.66562 8.55146 6.99161 8.18057 7.18565L8.8759 8.51475ZM15.8194 7.18565C15.4485 6.99162 15.25 6.66562 15.25 6.366H13.75C13.75 7.33783 14.3684 8.1194 15.1241 8.51475L15.8194 7.18565Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 2H16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 11.1482C5.5 11.1482 8.5 10.2223 11 12.9998M18.5 11.6111C18.5 11.6111 17.8884 12.5903 17 13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10 18.002L10.0087 17.9996"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.002L14.0087 13.9996"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
