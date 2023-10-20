export const LicensePinIcon = ({
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
        d="M19.9991 9C19.99 5.8857 19.8915 4.23467 18.8284 3.17157C17.6569 2 15.7712 2 12 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H12C12.7355 22 13.3993 22 14 21.9913"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2498 22C18.2498 22.4142 18.5855 22.75 18.9998 22.75C19.414 22.75 19.7498 22.4142 19.7498 22H18.2498ZM19.7498 18.8878C19.7498 18.4736 19.414 18.1378 18.9998 18.1378C18.5855 18.1378 18.2498 18.4736 18.2498 18.8878H19.7498ZM16.49 18.2268L16.8859 17.5898L16.8859 17.5898L16.49 18.2268ZM21.5095 18.2268L21.1136 17.5898H21.1136L21.5095 18.2268ZM17.4755 13.5104L16.7547 13.7178L16.7547 13.7178L17.4755 13.5104ZM20.524 13.5104L21.2448 13.7178V13.7178L20.524 13.5104ZM16.8845 15.9638L17.3622 16.5419H17.3622L16.8845 15.9638ZM21.1015 15.9577L20.6283 16.5396L21.1015 15.9577ZM17.9511 12.2318L17.6362 11.5512H17.6362L17.9511 12.2318ZM20.0484 12.2318L20.3633 11.5512V11.5512L20.0484 12.2318ZM20.5886 12.6639L19.9118 12.9872V12.9872L20.5886 12.6639ZM17.4109 12.6639L18.0877 12.9872L17.4109 12.6639ZM20.1946 15.0749L19.4811 15.3059L19.4811 15.3059L20.1946 15.0749ZM17.8025 15.0608L18.517 15.2888V15.2888L17.8025 15.0608ZM16.065 17.8117L16.7544 17.5162L16.7544 17.5162L16.065 17.8117ZM21.9346 17.8117L22.6239 18.1074L22.6239 18.1074L21.9346 17.8117ZM19.7498 22L19.7498 18.8878H18.2498L18.2498 22H19.7498ZM16.094 18.8638C16.9431 19.3915 17.9867 19.6378 18.9997 19.6378C20.0128 19.6378 21.0564 19.3915 21.9054 18.8637L21.1136 17.5898C20.5447 17.9434 19.7875 18.1378 18.9997 18.1378C18.212 18.1378 17.4548 17.9434 16.8859 17.5898L16.094 18.8638ZM18.2661 12.9125C18.7344 12.6958 19.2651 12.6958 19.7334 12.9125L20.3633 11.5512C19.4954 11.1496 18.5041 11.1496 17.6362 11.5512L18.2661 12.9125ZM21.2448 13.7178C21.3389 13.3906 21.5234 12.8809 21.2653 12.3406L19.9118 12.9872C19.9091 12.9814 19.9028 12.9652 19.8997 12.9437C19.8969 12.9242 19.8993 12.9177 19.8974 12.9342C19.8951 12.9538 19.8888 12.9895 19.8723 13.0549C19.8556 13.1209 19.8336 13.1976 19.8033 13.303L21.2448 13.7178ZM19.7334 12.9125C19.8088 12.9474 19.856 12.9694 19.8947 12.9892C19.9313 13.0081 19.9422 13.016 19.9418 13.0157C19.9382 13.0131 19.9273 13.0042 19.9161 12.9904C19.9058 12.9778 19.9052 12.9732 19.9118 12.9872L21.2653 12.3406C21.1599 12.1199 21.0188 11.9447 20.8257 11.8038C20.6677 11.6886 20.4841 11.607 20.3633 11.5512L19.7334 12.9125ZM18.1963 13.303C18.1659 13.1976 18.1439 13.1209 18.1272 13.0549C18.1107 12.9895 18.1044 12.9538 18.1021 12.9343C18.1002 12.9177 18.1026 12.9243 18.0998 12.9437C18.0967 12.9652 18.0904 12.9815 18.0877 12.9872L16.7342 12.3406C16.4761 12.8809 16.6606 13.3906 16.7547 13.7178L18.1963 13.303ZM17.6362 11.5512C17.5154 11.6071 17.3318 11.6886 17.1738 11.8038C16.9807 11.9447 16.8396 12.1199 16.7342 12.3406L18.0877 12.9872C18.0944 12.9732 18.0937 12.9778 18.0834 12.9905C18.0723 13.0042 18.0613 13.0131 18.0577 13.0157C18.0573 13.016 18.0682 13.0081 18.1048 12.9892C18.1435 12.9694 18.1908 12.9474 18.2661 12.9125L17.6362 11.5512ZM21.5746 15.3758C21.2846 15.14 21.0985 14.988 20.9736 14.8712C20.9133 14.8148 20.8854 14.783 20.8747 14.7694C20.8637 14.7554 20.8881 14.7821 20.9081 14.8439L19.4811 15.3059C19.5775 15.6037 19.796 15.8236 19.9489 15.9666C20.121 16.1277 20.3563 16.3184 20.6283 16.5396L21.5746 15.3758ZM17.3622 16.5419C17.6387 16.3135 17.8762 16.1177 18.0494 15.9538C18.2013 15.8101 18.4217 15.5873 18.517 15.2888L17.088 14.8327C17.1084 14.7687 17.1336 14.7414 17.1213 14.7573C17.1095 14.7724 17.0802 14.8058 17.0183 14.8644C16.8907 14.9851 16.7006 15.1428 16.4067 15.3856L17.3622 16.5419ZM16.8859 17.5898C16.8264 17.5529 16.7905 17.5304 16.7612 17.5106C16.7339 17.4922 16.7271 17.4857 16.7289 17.4873C16.7331 17.4911 16.7422 17.5004 16.7509 17.5129C16.759 17.5243 16.7595 17.5282 16.7544 17.5162L15.3757 18.1073C15.4589 18.3013 15.5698 18.4618 15.7239 18.6009C15.8512 18.7158 15.9997 18.8051 16.094 18.8638L16.8859 17.5898ZM21.9054 18.8637C21.9999 18.8051 22.1483 18.7157 22.2756 18.6009C22.4296 18.4619 22.5406 18.3014 22.6239 18.1074L21.2454 17.516C21.2402 17.528 21.2408 17.5241 21.2488 17.5126C21.2576 17.5001 21.2666 17.4909 21.2708 17.4872C21.2725 17.4856 21.2657 17.4921 21.2383 17.5105C21.2091 17.5303 21.173 17.5528 21.1136 17.5898L21.9054 18.8637ZM16.4067 15.3856C16.1188 15.6236 15.7801 15.9989 15.5456 16.4301C15.3235 16.8384 15.1035 17.4723 15.3757 18.1073L16.7544 17.5162C16.7541 17.5157 16.7196 17.4109 16.8633 17.1467C16.9946 16.9054 17.2018 16.6745 17.3622 16.5419L16.4067 15.3856ZM22.6239 18.1074C22.8983 17.4677 22.6745 16.8307 22.4484 16.4207C22.21 15.9882 21.8662 15.6129 21.5746 15.3758L20.6283 16.5396C20.7912 16.672 21.0015 16.9031 21.1348 17.1449C21.2805 17.4091 21.246 17.5144 21.2454 17.516L22.6239 18.1074ZM18.517 15.2888C18.664 14.828 18.5449 14.3531 18.4578 14.0657C18.409 13.9042 18.3514 13.7467 18.3048 13.6188C18.2545 13.4807 18.2193 13.3831 18.1963 13.303L16.7547 13.7178C16.795 13.8579 16.8502 14.0083 16.8954 14.1323C16.9443 14.2665 16.9873 14.3852 17.0222 14.5004C17.1027 14.7662 17.0837 14.8463 17.088 14.8327L18.517 15.2888ZM20.9081 14.8439C20.9127 14.858 20.8932 14.777 20.9748 14.5075C21.01 14.3909 21.0536 14.2708 21.1029 14.1354C21.1486 14.0103 21.2042 13.8587 21.2448 13.7178L19.8033 13.303C19.7801 13.3836 19.7445 13.4822 19.6937 13.6217C19.6466 13.7508 19.5884 13.9098 19.5391 14.0729C19.4514 14.3624 19.3309 14.8421 19.4811 15.3059L20.9081 14.8439Z"
        strokeWidth={strokeWidth}
      />
      <path d="M7 7H15" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 12H14" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 17H12" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
