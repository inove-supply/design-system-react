export const TwoFinger02Icon = ({
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
        d="M19.5 12.1923H20.25L20.25 12.1916L19.5 12.1923ZM5.56729 16.9792L4.94679 17.4005C4.9577 17.4166 4.96923 17.4322 4.98135 17.4474L5.56729 16.9792ZM7.56252 19.4764L8.14846 19.0083L7.56252 19.4764ZM6.0343 10.3747L5.51704 9.83164C5.50364 9.8444 5.49071 9.85766 5.47829 9.87138L6.0343 10.3747ZM7.99493 9.54309C8.29487 9.25741 8.30643 8.78268 8.02076 8.48274C7.73508 8.1828 7.26035 8.17124 6.96041 8.45691L7.99493 9.54309ZM4.00519 13.9372L3.25651 13.9817L4.00519 13.9372ZM4.05904 13.1756L3.32406 13.0262L4.05904 13.1756ZM19.2083 17.668L19.9139 17.9223V17.9223L19.2083 17.668ZM13.5 8.25C13.0858 8.25 12.75 8.58579 12.75 9C12.75 9.41421 13.0858 9.75 13.5 9.75V8.25ZM15.75 12C15.75 12.4142 16.0858 12.75 16.5 12.75C16.9142 12.75 17.25 12.4142 17.25 12H15.75ZM16.5 10L16.6233 9.2602C16.4058 9.22396 16.1834 9.28523 16.0152 9.42773C15.847 9.57024 15.75 9.77954 15.75 10H16.5ZM17.8288 10.2215L17.9521 9.48167L17.9521 9.48167L17.8288 10.2215ZM7.25 22C7.25 22.4142 7.58579 22.75 8 22.75C8.41421 22.75 8.75 22.4142 8.75 22H7.25ZM18.1916 19.3462L17.6389 18.8392H17.6389L18.1916 19.3462ZM16.6804 22C16.6804 22.4142 17.0161 22.75 17.4304 22.75C17.8446 22.75 18.1804 22.4142 18.1804 22H16.6804ZM12.7498 11C12.7498 11.4142 13.0856 11.75 13.4998 11.75C13.914 11.75 14.2498 11.4142 14.2498 11H12.7498ZM10.4998 3.5L11.2498 3.51107V3.5H10.4998ZM6.74979 13.4644C6.75088 13.8786 7.08754 14.2135 7.50175 14.2124C7.91596 14.2114 8.25087 13.8747 8.24979 13.4605L6.74979 13.4644ZM7.47767 5H6.72767L6.72767 5.00196L7.47767 5ZM10.4777 4.99936L9.72766 4.99967L9.72768 5.00271L10.4777 4.99936ZM9.75001 10.0033C9.75186 10.4176 10.0891 10.7518 10.5033 10.75C10.9176 10.7481 11.2518 10.4109 11.25 9.99665L9.75001 10.0033ZM4.98135 17.4474L6.97657 19.9446L8.14846 19.0083L6.15323 16.511L4.98135 17.4474ZM6.55156 10.9178L7.99493 9.54309L6.96041 8.45691L5.51704 9.83164L6.55156 10.9178ZM6.18779 16.5579C5.67498 15.8026 5.32104 15.2799 5.08415 14.846C4.85404 14.4245 4.76895 14.1465 4.75387 13.8927L3.25651 13.9817C3.28969 14.5402 3.48104 15.04 3.76761 15.5648C4.0474 16.0773 4.45038 16.6693 4.94679 17.4005L6.18779 16.5579ZM5.47829 9.87138C4.88366 10.5282 4.40143 11.0597 4.05239 11.529C3.69502 12.0095 3.43545 12.478 3.32406 13.0262L4.79403 13.3249C4.84477 13.0751 4.96846 12.8108 5.25599 12.4242C5.55186 12.0264 5.97619 11.5564 6.59031 10.8781L5.47829 9.87138ZM4.75387 13.8927C4.74257 13.7026 4.75605 13.5118 4.79403 13.3249L3.32406 13.0262C3.2602 13.3405 3.23749 13.6616 3.25651 13.9817L4.75387 13.8927ZM18.75 13.8347C18.75 15.9151 18.7388 16.7586 18.5027 17.4137L19.9139 17.9223C20.2612 16.9586 20.25 15.7862 20.25 13.8347H18.75ZM13.5 9.75H14.5V8.25H13.5V9.75ZM15.75 11V12H17.25V11H15.75ZM14.5 9.75C15.1904 9.75 15.75 10.3096 15.75 11H17.25C17.25 9.48122 16.0188 8.25 14.5 8.25V9.75ZM17.25 11V10H15.75V11H17.25ZM16.3767 10.7398L17.7055 10.9613L17.9521 9.48167L16.6233 9.2602L16.3767 10.7398ZM17.7055 10.9613C18.3078 11.0616 18.7494 11.5825 18.75 12.193L20.25 12.1916C20.2487 10.8484 19.2772 9.70253 17.9521 9.48167L17.7055 10.9613ZM7.25 20.7248V22H8.75V20.7248H7.25ZM18.5027 17.4137C18.311 17.9458 18.0156 18.4286 17.6389 18.8392L18.7442 19.8532C19.2529 19.2987 19.6535 18.6449 19.9139 17.9223L18.5027 17.4137ZM16.6804 21.0449V22H18.1804V21.0449H16.6804ZM17.6389 18.8392C17.137 19.3863 16.6804 20.1443 16.6804 21.0449H18.1804C18.1804 20.663 18.3791 20.2512 18.7442 19.8532L17.6389 18.8392ZM6.97657 19.9446C7.15358 20.1661 7.25 20.4413 7.25 20.7248H8.75C8.75 20.101 8.53788 19.4957 8.14846 19.0083L6.97657 19.9446ZM18.75 12.1923V13.8347H20.25V12.1923H18.75ZM12.7498 3.5V11H14.2498V3.5H12.7498ZM11.9998 2.75C12.414 2.75 12.7498 3.08579 12.7498 3.5H14.2498C14.2498 2.25736 13.2424 1.25 11.9998 1.25V2.75ZM11.2498 3.5C11.2498 3.08579 11.5856 2.75 11.9998 2.75V1.25C10.7572 1.25 9.74979 2.25736 9.74979 3.5H11.2498ZM8.24979 13.4605L8.22767 4.99804L6.72767 5.00196L6.74979 13.4644L8.24979 13.4605ZM8.97767 4.25C9.39178 4.25 9.7275 4.58561 9.72767 4.99967L11.2277 4.99905C11.2272 3.75684 10.22 2.75 8.97767 2.75V4.25ZM8.22767 5C8.22767 4.58579 8.56346 4.25 8.97767 4.25V2.75C7.73503 2.75 6.72767 3.75736 6.72767 5H8.22767ZM9.72768 5.00271L9.75001 10.0033L11.25 9.99665L11.2277 4.99601L9.72768 5.00271ZM9.74987 3.48894L9.72775 4.9883L11.2276 5.01042L11.2497 3.51106L9.74987 3.48894Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
