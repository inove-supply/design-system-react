export const FingerPrintCheckIcon = ({
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
        d="M5.92857 20.6058C3.85602 19.1977 2.5 16.8583 2.5 14.2103V9.75757C2.5 8.57285 2.77144 7.44988 3.25704 6.44444M9.35714 21.9236C10.2589 22.0493 11.1494 22.0167 12 21.8493M17.7301 6.41803C15.636 2.12432 9.89955 0.664089 5.92857 3.36201M18.5 10.3333V11.5M10.5 6C12.7091 6 14.5 7.8804 14.5 10.2M6.88493 8.4C6.63811 8.94555 6.5 9.55584 6.5 10.2V13.8C6.5 16.1196 8.29086 18 10.5 18C10.6693 18 10.8362 17.989 11 17.9675M10.5 10.5V13.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4896 17.7675C16.1157 17.5892 15.6681 17.7477 15.4898 18.1215C15.3114 18.4954 15.4699 18.943 15.8437 19.1214L16.4896 17.7675ZM17.0556 19.3333L16.4094 19.7141C16.55 19.9528 16.8109 20.0945 17.0877 20.0826C17.3645 20.0708 17.6123 19.9072 17.732 19.6573L17.0556 19.3333ZM19.1888 17.7715C19.5536 17.5752 19.6901 17.1203 19.4937 16.7556C19.2974 16.3909 18.8425 16.2544 18.4778 16.4507L19.1888 17.7715ZM20.75 18C20.75 19.7949 19.2949 21.25 17.5 21.25V22.75C20.1234 22.75 22.25 20.6234 22.25 18H20.75ZM17.5 21.25C15.7051 21.25 14.25 19.7949 14.25 18H12.75C12.75 20.6234 14.8766 22.75 17.5 22.75V21.25ZM14.25 18C14.25 16.2051 15.7051 14.75 17.5 14.75V13.25C14.8766 13.25 12.75 15.3766 12.75 18H14.25ZM17.5 14.75C19.2949 14.75 20.75 16.2051 20.75 18H22.25C22.25 15.3766 20.1234 13.25 17.5 13.25V14.75ZM16.1667 18.4444C15.8437 19.1214 15.8435 19.1212 15.8432 19.1211C15.8432 19.1211 15.8429 19.121 15.8428 19.1209C15.8425 19.1207 15.8422 19.1206 15.8419 19.1205C15.8413 19.1202 15.8407 19.1199 15.8401 19.1196C15.8391 19.1191 15.8381 19.1186 15.8372 19.1182C15.8355 19.1174 15.8342 19.1167 15.8334 19.1163C15.8317 19.1155 15.8318 19.1154 15.8333 19.1163C15.8365 19.118 15.8458 19.1231 15.8602 19.1319C15.889 19.1496 15.9372 19.1814 15.9962 19.2293C16.1146 19.3251 16.2724 19.4816 16.4094 19.7141L17.7017 18.9526C17.4577 18.5385 17.1711 18.2505 16.9403 18.0636C16.8247 17.97 16.7221 17.9008 16.6438 17.8529C16.6046 17.8289 16.5712 17.81 16.5451 17.7959C16.5321 17.7889 16.5208 17.7831 16.5115 17.7783C16.5069 17.776 16.5027 17.7739 16.499 17.7721C16.4972 17.7712 16.4955 17.7704 16.4939 17.7696C16.4931 17.7692 16.4924 17.7689 16.4917 17.7685C16.4913 17.7683 16.491 17.7682 16.4906 17.768C16.4904 17.7679 16.4902 17.7678 16.4901 17.7678C16.4898 17.7676 16.4896 17.7675 16.1667 18.4444ZM17.0556 19.3333C17.732 19.6573 17.7319 19.6574 17.7319 19.6575C17.7319 19.6575 17.7318 19.6576 17.7318 19.6577C17.7317 19.6578 17.7317 19.6579 17.7317 19.6579C17.7316 19.658 17.7316 19.658 17.7317 19.6579C17.7318 19.6577 17.7321 19.6571 17.7326 19.6561C17.7335 19.6541 17.7353 19.6506 17.7377 19.6456C17.7426 19.6356 17.7505 19.6198 17.7611 19.5989C17.7824 19.557 17.8147 19.4949 17.8566 19.418C17.9409 19.2635 18.0621 19.0532 18.2097 18.8297C18.5274 18.3488 18.8854 17.9348 19.1888 17.7715L18.4778 16.4507C17.82 16.8049 17.2891 17.502 16.9582 18.0029C16.7815 18.2703 16.6386 18.5185 16.5397 18.6998C16.4901 18.7908 16.451 18.8659 16.4239 18.9193C16.4103 18.946 16.3997 18.9673 16.3922 18.9826C16.3884 18.9902 16.3855 18.9963 16.3833 19.0008C16.3822 19.003 16.3813 19.0049 16.3806 19.0063C16.3803 19.007 16.38 19.0076 16.3797 19.0081C16.3796 19.0084 16.3795 19.0086 16.3794 19.0088C16.3793 19.0089 16.3793 19.0091 16.3793 19.0091C16.3792 19.0092 16.3791 19.0094 17.0556 19.3333Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
