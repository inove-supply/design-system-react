export const TaskEdit02Icon = ({
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
        d="M19.5 11.0056V9.37304C19.5 5.89736 19.5 4.15951 18.4749 3.07976C17.4497 2 15.7998 2 12.5 2H9.5C6.20017 2 4.55025 2 3.52513 3.07976C2.5 4.15951 2.5 5.89736 2.5 9.37304V14.6395C2.5 18.1152 2.5 19.853 3.52513 20.9328C4.31809 21.768 5.48489 21.9572 7.5 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16H11M7 11H15"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M14.8477 21.8557L14.6909 21.1223L14.8477 21.8557ZM13.6443 20.6523L14.3777 20.8091L13.6443 20.6523ZM14.5207 18.1117L13.9903 17.5814L14.5207 18.1117ZM17.3883 20.9793L16.858 20.449L17.3883 20.9793ZM21.2963 15.4773L21.9458 15.1023V15.1023L21.2963 15.4773ZM20.6961 17.6715L21.2265 18.2018L20.6961 17.6715ZM21.2963 16.9981L21.9458 17.3731L21.2963 16.9981ZM20.0227 14.2037L20.3977 13.5542V13.5542L20.0227 14.2037ZM17.8285 14.8039L18.3588 15.3342L17.8285 14.8039ZM18.5019 14.2037L18.1269 13.5542V13.5542L18.5019 14.2037ZM20.1658 17.1412L16.858 20.449L17.9186 21.5097L21.2265 18.2018L20.1658 17.1412ZM15.051 18.642L18.3588 15.3342L17.2982 14.2735L13.9903 17.5814L15.051 18.642ZM14.6909 21.1223C14.5155 21.1598 14.3753 21.1897 14.2548 21.2121C14.1333 21.2347 14.0536 21.2454 13.9996 21.2488C13.9441 21.2524 13.9479 21.2458 13.9825 21.2547C14.0296 21.2669 14.0936 21.2972 14.1482 21.3518L13.0876 22.4124C13.4113 22.7362 13.8158 22.7636 14.0948 22.7458C14.3603 22.7289 14.6839 22.6577 15.0045 22.5891L14.6909 21.1223ZM12.9109 20.4955C12.8423 20.8161 12.7711 21.1397 12.7542 21.4052C12.7364 21.6842 12.7638 22.0887 13.0876 22.4124L14.1482 21.3518C14.2028 21.4064 14.2331 21.4704 14.2453 21.5175C14.2542 21.5521 14.2476 21.5559 14.2512 21.5004C14.2546 21.4464 14.2653 21.3667 14.2879 21.2452C14.3103 21.1247 14.3402 20.9845 14.3777 20.8091L12.9109 20.4955ZM20.1658 15.3342C20.5333 15.7017 20.6084 15.786 20.6467 15.8523L21.9458 15.1023C21.7839 14.8218 21.5257 14.5728 21.2265 14.2735L20.1658 15.3342ZM21.2265 18.2018C21.5257 17.9026 21.7839 17.6535 21.9458 17.3731L20.6467 16.6231C20.6084 16.6894 20.5333 16.7737 20.1658 17.1412L21.2265 18.2018ZM20.6467 15.8523C20.7844 16.0908 20.7844 16.3846 20.6467 16.6231L21.9458 17.3731C22.3514 16.6705 22.3514 15.8049 21.9458 15.1023L20.6467 15.8523ZM21.2265 14.2735C20.9272 13.9743 20.6782 13.7161 20.3977 13.5542L19.6477 14.8533C19.714 14.8916 19.7983 14.9667 20.1658 15.3342L21.2265 14.2735ZM18.3588 15.3342C18.7263 14.9667 18.8106 14.8916 18.8769 14.8533L18.1269 13.5542C17.8465 13.7161 17.5974 13.9743 17.2982 14.2735L18.3588 15.3342ZM20.3977 13.5542C19.6951 13.1486 18.8295 13.1486 18.1269 13.5542L18.8769 14.8533C19.1154 14.7156 19.4092 14.7156 19.6477 14.8533L20.3977 13.5542ZM16.858 20.449C16.6624 20.6445 16.3952 20.771 16.0155 20.8679C15.8253 20.9165 15.6224 20.954 15.3963 20.9931C15.179 21.0306 14.9303 21.0711 14.6909 21.1223L15.0045 22.5891C15.2063 22.546 15.4131 22.5124 15.6517 22.4712C15.8814 22.4315 16.1346 22.3856 16.3866 22.3213C16.8914 22.1924 17.4533 21.975 17.9186 21.5097L16.858 20.449ZM14.3777 20.8091C14.4289 20.5697 14.4694 20.321 14.5069 20.1037C14.546 19.8776 14.5835 19.6747 14.6321 19.4845C14.729 19.1048 14.8555 18.8376 15.051 18.642L13.9903 17.5814C13.525 18.0467 13.3076 18.6086 13.1787 19.1134C13.1144 19.3654 13.0685 19.6186 13.0288 19.8483C12.9876 20.0869 12.954 20.2937 12.9109 20.4955L14.3777 20.8091Z"
        strokeWidth={strokeWidth}
      />
      <path d="M10 22H11" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M7 2L7.0822 2.4932C7.28174 3.69044 7.38151 4.28906 7.80113 4.64453C8.22075 5 8.82762 5 10.0414 5H11.9586C13.1724 5 13.7793 5 14.1989 4.64453C14.6185 4.28906 14.7183 3.69044 14.9178 2.4932L15 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
