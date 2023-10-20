export const FilterEditIcon = ({
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
        d="M13.2403 17.5C13.1932 17.8033 13.1508 18.0485 13.1141 18.2442C12.8853 19.4657 11.1532 20.2006 10.226 20.8563C9.67406 21.2466 9.0043 20.782 8.93278 20.1778C8.79643 19.0261 8.53961 16.6864 8.25927 13.2614C8.23409 12.9539 8.08486 12.6761 7.85746 12.5061C5.36901 10.6456 3.59564 8.59915 2.62734 7.44867C2.3276 7.09253 2.22938 6.8319 2.17033 6.3728C1.96811 4.8008 1.86701 4.0148 2.32795 3.5074C2.7889 3 3.60404 3 5.23433 3H16.7657C18.396 3 19.2111 3 19.672 3.5074C19.8956 3.75346 19.9869 4.06504 19.9987 4.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3477 14.8557L15.1909 14.1223L15.3477 14.8557ZM14.1443 13.6523L14.8777 13.8091L14.1443 13.6523ZM15.0207 11.1117L14.4903 10.5814H14.4903L15.0207 11.1117ZM21.7963 8.47729L22.4458 8.10229L21.7963 8.47729ZM21.7963 9.99807L22.4458 10.3731L21.7963 9.99807ZM20.5227 7.20375L20.8977 6.55423L20.5227 7.20375ZM18.3285 7.80388L18.8588 8.33421L18.3285 7.80388ZM19.0019 7.20375L18.6269 6.55423L18.6269 6.55423L19.0019 7.20375ZM20.6658 10.1412L17.358 13.449L18.4186 14.5097L21.7265 11.2018L20.6658 10.1412ZM15.551 11.642L18.8588 8.33421L17.7982 7.27355L14.4903 10.5814L15.551 11.642ZM15.1909 14.1223C15.0155 14.1598 14.8753 14.1897 14.7548 14.2121C14.6333 14.2347 14.5536 14.2454 14.4996 14.2488C14.4441 14.2524 14.4479 14.2458 14.4825 14.2547C14.5296 14.2669 14.5936 14.2972 14.6482 14.3518L13.5876 15.4124C13.9113 15.7362 14.3158 15.7636 14.5948 15.7458C14.8603 15.7289 15.1839 15.6577 15.5045 15.5891L15.1909 14.1223ZM13.4109 13.4955C13.3423 13.8161 13.2711 14.1397 13.2542 14.4052C13.2364 14.6842 13.2638 15.0887 13.5876 15.4124L14.6482 14.3518C14.7028 14.4064 14.7331 14.4704 14.7453 14.5175C14.7542 14.5521 14.7476 14.5559 14.7512 14.5004C14.7546 14.4464 14.7653 14.3667 14.7879 14.2452C14.8103 14.1247 14.8402 13.9845 14.8777 13.8091L13.4109 13.4955ZM20.6658 8.33421C21.0333 8.7017 21.1084 8.78597 21.1467 8.85229L22.4458 8.10229C22.2839 7.82184 22.0257 7.57275 21.7265 7.27355L20.6658 8.33421ZM21.7265 11.2018C22.0257 10.9026 22.2839 10.6535 22.4458 10.3731L21.1467 9.62307C21.1084 9.6894 21.0333 9.77367 20.6658 10.1412L21.7265 11.2018ZM21.1467 8.85229C21.2844 9.09077 21.2844 9.38459 21.1467 9.62307L22.4458 10.3731C22.8514 9.67049 22.8514 8.80488 22.4458 8.10229L21.1467 8.85229ZM21.7265 7.27355C21.4272 6.97434 21.1782 6.71615 20.8977 6.55423L20.1477 7.85327C20.214 7.89156 20.2983 7.96671 20.6658 8.33421L21.7265 7.27355ZM18.8588 8.33421C19.2263 7.96672 19.3106 7.89156 19.3769 7.85327L18.6269 6.55423C18.3465 6.71615 18.0974 6.97434 17.7982 7.27355L18.8588 8.33421ZM20.8977 6.55423C20.1951 6.14859 19.3295 6.14859 18.6269 6.55423L19.3769 7.85327C19.6154 7.71558 19.9092 7.71558 20.1477 7.85327L20.8977 6.55423ZM17.358 13.449C17.1624 13.6445 16.8952 13.771 16.5155 13.8679C16.3253 13.9165 16.1224 13.954 15.8963 13.9931C15.679 14.0306 15.4303 14.0711 15.1909 14.1223L15.5045 15.5891C15.7063 15.546 15.9131 15.5124 16.1517 15.4712C16.3814 15.4315 16.6346 15.3856 16.8866 15.3213C17.3914 15.1924 17.9533 14.975 18.4186 14.5097L17.358 13.449ZM14.8777 13.8091C14.9289 13.5697 14.9694 13.321 15.0069 13.1037C15.046 12.8776 15.0835 12.6747 15.1321 12.4845C15.229 12.1048 15.3555 11.8376 15.551 11.642L14.4903 10.5814C14.025 11.0467 13.8076 11.6086 13.6787 12.1134C13.6144 12.3654 13.5685 12.6186 13.5288 12.8483C13.4876 13.0869 13.454 13.2937 13.4109 13.4955L14.8777 13.8091Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
