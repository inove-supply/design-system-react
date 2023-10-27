export const TextSquareIcon = ({
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
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M15.6311 7.41383L15.8012 6.68338V6.68338L15.6311 7.41383ZM8.36891 7.41383L8.53904 8.14428L8.36891 7.41383ZM7.35492 7.80063L7.86535 8.35014L7.86535 8.35014L7.35492 7.80063ZM6.25 9.22222C6.25 9.63644 6.58579 9.97222 7 9.97222C7.41421 9.97222 7.75 9.63644 7.75 9.22222H6.25ZM7.14671 8.06291L6.49574 7.69044L6.49574 7.69044L7.14671 8.06291ZM16.6451 7.80063L17.1555 7.25112L17.1555 7.25112L16.6451 7.80063ZM16.25 9.22222C16.25 9.63644 16.5858 9.97222 17 9.97222C17.4142 9.97222 17.75 9.63644 17.75 9.22222H16.25ZM16.8533 8.06291L16.2023 8.43538L16.2023 8.43538L16.8533 8.06291ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM13.6667 17.75C14.0809 17.75 14.4167 17.4142 14.4167 17C14.4167 16.5858 14.0809 16.25 13.6667 16.25V17.75ZM10.3333 16.25C9.91912 16.25 9.58333 16.5858 9.58333 17C9.58333 17.4142 9.91912 17.75 10.3333 17.75V16.25ZM12 7.75C13.1973 7.75 14.3572 7.8872 15.461 8.14428L15.8012 6.68338C14.5861 6.40037 13.3121 6.25 12 6.25V7.75ZM8.53904 8.14428C9.6428 7.8872 10.8027 7.75 12 7.75V6.25C10.6879 6.25 9.4139 6.40037 8.19878 6.68338L8.53904 8.14428ZM8.19878 6.68338C7.73529 6.79133 7.23842 6.88521 6.8445 7.25112L7.86535 8.35014C7.87833 8.33808 7.90031 8.31813 7.99184 8.28604C8.10468 8.24647 8.25817 8.20969 8.53904 8.14428L8.19878 6.68338ZM7.75 9.22222C7.75 8.90654 7.75087 8.72447 7.76458 8.58796C7.77649 8.4694 7.79372 8.4423 7.79768 8.43538L6.49574 7.69044C6.35299 7.93992 6.29686 8.19151 6.2721 8.43802C6.24913 8.66658 6.25 8.93597 6.25 9.22222H7.75ZM6.8445 7.25112C6.71237 7.37385 6.5853 7.53391 6.49574 7.69044L7.79768 8.43538C7.81197 8.41041 7.84427 8.36973 7.86535 8.35014L6.8445 7.25112ZM15.461 8.14428C15.7418 8.20969 15.8953 8.24647 16.0082 8.28604C16.0997 8.31813 16.1217 8.33808 16.1347 8.35014L17.1555 7.25112C16.7616 6.88521 16.2647 6.79133 15.8012 6.68338L15.461 8.14428ZM17.75 9.22222C17.75 8.93597 17.7509 8.66658 17.7279 8.43802C17.7031 8.19151 17.647 7.93992 17.5043 7.69044L16.2023 8.43538C16.2063 8.4423 16.2235 8.4694 16.2354 8.58796C16.2491 8.72447 16.25 8.90654 16.25 9.22222H17.75ZM16.1346 8.35014C16.1557 8.36973 16.188 8.41041 16.2023 8.43538L17.5043 7.69044C17.4147 7.53391 17.2876 7.37385 17.1555 7.25112L16.1346 8.35014ZM11.25 7V17H12.75V7H11.25ZM13.6667 16.25H10.3333V17.75H13.6667V16.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
