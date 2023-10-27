export const LogoutCircle02Icon = ({
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
        d="M16.75 9C16.75 8.58579 16.4142 8.25 16 8.25C15.5858 8.25 15.25 8.58579 15.25 9H16.75ZM15.25 15C15.25 15.4142 15.5858 15.75 16 15.75C16.4142 15.75 16.75 15.4142 16.75 15H15.25ZM10.6259 13.4433C10.3184 13.7208 10.2941 14.195 10.5716 14.5025C10.8492 14.81 11.3234 14.8343 11.6309 14.5567L10.6259 13.4433ZM12.1691 13.0607L12.6716 13.6174L12.6716 13.6174L12.1691 13.0607ZM12.1691 10.9393L12.6716 10.3826L12.1691 10.9393ZM11.6309 9.44325C11.3234 9.16572 10.8492 9.18999 10.5716 9.49747C10.2941 9.80496 10.3184 10.2792 10.6259 10.5567L11.6309 9.44325ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75L7 11.25ZM15.25 9V15H16.75V9H15.25ZM11.6309 14.5567L12.6716 13.6174L11.6666 12.5039L10.6259 13.4433L11.6309 14.5567ZM12.6716 10.3826L11.6309 9.44325L10.6259 10.5567L11.6666 11.4961L12.6716 10.3826ZM12.6716 13.6174C12.9324 13.382 13.186 13.1553 13.3651 12.9435C13.5554 12.7183 13.75 12.41 13.75 12H12.25C12.25 11.9007 12.3061 11.8727 12.2195 11.9752C12.1215 12.091 11.9597 12.2393 11.6666 12.5039L12.6716 13.6174ZM11.6666 11.4961C11.9597 11.7607 12.1215 11.909 12.2195 12.0248C12.3061 12.1273 12.25 12.0993 12.25 12H13.75C13.75 11.59 13.5554 11.2817 13.3651 11.0565C13.186 10.8447 12.9324 10.618 12.6716 10.3826L11.6666 11.4961ZM13 11.25L7 11.25L7 12.75L13 12.75V11.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
