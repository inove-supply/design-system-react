export const XVariableCircleIcon = ({
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
        d="M8 14.25C7.58579 14.25 7.25 14.5858 7.25 15C7.25 15.4142 7.58579 15.75 8 15.75V14.25ZM16 9.75C16.4142 9.75 16.75 9.41421 16.75 9C16.75 8.58579 16.4142 8.25 16 8.25V9.75ZM11.2685 10.5077L11.9419 10.1776V10.1776L11.2685 10.5077ZM12.7315 13.4923L13.405 13.1622H13.405L12.7315 13.4923ZM13.4376 14.5967L13.8992 14.0056L13.8992 14.0056L13.4376 14.5967ZM15.5294 15.75C15.9436 15.75 16.2794 15.4142 16.2794 15C16.2794 14.5858 15.9436 14.25 15.5294 14.25V15.75ZM13.9622 14.8794L13.7139 15.5871L13.7139 15.5871L13.9622 14.8794ZM8.47059 8.25C8.05637 8.25 7.72059 8.58579 7.72059 9C7.72059 9.41421 8.05637 9.75 8.47059 9.75V8.25ZM10.0378 9.12061L9.78948 9.82832L9.78948 9.82832L10.0378 9.12061ZM10.5624 9.40333L10.1008 9.9944L10.1008 9.9944L10.5624 9.40333ZM8 15.75C9.04868 15.75 9.91657 15.2519 10.636 14.6298C11.348 14.0141 11.9936 13.206 12.5849 12.4695C13.1977 11.706 13.7562 11.0141 14.3452 10.5048C14.9268 10.0019 15.4568 9.75 16 9.75V8.25C14.9513 8.25 14.0834 8.74812 13.364 9.37018C12.652 9.98592 12.0064 10.794 11.4151 11.5305C10.8023 12.294 10.2438 12.9859 9.65485 13.4952C9.07322 13.9981 8.54315 14.25 8 14.25V15.75ZM10.595 10.8378L12.0581 13.8224L13.405 13.1622L11.9419 10.1776L10.595 10.8378ZM12.0581 13.8224C12.3216 14.36 12.5425 14.8492 12.9759 15.1877L13.8992 14.0056C13.7989 13.9272 13.727 13.8191 13.405 13.1622L12.0581 13.8224ZM15.5294 14.25C14.6548 14.25 14.4042 14.2396 14.2105 14.1717L13.7139 15.5871C14.2078 15.7604 14.7728 15.75 15.5294 15.75V14.25ZM12.9759 15.1877C13.1965 15.36 13.4475 15.4936 13.7139 15.5871L14.2105 14.1717C14.0864 14.1281 13.9818 14.0701 13.8992 14.0056L12.9759 15.1877ZM8.47059 9.75C9.34521 9.75 9.59583 9.76038 9.78948 9.82832L10.2861 8.41291C9.79216 8.23962 9.22717 8.25 8.47059 8.25V9.75ZM11.9419 10.1776C11.6784 9.64 11.4575 9.15077 11.0241 8.81226L10.1008 9.9944C10.2011 10.0728 10.273 10.1809 10.595 10.8378L11.9419 10.1776ZM9.78948 9.82832C9.9136 9.87187 10.0182 9.92989 10.1008 9.9944L11.0241 8.81226C10.8035 8.63995 10.5525 8.50638 10.2861 8.41291L9.78948 9.82832Z"
        strokeWidth={strokeWidth}
      />
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
    </svg>
  )
}
