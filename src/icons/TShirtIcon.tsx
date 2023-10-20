export const TShirtIcon = ({
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
        d="M6 12L6 17.6841C6 19.4952 6 20.4008 6.58579 20.9635C7.89989 22.2257 15.8558 22.4604 17.4142 20.9635C18 20.4008 18 19.4952 18 17.6841V12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.10324 5.47153L6.26847 6.20311H6.26847L6.10324 5.47153ZM5.83714 5.54068L6.056 6.25803H6.056L5.83714 5.54068ZM17.8968 5.47153L18.062 4.73996L17.8968 5.47153ZM18.1629 5.54068L17.944 6.25803L17.944 6.25803L18.1629 5.54068ZM3.23895 8.08963L3.92685 8.38844H3.92685L3.23895 8.08963ZM20.7611 8.08963L20.0731 8.38844L20.7611 8.08963ZM6.8809 4.85461L6.21384 4.51178L6.21384 4.51178L6.8809 4.85461ZM7.92444 3.07791L7.29178 2.67512V2.67512L7.92444 3.07791ZM17.1191 4.85461L17.7862 4.51178V4.51178L17.1191 4.85461ZM16.0756 3.07791L15.4429 3.4807L15.4429 3.4807L16.0756 3.07791ZM2.31692 12.4884L2.93164 12.0587L2.93164 12.0587L2.31692 12.4884ZM5.44128 14.7125C5.83476 14.8419 6.25864 14.6278 6.38805 14.2343C6.51746 13.8408 6.30339 13.417 5.90991 13.2875L5.44128 14.7125ZM21.6831 12.4884L21.0684 12.0587V12.0587L21.6831 12.4884ZM18.0901 13.2875C17.6966 13.417 17.4825 13.8408 17.6119 14.2343C17.7414 14.6278 18.1652 14.8419 18.5587 14.7125L18.0901 13.2875ZM8.12714 2.90217L7.82436 2.216L7.82436 2.21601L8.12714 2.90217ZM15.8729 2.90217L15.5701 3.58834L15.5701 3.58834L15.8729 2.90217ZM5.93801 4.73996C5.8244 4.76562 5.72177 4.79174 5.61827 4.82332L6.056 6.25803C6.11436 6.24023 6.17942 6.22322 6.26847 6.20311L5.93801 4.73996ZM17.7315 6.20311C17.8206 6.22322 17.8856 6.24023 17.944 6.25803L18.3817 4.82332C18.2782 4.79174 18.1756 4.76562 18.062 4.73996L17.7315 6.20311ZM3.92685 8.38844C4.38837 7.32593 5.03773 6.56871 6.056 6.25803L5.61827 4.82332C4.03122 5.30753 3.11442 6.49382 2.55104 7.79083L3.92685 8.38844ZM21.449 7.79083C20.8856 6.49382 19.9688 5.30753 18.3817 4.82332L17.944 6.25803C18.9623 6.56871 19.6116 7.32593 20.0731 8.38844L21.449 7.79083ZM7.54796 5.19744C7.86414 4.58225 8.36424 3.78362 8.5571 3.4807L7.29178 2.67512C7.09961 2.97697 6.56519 3.82816 6.21384 4.51178L7.54796 5.19744ZM17.7862 4.51178C17.4348 3.82816 16.9004 2.97697 16.7082 2.67512L15.4429 3.4807C15.6358 3.78362 16.1359 4.58225 16.452 5.19744L17.7862 4.51178ZM1.70219 12.9181C2.17821 13.5991 2.94581 13.9533 3.60115 14.1793C3.94043 14.2962 4.28766 14.3908 4.60004 14.4743C4.92273 14.5605 5.19931 14.6329 5.44128 14.7125L5.90991 13.2875C5.61755 13.1914 5.29049 13.1062 4.98745 13.0252C4.6741 12.9414 4.3735 12.8589 4.09006 12.7612C3.49996 12.5577 3.12256 12.3319 2.93164 12.0587L1.70219 12.9181ZM21.0684 12.0587C20.8774 12.3319 20.5 12.5577 19.9099 12.7612C19.6265 12.8589 19.3259 12.9414 19.0126 13.0252C18.7095 13.1062 18.3825 13.1914 18.0901 13.2875L18.5587 14.7125C18.8007 14.6329 19.0773 14.5605 19.4 14.4743C19.7123 14.3908 20.0596 14.2962 20.3988 14.1793C21.0542 13.9533 21.8218 13.5991 22.2978 12.9181L21.0684 12.0587ZM2.55104 7.79083C2.42379 8.08378 2.257 8.4031 2.0633 8.79415C1.87774 9.16878 1.67748 9.59055 1.52389 10.0247C1.2258 10.8673 1.0322 11.9595 1.70219 12.9181L2.93164 12.0587C2.69192 11.7158 2.68488 11.2405 2.938 10.525C3.06002 10.1801 3.22653 9.82519 3.40745 9.45994C3.58024 9.11111 3.77964 8.72735 3.92685 8.38844L2.55104 7.79083ZM20.0731 8.38844C20.2204 8.72735 20.4198 9.11111 20.5926 9.45994C20.7735 9.82519 20.94 10.1801 21.062 10.525C21.3151 11.2405 21.3081 11.7158 21.0684 12.0587L22.2978 12.9181C22.9678 11.9595 22.7742 10.8673 22.4761 10.0247C22.3225 9.59055 22.1223 9.16878 21.9367 8.79415C21.743 8.4031 21.5762 8.08378 21.449 7.79083L20.0731 8.38844ZM8.42992 3.58834C8.88249 3.38863 10.4634 2.75 12 2.75V1.25C10.134 1.25 8.31216 2.00075 7.82436 2.216L8.42992 3.58834ZM12 2.75C13.5366 2.75 15.1175 3.38863 15.5701 3.58834L16.1756 2.216C15.6878 2.00075 13.866 1.25 12 1.25V2.75ZM16.7082 2.67512C16.5831 2.47866 16.4017 2.31578 16.1756 2.216L15.5701 3.58834C15.5122 3.56281 15.4692 3.52202 15.4429 3.4807L16.7082 2.67512ZM8.5571 3.4807C8.53079 3.52202 8.48777 3.56281 8.42992 3.58833L7.82436 2.21601C7.59825 2.31578 7.41686 2.47866 7.29178 2.67512L8.5571 3.4807ZM18.062 4.73996C17.9589 4.71667 17.8515 4.63897 17.7862 4.51178L16.452 5.19744C16.703 5.68583 17.1596 6.07392 17.7315 6.20311L18.062 4.73996ZM6.26847 6.20311C6.84044 6.07392 7.29696 5.68583 7.54796 5.19744L6.21384 4.51178C6.14848 4.63897 6.04114 4.71667 5.938 4.73996L6.26847 6.20311Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M6.5 5.5L10.7335 8.79263C11.3399 9.26421 11.643 9.5 12 9.5C12.357 9.5 12.6601 9.26421 13.2665 8.79263L17.5 5.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 3L11 9M14.5 3L13 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
