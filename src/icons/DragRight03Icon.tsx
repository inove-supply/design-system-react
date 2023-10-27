export const DragRight03Icon = ({
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
        d="M12.5457 9.72218H13.485C14.5226 9.72218 15.3638 10.5679 15.3638 11.6111M15.3638 11.6111V12.5555M15.3638 11.6111C15.3638 11.0895 15.7843 10.6666 16.3031 10.6666C17.3407 10.6666 18.1819 11.5123 18.1819 12.5555M18.1819 12.5555V13.4999M18.1819 12.5555C18.1819 12.0611 18.6234 11.685 19.1085 11.7663L19.4301 11.8202C20.336 11.972 21 12.76 21 13.6834L20.9996 14.1297C20.9996 16.1823 20.9996 17.2086 20.6886 18.0257C20.5082 18.4996 20.0323 19.1041 19.6518 19.5409C19.3226 19.9187 19.1209 20.3979 19.1209 20.9001V22M12.5455 11.6111V6.41665C12.5455 5.63426 11.9146 5 11.1364 5C10.3582 5 9.72736 5.63426 9.72736 6.41665L9.72717 13.9367L8.2051 12.4016C7.53728 11.728 6.43723 11.7895 5.84724 12.5333C5.3958 13.1024 5.38333 13.9075 5.81692 14.4906L9.19837 18.8333C9.84533 19.6641 10.1969 20.9448 10.1969 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6.75C14.5858 6.75 14.25 6.41421 14.25 6C14.25 5.58579 14.5858 5.25 15 5.25V6.75ZM19.1716 7L19.6585 7.57045H19.6585L19.1716 7ZM18.4869 8.57045C18.1719 8.83937 17.6985 8.80196 17.4295 8.48691C17.1606 8.17186 17.198 7.69846 17.5131 7.42955L18.4869 8.57045ZM17.5131 4.57045C17.198 4.30154 17.1606 3.82814 17.4295 3.51309C17.6985 3.19804 18.1719 3.16063 18.4869 3.42955L17.5131 4.57045ZM19.1716 5L19.6585 4.42955L19.6585 4.42955L19.1716 5ZM20 6.75H15V5.25H20V6.75ZM19.6585 7.57045L18.4869 8.57045L17.5131 7.42955L18.6847 6.42955L19.6585 7.57045ZM18.4869 3.42955L19.6585 4.42955L18.6847 5.57045L17.5131 4.57045L18.4869 3.42955ZM18.6847 6.42955C18.9776 6.1795 19.1375 6.04083 19.2337 5.93323C19.3204 5.83631 19.25 5.87739 19.25 6H20.75C20.75 6.41551 20.5416 6.72088 20.3521 6.93289C20.1721 7.13422 19.9178 7.3491 19.6585 7.57045L18.6847 6.42955ZM19.6585 4.42955C19.9178 4.6509 20.1721 4.86579 20.3521 5.06711C20.5416 5.27912 20.75 5.5845 20.75 6H19.25C19.25 6.12261 19.3204 6.16369 19.2337 6.06677C19.1375 5.95917 18.9776 5.8205 18.6847 5.57045L19.6585 4.42955Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.938 9.5C14.1677 8.81764 15 7.50601 15 6C15 3.79086 13.2091 2 11 2C8.79086 2 7 3.79086 7 6C7 7.50601 7.83229 8.81764 9.062 9.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
