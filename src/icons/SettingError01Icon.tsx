export const SettingError01Icon = ({
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
        d="M17 15V17M17.009 19H17M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17C12 14.2386 14.2386 12 17 12C19.7614 12 22 14.2386 22 17Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M20.5075 6.27698L21.1573 5.90253L20.5075 6.27698ZM21.0011 7.13358L20.3512 7.50803V7.50803L21.0011 7.13358ZM17.0147 5.69637L17.1832 6.42719L17.2007 6.42315L17.218 6.41828L17.0147 5.69637ZM15.6562 5.52698L15.2813 6.1766L15.2972 6.18573L15.3134 6.19408L15.6562 5.52698ZM21.492 8.36768L22.2379 8.44604V8.44603L21.492 8.36768ZM20.7554 9.47231L20.1977 8.97083L20.1964 8.9723L20.7554 9.47231ZM18.2349 5.35267L18.4382 6.07458L18.4396 6.07418L18.2349 5.35267ZM14.5311 4.36493L13.8199 4.60306L13.8251 4.61841L13.8309 4.63352L14.5311 4.36493ZM15.3193 5.33261L14.9148 5.96417L14.9294 5.97354L14.9445 5.98223L15.3193 5.33261ZM14.1972 3.36754L13.4855 3.6043L13.486 3.60567L14.1972 3.36754ZM2.98475 6.27698L2.33491 5.90253L2.33491 5.90253L2.98475 6.27698ZM2.49116 7.13358L3.141 7.50803L3.141 7.50803L2.49116 7.13358ZM2.49116 16.8663L3.141 16.4919L2.49116 16.8663ZM2.98473 17.7229L2.3349 18.0974H2.3349L2.98473 17.7229ZM3.76792 13.3749L4.32693 13.8749L4.34224 13.8578L4.35647 13.8398L3.76792 13.3749ZM6.47753 18.3035L6.30899 17.5727L6.29148 17.5767L6.27418 17.5816L6.47753 18.3035ZM7.83626 18.473L8.21115 17.8234L8.19533 17.8143L8.17909 17.8059L7.83626 18.473ZM3.86226 18.8238L4.14482 18.1291L4.14482 18.1291L3.86226 18.8238ZM5.25736 18.6472L5.05401 17.9253L5.0526 17.9257L5.25736 18.6472ZM2.73686 14.5276L3.29455 15.0291L3.29587 15.0276L2.73686 14.5276ZM6.47758 5.69637L6.27424 6.41828L6.29154 6.42315L6.30905 6.42719L6.47758 5.69637ZM7.83608 5.52698L8.17883 6.19408L8.19508 6.18573L8.2109 6.1766L7.83608 5.52698ZM3.7679 10.625L4.35644 10.1601L4.34221 10.1421L4.32691 10.125L3.7679 10.625ZM2.00025 8.36768L1.25436 8.44603L1.25436 8.44604L2.00025 8.36768ZM2.73685 9.47231L3.29587 8.9723L3.29455 8.97083L2.73685 9.47231ZM5.25734 5.35267L5.05259 6.07418L5.054 6.07458L5.25734 5.35267ZM8.96112 4.36493L9.66138 4.63352L9.66718 4.61841L9.67232 4.60306L8.96112 4.36493ZM8.17296 5.33261L8.54778 5.98223L8.56283 5.97354L8.57747 5.96417L8.17296 5.33261ZM9.29508 3.36754L10.0063 3.60567L10.0067 3.6043L9.29508 3.36754ZM8.96109 19.635L9.67229 19.3968L9.66715 19.3815L9.66135 19.3664L8.96109 19.635ZM8.17309 18.6674L8.57766 18.0359L8.56303 18.0265L8.54798 18.0178L8.17309 18.6674ZM9.29508 20.6325L10.0067 20.3957L10.0063 20.3943L9.29508 20.6325ZM9.88582 21.8112L9.44672 22.4193L9.44672 22.4193L9.88582 21.8112ZM19.6809 9.54865C19.4047 9.85738 19.4311 10.3315 19.7399 10.6077C20.0486 10.8838 20.5227 10.8574 20.7989 10.5487L19.6809 9.54865ZM10.7074 22.7468C11.1215 22.7561 11.4648 22.428 11.4741 22.0138C11.4835 21.5997 11.1553 21.2565 10.7412 21.2471L10.7074 22.7468ZM13.6209 9.98648C13.9241 10.2687 14.3987 10.2517 14.6809 9.94847C14.9631 9.64527 14.9461 9.1707 14.6429 8.88849L13.6209 9.98648ZM8.63636 14.895C8.91857 15.1982 9.39314 15.2152 9.69634 14.933C9.99954 14.6508 10.0166 14.1763 9.73435 13.8731L8.63636 14.895ZM19.8577 6.65143L20.3512 7.50803L21.6509 6.75913L21.1573 5.90253L19.8577 6.65143ZM16.8461 4.96555C16.5602 5.03149 16.2602 4.99411 15.9989 4.85988L15.3134 6.19408C15.8897 6.49015 16.5519 6.57276 17.1832 6.42719L16.8461 4.96555ZM20.3512 7.50803C20.5349 7.82669 20.64 8.01146 20.7022 8.15516C20.7303 8.22002 20.7404 8.25643 20.7441 8.27447C20.7458 8.28282 20.7461 8.28692 20.7461 8.28784C20.7462 8.28861 20.7462 8.28876 20.7461 8.28932L22.2379 8.44603C22.2732 8.10946 22.1907 7.81762 22.0787 7.55912C21.9745 7.31839 21.8172 7.04772 21.6509 6.75913L20.3512 7.50803ZM21.3131 9.97378C21.5357 9.72622 21.7458 9.49426 21.8978 9.28051C22.0611 9.05094 22.2025 8.78264 22.2379 8.44604L20.7461 8.28931C20.746 8.28987 20.746 8.29002 20.7458 8.29074C20.7456 8.29162 20.7445 8.29555 20.7411 8.30334C20.7337 8.32017 20.7163 8.35363 20.6754 8.41118C20.5847 8.5387 20.4435 8.69745 20.1977 8.97083L21.3131 9.97378ZM21.1573 5.90253C20.9798 5.5944 20.8147 5.30545 20.6487 5.08323C20.4708 4.84494 20.2447 4.61644 19.9125 4.48133L19.3474 5.87081C19.3478 5.87096 19.3477 5.8709 19.348 5.87113C19.3486 5.87145 19.352 5.8736 19.3587 5.87936C19.3732 5.89191 19.4016 5.92019 19.4469 5.98082C19.547 6.11481 19.6619 6.31173 19.8577 6.65143L21.1573 5.90253ZM18.4396 6.07418C18.8164 5.96727 19.0356 5.90637 19.2003 5.88021C19.2748 5.86838 19.3147 5.86799 19.3337 5.86913C19.3424 5.86966 19.3463 5.8705 19.3468 5.87062C19.3472 5.8707 19.347 5.87065 19.3474 5.87081L19.9125 4.48133C19.5802 4.34618 19.2589 4.35213 18.9651 4.39877C18.6913 4.44224 18.3717 4.53422 18.0302 4.63116L18.4396 6.07418ZM13.8309 4.63352C14.041 5.18138 14.4207 5.64775 14.9148 5.96417L15.7238 4.70104C15.4997 4.55749 15.327 4.34566 15.2314 4.09634L13.8309 4.63352ZM12.3035 2.75C12.668 2.75 12.8783 2.75114 13.0321 2.76874C13.1015 2.77667 13.1374 2.78597 13.1544 2.79161C13.1623 2.79421 13.1658 2.79594 13.1665 2.79628C13.167 2.79655 13.167 2.79655 13.1673 2.79678L14.0455 1.58073C13.7728 1.38378 13.4805 1.31025 13.2026 1.27845C12.9439 1.24886 12.6334 1.25 12.3035 1.25V2.75ZM14.9088 3.13079C14.8045 2.81715 14.7074 2.52189 14.5977 2.28559C14.4799 2.03188 14.3181 1.7776 14.0455 1.58073L13.1673 2.79678C13.1676 2.79701 13.1677 2.79702 13.1681 2.79749C13.1687 2.79807 13.1715 2.80093 13.1766 2.80767C13.1874 2.82225 13.2077 2.85369 13.2372 2.91727C13.3026 3.05817 13.3703 3.25792 13.4855 3.6043L14.9088 3.13079ZM13.486 3.60567L13.8199 4.60306L15.2423 4.1268L14.9083 3.12942L13.486 3.60567ZM16.031 4.87736L15.6941 4.68298L14.9445 5.98223L15.2813 6.1766L16.031 4.87736ZM17.218 6.41828L18.4382 6.07458L18.0316 4.63076L16.8113 4.97446L17.218 6.41828ZM2.33491 5.90253L1.84132 6.75913L3.141 7.50803L3.63459 6.65143L2.33491 5.90253ZM1.84132 17.2408L2.3349 18.0974L3.63457 17.3485L3.141 16.4919L1.84132 17.2408ZM4.35647 13.8398C4.73094 13.3657 4.9488 12.6374 4.9488 11.9998H3.4488C3.4488 12.3626 3.30896 12.7459 3.17938 12.91L4.35647 13.8398ZM6.64608 19.0343C6.93207 18.9684 7.23216 19.0058 7.49344 19.14L8.17909 17.8059C7.60276 17.5097 6.94037 17.4271 6.30899 17.5727L6.64608 19.0343ZM2.3349 18.0974C2.51244 18.4055 2.67752 18.6944 2.84349 18.9167C3.02146 19.1549 3.24751 19.3835 3.57971 19.5186L4.14482 18.1291C4.14444 18.1289 4.14456 18.129 4.1442 18.1288C4.14368 18.1285 4.14026 18.1263 4.13357 18.1205C4.11902 18.108 4.09058 18.0797 4.04529 18.0191C3.94521 17.8851 3.83031 17.6882 3.63457 17.3485L2.3349 18.0974ZM5.0526 17.9257C4.67586 18.0326 4.45668 18.0935 4.29191 18.1197C4.21739 18.1315 4.17751 18.1319 4.15854 18.1308C4.14982 18.1302 4.14595 18.1294 4.14541 18.1293C4.14505 18.1292 4.14521 18.1293 4.14482 18.1291L3.57971 19.5186C3.91202 19.6537 4.23339 19.6478 4.52715 19.6011C4.80094 19.5577 5.12052 19.4657 5.46212 19.3687L5.0526 17.9257ZM3.141 16.4919C2.95738 16.1732 2.85223 15.9885 2.79 15.8448C2.76192 15.7799 2.75185 15.7435 2.74815 15.7254C2.74644 15.7171 2.74617 15.713 2.74612 15.7121C2.74608 15.7113 2.74609 15.7112 2.74615 15.7106L1.25436 15.5539C1.219 15.8905 1.30158 16.1823 1.41351 16.4408C1.51775 16.6815 1.67503 16.9522 1.84132 17.2408L3.141 16.4919ZM2.17917 14.0261C1.95656 14.2737 1.74644 14.5057 1.59443 14.7194C1.43116 14.949 1.28972 15.2173 1.25436 15.5539L2.74615 15.7106C2.74621 15.71 2.74623 15.7099 2.74642 15.7092C2.74666 15.7083 2.74777 15.7044 2.75117 15.6966C2.75852 15.6798 2.7759 15.6463 2.81683 15.5887C2.90752 15.4612 3.04872 15.3025 3.29455 15.0291L2.17917 14.0261ZM6.30905 6.42719C6.94032 6.57276 7.60258 6.49015 8.17883 6.19408L7.49333 4.85988C7.23208 4.99411 6.93205 5.03149 6.64611 4.96555L6.30905 6.42719ZM3.17936 11.0899C3.30893 11.2539 3.4488 11.6375 3.4488 11.9998H4.9488C4.9488 11.3625 4.73085 10.6341 4.35644 10.1601L3.17936 11.0899ZM1.84132 6.75913C1.67503 7.04772 1.51775 7.31839 1.41351 7.55912C1.30157 7.81762 1.219 8.10946 1.25436 8.44603L2.74615 8.28932C2.74609 8.28876 2.74608 8.28861 2.74612 8.28784C2.74617 8.28692 2.74644 8.28282 2.74815 8.27447C2.75185 8.25643 2.76192 8.22002 2.79 8.15516C2.85223 8.01146 2.95738 7.82669 3.141 7.50803L1.84132 6.75913ZM3.29455 8.97083C3.04872 8.69745 2.90751 8.5387 2.81682 8.41118C2.7759 8.35363 2.75851 8.32017 2.75117 8.30334C2.74777 8.29555 2.74666 8.29162 2.74642 8.29074C2.74622 8.29002 2.7462 8.28987 2.74615 8.28931L1.25436 8.44604C1.28972 8.78264 1.43116 9.05094 1.59442 9.28051C1.74644 9.49426 1.95656 9.72622 2.17916 9.97378L3.29455 8.97083ZM3.63459 6.65143C3.83033 6.31173 3.94523 6.11481 4.0453 5.98082C4.09059 5.92019 4.11902 5.89191 4.13357 5.87936C4.14026 5.8736 4.14368 5.87145 4.1442 5.87113C4.14456 5.8709 4.14444 5.87096 4.14483 5.87081L3.5797 4.48133C3.24751 4.61644 3.02147 4.84494 2.8435 5.08323C2.67753 5.30545 2.51246 5.5944 2.33491 5.90253L3.63459 6.65143ZM5.46208 4.63116C5.12049 4.53422 4.80092 4.44224 4.52712 4.39877C4.23337 4.35213 3.91201 4.34618 3.5797 4.48133L4.14483 5.87081C4.14521 5.87065 4.14506 5.8707 4.14542 5.87062C4.14595 5.8705 4.14983 5.86966 4.15854 5.86913C4.17752 5.86799 4.2174 5.86838 4.29191 5.88021C4.45668 5.90637 4.67586 5.96727 5.05259 6.07418L5.46208 4.63116ZM8.26087 4.09634C8.16524 4.34566 7.99259 4.55749 7.76846 4.70104L8.57747 5.96417C9.07151 5.64775 9.45124 5.18138 9.66138 4.63352L8.26087 4.09634ZM11.1887 1.25C10.8589 1.25 10.5484 1.24886 10.2897 1.27845C10.0117 1.31025 9.71945 1.38378 9.44672 1.58073L10.3249 2.79678C10.3252 2.79655 10.3252 2.79655 10.3258 2.79628C10.3264 2.79594 10.3299 2.79421 10.3378 2.79161C10.3548 2.78597 10.3908 2.77667 10.4601 2.76874C10.614 2.75114 10.8242 2.75 11.1887 2.75V1.25ZM10.0067 3.6043C10.122 3.25792 10.1896 3.05817 10.255 2.91727C10.2845 2.85369 10.3048 2.82225 10.3157 2.80767C10.3207 2.80093 10.3235 2.79807 10.3241 2.79749C10.3246 2.79703 10.3246 2.79702 10.3249 2.79678L9.44672 1.58073C9.17411 1.7776 9.01232 2.03188 8.89452 2.28559C8.78481 2.52189 8.68777 2.81715 8.58343 3.13079L10.0067 3.6043ZM9.66135 19.3664C9.45125 18.8186 9.0716 18.3523 8.57766 18.0359L7.76852 19.2989C7.99261 19.4425 8.16522 19.6543 8.26083 19.9036L9.66135 19.3664ZM8.58343 20.8692C8.68777 21.1828 8.78481 21.4781 8.89452 21.7144C9.01231 21.9681 9.17411 22.2224 9.44672 22.4193L10.3249 21.2032C10.3246 21.203 10.3246 21.203 10.3241 21.2025C10.3235 21.2019 10.3207 21.1991 10.3157 21.1923C10.3048 21.1778 10.2845 21.1463 10.255 21.0827C10.1896 20.9418 10.122 20.7421 10.0067 20.3957L8.58343 20.8692ZM8.58389 3.12942L8.24993 4.1268L9.67232 4.60306L10.0063 3.60567L8.58389 3.12942ZM8.2109 6.1766L8.54778 5.98223L7.79814 4.68298L7.46126 4.87736L8.2109 6.1766ZM6.68091 4.97446L5.46067 4.63076L5.054 6.07458L6.27424 6.41828L6.68091 4.97446ZM2.17784 9.97231L3.20889 11.125L4.32691 10.125L3.29586 8.9723L2.17784 9.97231ZM3.20891 12.8749L2.17785 14.0276L3.29587 15.0276L4.32693 13.8749L3.20891 12.8749ZM6.27418 17.5816L5.05401 17.9253L5.46071 19.3691L6.68088 19.0254L6.27418 17.5816ZM8.54798 18.0178L8.21115 17.8234L7.46137 19.1226L7.7982 19.317L8.54798 18.0178ZM8.2499 19.8731L8.58389 20.8706L10.0063 20.3943L9.67229 19.3968L8.2499 19.8731ZM11.1887 2.75H12.3035V1.25H11.1887V2.75ZM20.1964 8.9723L19.6809 9.54865L20.7989 10.5487L21.3144 9.97231L20.1964 8.9723ZM10.7412 21.2471C10.5517 21.2429 10.4457 21.2326 10.3787 21.2188C10.3488 21.2127 10.3342 21.2073 10.329 21.2052C10.3264 21.2041 10.3254 21.2035 10.3253 21.2035C10.3253 21.2035 10.3253 21.2035 10.3249 21.2032L9.44672 22.4193C9.84822 22.7092 10.3082 22.7378 10.7074 22.7468L10.7412 21.2471ZM8.99787 12C8.99787 10.4812 10.2291 9.25 11.7479 9.25V7.75C9.40066 7.75 7.49787 9.65279 7.49787 12H8.99787ZM11.7479 9.25C12.472 9.25 13.1293 9.52887 13.6209 9.98648L14.6429 8.88849C13.8846 8.18275 12.866 7.75 11.7479 7.75V9.25ZM9.73435 13.8731C9.27674 13.3814 8.99787 12.7241 8.99787 12H7.49787C7.49787 13.1181 7.93062 14.1368 8.63636 14.895L9.73435 13.8731Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
