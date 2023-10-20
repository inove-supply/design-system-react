export const UploadSquare02Icon = ({
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
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M16 7.75C16.4142 7.75 16.75 7.41421 16.75 7C16.75 6.58579 16.4142 6.25 16 6.25V7.75ZM8 6.25C7.58579 6.25 7.25 6.58579 7.25 7C7.25 7.41421 7.58579 7.75 8 7.75L8 6.25ZM8.96087 11.6622C8.67292 11.9599 8.68086 12.4347 8.97862 12.7227C9.27637 13.0106 9.75118 13.0027 10.0391 12.7049L8.96087 11.6622ZM10.6742 10.9694L10.135 10.448L10.135 10.448L10.6742 10.9694ZM13.3258 10.9694L13.865 10.448L13.865 10.448L13.3258 10.9694ZM13.9609 12.7049C14.2488 13.0027 14.7236 13.0106 15.0214 12.7227C15.3191 12.4347 15.3271 11.9599 15.0391 11.6622L13.9609 12.7049ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM16 6.25L8 6.25L8 7.75L16 7.75V6.25ZM10.0391 12.7049L11.2133 11.4908L10.135 10.448L8.96087 11.6622L10.0391 12.7049ZM12.7867 11.4908L13.9609 12.7049L15.0391 11.6622L13.865 10.448L12.7867 11.4908ZM11.2133 11.4908C11.5407 11.1522 11.7346 10.9541 11.8904 10.8312C12.03 10.721 12.0436 10.75 12 10.75V9.25C11.5681 9.25 11.2313 9.44053 10.9613 9.65354C10.7075 9.85377 10.4326 10.1403 10.135 10.448L11.2133 11.4908ZM13.865 10.448C13.5674 10.1403 13.2925 9.85377 13.0387 9.65354C12.7687 9.44053 12.4319 9.25 12 9.25V10.75C11.9564 10.75 11.97 10.721 12.1096 10.8312C12.2654 10.9541 12.4593 11.1522 12.7867 11.4908L13.865 10.448ZM11.25 10L11.25 17H12.75L12.75 10H11.25Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
