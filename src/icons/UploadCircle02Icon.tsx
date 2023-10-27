export const UploadCircle02Icon = ({
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
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M15 8.75C15.4142 8.75 15.75 8.41421 15.75 8C15.75 7.58579 15.4142 7.25 15 7.25V8.75ZM9 7.25C8.58579 7.25 8.25 7.58579 8.25 8C8.25 8.41421 8.58579 8.75 9 8.75L9 7.25ZM9.44325 12.3691C9.16572 12.6766 9.18999 13.1508 9.49747 13.4284C9.80496 13.7059 10.2792 13.6816 10.5567 13.3741L9.44325 12.3691ZM10.9393 11.8309L10.3826 11.3284L10.9393 11.8309ZM13.0607 11.8309L12.5039 12.3334H12.5039L13.0607 11.8309ZM13.4433 13.3741C13.7208 13.6816 14.195 13.7059 14.5025 13.4284C14.81 13.1508 14.8343 12.6766 14.5567 12.3691L13.4433 13.3741ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM15 7.25L9 7.25L9 8.75L15 8.75V7.25ZM10.5567 13.3741L11.4961 12.3334L10.3826 11.3284L9.44325 12.3691L10.5567 13.3741ZM12.5039 12.3334L13.4433 13.3741L14.5567 12.3691L13.6174 11.3284L12.5039 12.3334ZM11.4961 12.3334C11.7607 12.0403 11.909 11.8785 12.0248 11.7805C12.1273 11.6939 12.0993 11.75 12 11.75V10.25C11.59 10.25 11.2817 10.4446 11.0565 10.6349C10.8447 10.814 10.618 11.0676 10.3826 11.3284L11.4961 12.3334ZM13.6174 11.3284C13.382 11.0676 13.1553 10.814 12.9435 10.6349C12.7183 10.4446 12.41 10.25 12 10.25V11.75C11.9007 11.75 11.8727 11.6939 11.9752 11.7805C12.091 11.8785 12.2393 12.0403 12.5039 12.3334L13.6174 11.3284ZM11.25 11L11.25 17H12.75L12.75 11H11.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
