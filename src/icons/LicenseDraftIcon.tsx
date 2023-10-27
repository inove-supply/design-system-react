export const LicenseDraftIcon = ({
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
        d="M20 11V10C20 6.22876 20 4.34315 18.7595 3.17157C17.519 2 15.5225 2 11.5294 2L10.4706 2C6.47752 2 4.48098 2 3.24049 3.17157C2 4.34315 2 6.22876 2 10L2 14C2 17.7712 2 19.6569 3.24049 20.8284C4.48098 22 6.47751 22 10.4706 22H11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7 7H15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7 12H15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M15.3477 21.8557L15.1909 21.1223L15.3477 21.8557ZM14.1443 20.6523L14.8777 20.8091L14.1443 20.6523ZM15.0207 18.1117L14.4903 17.5814L15.0207 18.1117ZM17.8883 20.9793L17.358 20.449L17.8883 20.9793ZM21.7963 15.4773L22.4458 15.1023V15.1023L21.7963 15.4773ZM21.1961 17.6715L21.7265 18.2018L21.1961 17.6715ZM21.7963 16.9981L22.4458 17.3731L21.7963 16.9981ZM20.5227 14.2037L20.8977 13.5542V13.5542L20.5227 14.2037ZM18.3285 14.8039L18.8588 15.3342L18.3285 14.8039ZM19.0019 14.2037L18.6269 13.5542V13.5542L19.0019 14.2037ZM20.6658 17.1412L17.358 20.449L18.4186 21.5097L21.7265 18.2018L20.6658 17.1412ZM15.551 18.642L18.8588 15.3342L17.7982 14.2735L14.4903 17.5814L15.551 18.642ZM15.1909 21.1223C15.0155 21.1598 14.8753 21.1897 14.7548 21.2121C14.6333 21.2347 14.5536 21.2454 14.4996 21.2488C14.4441 21.2524 14.4479 21.2458 14.4825 21.2547C14.5296 21.2669 14.5936 21.2972 14.6482 21.3518L13.5876 22.4124C13.9113 22.7362 14.3158 22.7636 14.5948 22.7458C14.8603 22.7289 15.1839 22.6577 15.5045 22.5891L15.1909 21.1223ZM13.4109 20.4955C13.3423 20.8161 13.2711 21.1397 13.2542 21.4052C13.2364 21.6842 13.2638 22.0887 13.5876 22.4124L14.6482 21.3518C14.7028 21.4064 14.7331 21.4704 14.7453 21.5175C14.7542 21.5521 14.7476 21.5559 14.7512 21.5004C14.7546 21.4464 14.7653 21.3667 14.7879 21.2452C14.8103 21.1247 14.8402 20.9845 14.8777 20.8091L13.4109 20.4955ZM20.6658 15.3342C21.0333 15.7017 21.1084 15.786 21.1467 15.8523L22.4458 15.1023C22.2839 14.8218 22.0257 14.5728 21.7265 14.2735L20.6658 15.3342ZM21.7265 18.2018C22.0257 17.9026 22.2839 17.6535 22.4458 17.3731L21.1467 16.6231C21.1084 16.6894 21.0333 16.7737 20.6658 17.1412L21.7265 18.2018ZM21.1467 15.8523C21.2844 16.0908 21.2844 16.3846 21.1467 16.6231L22.4458 17.3731C22.8514 16.6705 22.8514 15.8049 22.4458 15.1023L21.1467 15.8523ZM21.7265 14.2735C21.4272 13.9743 21.1782 13.7161 20.8977 13.5542L20.1477 14.8533C20.214 14.8916 20.2983 14.9667 20.6658 15.3342L21.7265 14.2735ZM18.8588 15.3342C19.2263 14.9667 19.3106 14.8916 19.3769 14.8533L18.6269 13.5542C18.3465 13.7161 18.0974 13.9743 17.7982 14.2735L18.8588 15.3342ZM20.8977 13.5542C20.1951 13.1486 19.3295 13.1486 18.6269 13.5542L19.3769 14.8533C19.6154 14.7156 19.9092 14.7156 20.1477 14.8533L20.8977 13.5542ZM17.358 20.449C17.1624 20.6445 16.8952 20.771 16.5155 20.8679C16.3253 20.9165 16.1224 20.954 15.8963 20.9931C15.679 21.0306 15.4303 21.0711 15.1909 21.1223L15.5045 22.5891C15.7063 22.546 15.9131 22.5124 16.1517 22.4712C16.3814 22.4315 16.6346 22.3856 16.8866 22.3213C17.3914 22.1924 17.9533 21.975 18.4186 21.5097L17.358 20.449ZM14.8777 20.8091C14.9289 20.5697 14.9694 20.321 15.0069 20.1037C15.046 19.8776 15.0835 19.6747 15.1321 19.4845C15.229 19.1048 15.3555 18.8376 15.551 18.642L14.4903 17.5814C14.025 18.0467 13.8076 18.6086 13.6787 19.1134C13.6144 19.3654 13.5685 19.6186 13.5288 19.8483C13.4876 20.0869 13.454 20.2937 13.4109 20.4955L14.8777 20.8091Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
