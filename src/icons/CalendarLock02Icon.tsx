export const CalendarLock02Icon = ({
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
        d="M18 2V4M6 2V4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.65048 14.3126C9.6505 14.7268 9.98631 15.0626 10.4005 15.0625C10.8147 15.0625 11.1505 14.7267 11.1505 14.3125L9.65048 14.3126ZM10.4004 13L9.65039 13.0001L10.4004 13ZM13.6002 12.9998L12.8502 12.9999V12.9999L13.6002 12.9998ZM12.8503 14.3126C12.8503 14.7268 13.1861 15.0626 13.6003 15.0625C14.0146 15.0625 14.3503 14.7267 14.3503 14.3125L12.8503 14.3126ZM14.8996 15.4502L15.6423 15.3462L14.8996 15.4502ZM13.6651 14.3482L13.6982 13.599L13.6651 14.3482ZM13.6651 18.9643L13.6982 19.7135L13.6651 18.9643ZM14.8996 17.8623L14.1568 17.7583L14.8996 17.8623ZM10.3349 14.3482L10.368 15.0975L10.3349 14.3482ZM9.10043 15.4502L8.35768 15.3462L9.10043 15.4502ZM10.3349 18.9643L10.368 18.215L10.3349 18.9643ZM9.10043 17.8623L9.84318 17.7583L9.10043 17.8623ZM11.1505 14.3125L11.1504 13L9.65039 13.0001L9.65048 14.3126L11.1505 14.3125ZM12.8502 12.9999L12.8503 14.3126L14.3503 14.3125L14.3502 12.9998L12.8502 12.9999ZM14.3502 12.9998C14.3501 11.7124 13.2517 10.75 12.0003 10.75V12.25C12.516 12.25 12.8502 12.6306 12.8502 12.9999L14.3502 12.9998ZM11.1504 13C11.1504 12.6306 11.4846 12.25 12.0003 12.25V10.75C10.7488 10.75 9.65031 11.7125 9.65039 13.0001L11.1504 13ZM12 18.25C11.4165 18.25 10.8879 18.238 10.368 18.215L10.3018 19.7135C10.8443 19.7375 11.395 19.75 12 19.75V18.25ZM13.632 18.215C13.1121 18.238 12.5835 18.25 12 18.25V19.75C12.605 19.75 13.1557 19.7375 13.6982 19.7135L13.632 18.215ZM15.6423 17.9663C15.6989 17.5626 15.75 17.119 15.75 16.6562H14.25C14.25 17.0139 14.2104 17.3759 14.1568 17.7583L15.6423 17.9663ZM15.75 16.6562C15.75 16.1935 15.6989 15.7499 15.6423 15.3462L14.1568 15.5542C14.2104 15.9366 14.25 16.2986 14.25 16.6562H15.75ZM12 15.0625C12.5835 15.0625 13.1121 15.0745 13.632 15.0975L13.6982 13.599C13.1557 13.575 12.605 13.5625 12 13.5625V15.0625ZM10.368 15.0975C10.8879 15.0745 11.4165 15.0625 12 15.0625V13.5625C11.395 13.5625 10.8443 13.575 10.3018 13.599L10.368 15.0975ZM8.35768 15.3462C8.30114 15.7499 8.25 16.1935 8.25 16.6562H9.75C9.75 16.2986 9.78964 15.9366 9.84318 15.5542L8.35768 15.3462ZM8.25 16.6562C8.25 17.119 8.30114 17.5626 8.35768 17.9663L9.84318 17.7583C9.78964 17.3759 9.75 17.0139 9.75 16.6562H8.25ZM15.6423 15.3462C15.5067 14.3777 14.6824 13.6425 13.6982 13.599L13.632 15.0975C13.9105 15.1098 14.1238 15.3182 14.1568 15.5542L15.6423 15.3462ZM13.6982 19.7135C14.6824 19.67 15.5067 18.9348 15.6423 17.9663L14.1568 17.7583C14.1238 17.9943 13.9105 18.2027 13.632 18.215L13.6982 19.7135ZM10.3018 13.599C9.31764 13.6425 8.49328 14.3777 8.35768 15.3462L9.84318 15.5542C9.87623 15.3182 10.0895 15.1098 10.368 15.0975L10.3018 13.599ZM10.368 18.215C10.0895 18.2027 9.87623 17.9943 9.84318 17.7583L8.35768 17.9663C8.49328 18.9348 9.31764 19.67 10.3018 19.7135L10.368 18.215Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
