export const DownloadSquare02Icon = ({
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
        d="M8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75L8 16.25ZM16 17.75C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25V17.75ZM15.0391 12.3378C15.3271 12.0401 15.3191 11.5653 15.0214 11.2773C14.7236 10.9894 14.2488 10.9973 13.9609 11.2951L15.0391 12.3378ZM13.3258 13.0306L13.865 13.552L13.865 13.552L13.3258 13.0306ZM10.6742 13.0306L10.135 13.552L10.135 13.552L10.6742 13.0306ZM10.0391 11.2951C9.75118 10.9973 9.27637 10.9894 8.97862 11.2773C8.68086 11.5653 8.67292 12.0401 8.96087 12.3378L10.0391 11.2951ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L12.75 7ZM8 17.75L16 17.75V16.25L8 16.25L8 17.75ZM13.9609 11.2951L12.7867 12.5092L13.865 13.552L15.0391 12.3378L13.9609 11.2951ZM11.2133 12.5092L10.0391 11.2951L8.96087 12.3378L10.135 13.552L11.2133 12.5092ZM12.7867 12.5092C12.4593 12.8478 12.2654 13.0459 12.1096 13.1688C11.97 13.279 11.9564 13.25 12 13.25L12 14.75C12.4319 14.75 12.7687 14.5595 13.0387 14.3465C13.2925 14.1462 13.5674 13.8597 13.865 13.552L12.7867 12.5092ZM10.135 13.552C10.4326 13.8597 10.7075 14.1462 10.9613 14.3465C11.2313 14.5595 11.5681 14.75 12 14.75L12 13.25C12.0436 13.25 12.03 13.279 11.8904 13.1688C11.7346 13.0459 11.5407 12.8478 11.2133 12.5092L10.135 13.552ZM12.75 14L12.75 7L11.25 7L11.25 14H12.75Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
