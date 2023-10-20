export const IdVerifiedIcon = ({
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
        d="M7.5 18C8.41684 17.0229 9.72299 16.5115 11.0315 16.5002M13 12C13 13.1046 12.1187 14 11.0315 14C9.94438 14 9.06307 13.1046 9.06307 12C9.06307 10.8954 9.94438 10 11.0315 10C12.1187 10 13 10.8954 13 12Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.5 4.00098C5.85561 4.01083 4.44101 4.1033 3.52513 4.97097C2.5 5.94215 2.5 7.50522 2.5 10.6314V15.3682C2.5 18.4944 2.5 20.0575 3.52513 21.0286C4.55025 21.9998 6.20017 21.9998 9.5 21.9998H11.5M13.5 4.00098C16.1444 4.01083 17.559 4.1033 18.4749 4.97097C19.5 5.94215 19.5 7.50522 19.5 10.6314V11.4998"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.77216 3.63163C8.8681 3.21682 8.91608 3.00942 9.00821 2.84004C9.22285 2.44546 9.61879 2.15548 10.0914 2.0467C10.2943 2 10.5296 2 11 2C11.4704 2 11.7057 2 11.9086 2.0467C12.3812 2.15548 12.7771 2.44545 12.9918 2.84004C13.0839 3.00942 13.1319 3.21682 13.2278 3.63163L13.3111 3.99176C13.4813 4.72744 13.5664 5.09528 13.438 5.37824C13.3549 5.5615 13.2132 5.71842 13.031 5.82911C12.7496 6 12.3324 6 11.4981 6H10.5019C9.66755 6 9.25038 6 8.96901 5.82911C8.78677 5.71842 8.6451 5.5615 8.56197 5.37824C8.43361 5.09528 8.51869 4.72744 8.68886 3.99176L8.77216 3.63163Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M16.4896 17.7675C16.1157 17.5892 15.6681 17.7477 15.4898 18.1215C15.3114 18.4954 15.4699 18.943 15.8437 19.1214L16.4896 17.7675ZM17.0556 19.3333L16.4094 19.7141C16.55 19.9528 16.8109 20.0945 17.0877 20.0826C17.3645 20.0708 17.6123 19.9072 17.732 19.6573L17.0556 19.3333ZM19.1888 17.7715C19.5536 17.5752 19.6901 17.1203 19.4937 16.7556C19.2974 16.3909 18.8425 16.2544 18.4778 16.4507L19.1888 17.7715ZM20.75 18C20.75 19.7949 19.2949 21.25 17.5 21.25V22.75C20.1234 22.75 22.25 20.6234 22.25 18H20.75ZM17.5 21.25C15.7051 21.25 14.25 19.7949 14.25 18H12.75C12.75 20.6234 14.8766 22.75 17.5 22.75V21.25ZM14.25 18C14.25 16.2051 15.7051 14.75 17.5 14.75V13.25C14.8766 13.25 12.75 15.3766 12.75 18H14.25ZM17.5 14.75C19.2949 14.75 20.75 16.2051 20.75 18H22.25C22.25 15.3766 20.1234 13.25 17.5 13.25V14.75ZM16.1667 18.4444C15.8437 19.1214 15.8435 19.1212 15.8432 19.1211C15.8432 19.1211 15.8429 19.121 15.8428 19.1209C15.8425 19.1207 15.8422 19.1206 15.8419 19.1205C15.8413 19.1202 15.8407 19.1199 15.8401 19.1196C15.8391 19.1191 15.8381 19.1186 15.8372 19.1182C15.8355 19.1174 15.8342 19.1167 15.8334 19.1163C15.8317 19.1155 15.8318 19.1154 15.8333 19.1163C15.8365 19.118 15.8458 19.1231 15.8602 19.1319C15.889 19.1496 15.9372 19.1814 15.9962 19.2293C16.1146 19.3251 16.2724 19.4816 16.4094 19.7141L17.7017 18.9526C17.4577 18.5385 17.1711 18.2505 16.9403 18.0636C16.8247 17.97 16.7221 17.9008 16.6438 17.8529C16.6046 17.8289 16.5712 17.81 16.5451 17.7959C16.5321 17.7889 16.5208 17.7831 16.5115 17.7783C16.5069 17.776 16.5027 17.7739 16.499 17.7721C16.4972 17.7712 16.4955 17.7704 16.4939 17.7696C16.4931 17.7692 16.4924 17.7689 16.4917 17.7685C16.4913 17.7683 16.491 17.7682 16.4906 17.768C16.4904 17.7679 16.4902 17.7678 16.4901 17.7678C16.4898 17.7676 16.4896 17.7675 16.1667 18.4444ZM17.0556 19.3333C17.732 19.6573 17.7319 19.6574 17.7319 19.6575C17.7319 19.6575 17.7318 19.6576 17.7318 19.6577C17.7317 19.6578 17.7317 19.6579 17.7317 19.6579C17.7316 19.658 17.7316 19.658 17.7317 19.6579C17.7318 19.6577 17.7321 19.6571 17.7326 19.6561C17.7335 19.6541 17.7353 19.6506 17.7377 19.6456C17.7426 19.6356 17.7505 19.6198 17.7611 19.5989C17.7824 19.557 17.8147 19.4949 17.8566 19.418C17.9409 19.2635 18.0621 19.0532 18.2097 18.8297C18.5274 18.3488 18.8854 17.9348 19.1888 17.7715L18.4778 16.4507C17.82 16.8049 17.2891 17.502 16.9582 18.0029C16.7815 18.2703 16.6386 18.5185 16.5397 18.6998C16.4901 18.7908 16.451 18.8659 16.4239 18.9193C16.4103 18.946 16.3997 18.9673 16.3922 18.9826C16.3884 18.9902 16.3855 18.9963 16.3833 19.0008C16.3822 19.003 16.3813 19.0049 16.3806 19.0063C16.3803 19.007 16.38 19.0076 16.3797 19.0081C16.3796 19.0084 16.3795 19.0086 16.3794 19.0088C16.3793 19.0089 16.3793 19.0091 16.3793 19.0091C16.3792 19.0092 16.3791 19.0094 17.0556 19.3333Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
