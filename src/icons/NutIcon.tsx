export const NutIcon = ({
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
        d="M13.5839 10.4462L13.0559 10.9787L13.5839 10.4462ZM17.5374 13.3479L17.193 14.0142H17.193L17.5374 13.3479ZM21.0808 11.5292L20.3319 11.4875L21.0808 11.5292ZM18.7063 5.3669L18.1782 5.89946L18.7063 5.3669ZM10.6576 6.52591L11.3214 6.17687L11.3214 6.17687L10.6576 6.52591ZM12.4917 3.01236L12.5327 3.76124L12.4917 3.01236ZM10.2438 3.95935L9.59333 3.58593L10.2438 3.95935ZM20.1258 13.7583L19.7571 13.1052L20.1258 13.7583ZM22.5524 5.49209C22.8848 5.73928 23.3546 5.67022 23.6018 5.33785C23.849 5.00547 23.7799 4.53565 23.4476 4.28846L22.5524 5.49209ZM13.0559 10.9787C14.3353 12.2474 15.7453 13.2657 17.193 14.0142L17.8819 12.6817C16.5729 12.005 15.2861 11.0778 14.112 9.91361L13.0559 10.9787ZM21.8296 11.5709C21.9644 9.14991 21.0986 6.68288 19.2344 4.83433L18.1782 5.89946C19.7265 7.4348 20.4437 9.47886 20.3319 11.4875L21.8296 11.5709ZM9.99375 6.87495C10.7491 8.31149 11.7765 9.7101 13.0559 10.9787L14.112 9.91361C12.938 8.74945 12.0033 7.47383 11.3214 6.17687L9.99375 6.87495ZM19.2344 4.83433C17.3705 2.98618 14.8861 2.13018 12.4507 2.26348L12.5327 3.76124C14.5645 3.65003 16.6294 4.36372 18.1782 5.89946L19.2344 4.83433ZM11.3214 6.17687C11.0031 5.57156 10.8358 5.24099 10.7733 4.96617C10.7287 4.77056 10.737 4.60659 10.8942 4.33276L9.59333 3.58593C9.26216 4.16278 9.17659 4.71014 9.31069 5.29916C9.42676 5.80896 9.71056 6.33634 9.99375 6.87495L11.3214 6.17687ZM12.4507 2.26348C11.9028 2.29347 11.3418 2.31773 10.8661 2.48202C10.3159 2.6721 9.91384 3.02766 9.59333 3.58593L10.8942 4.33276C11.0621 4.04036 11.1975 3.95453 11.3559 3.89983C11.5888 3.81935 11.9076 3.79545 12.5327 3.76124L12.4507 2.26348ZM17.193 14.0142C17.7369 14.2954 18.267 14.5757 18.7787 14.6903C19.3675 14.8221 19.915 14.7385 20.4944 14.4114L19.7571 13.1052C19.4786 13.2623 19.3087 13.2718 19.1063 13.2265C18.8267 13.1639 18.4916 12.9969 17.8819 12.6817L17.193 14.0142ZM20.3319 11.4875C20.2974 12.1082 20.2733 12.4214 20.1931 12.6498C20.1392 12.803 20.0542 12.9374 19.7571 13.1052L20.4944 14.4114C21.0552 14.0949 21.4153 13.6963 21.6083 13.1469C21.7749 12.6726 21.7994 12.1134 21.8296 11.5709L20.3319 11.4875ZM19.1725 5.95442C19.5005 5.69411 20.0938 5.34936 20.7494 5.19703C21.394 5.04725 22.021 5.09689 22.5524 5.49209L23.4476 4.28846C22.4539 3.5495 21.332 3.52172 20.4099 3.73594C19.4989 3.9476 18.7078 4.40824 18.2401 4.77937L19.1725 5.95442Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M10.2372 6.71151C10.6301 6.58053 10.8425 6.15579 10.7115 5.76283C10.5805 5.36987 10.1558 5.1575 9.76283 5.28849L10.2372 6.71151ZM3.04446 12.9793L3.79138 13.0472L3.04446 12.9793ZM3.70931 20.2911L2.9978 20.0539C2.90796 20.3234 2.97811 20.6205 3.17898 20.8214C3.37985 21.0223 3.67698 21.0924 3.94648 21.0026L3.70931 20.2911ZM18.7115 14.2372C18.8425 13.8442 18.6301 13.4195 18.2372 13.2885C17.8442 13.1575 17.4195 13.3699 17.2885 13.7628L18.7115 14.2372ZM11.0207 20.9555L11.0886 21.7024L11.0207 20.9555ZM9.76283 5.28849C8.16611 5.82073 6.40774 6.8131 5.00015 8.10391C3.60106 9.38693 2.46751 11.042 2.29754 12.9114L3.79138 13.0472C3.91429 11.6954 4.7585 10.3607 6.01396 9.20944C7.26093 8.06592 8.83389 7.17927 10.2372 6.71151L9.76283 5.28849ZM2.29754 12.9114C2.11908 14.8743 2.48035 16.3082 2.77551 17.4466C3.07879 18.6162 3.24767 19.3043 2.9978 20.0539L4.42082 20.5282C4.83564 19.2838 4.50592 18.1439 4.2275 17.0701C3.94098 15.965 3.63747 14.7401 3.79138 13.0472L2.29754 12.9114ZM17.2885 13.7628C16.8207 15.1661 15.9341 16.7391 14.7906 17.986C13.6393 19.2415 12.3046 20.0857 10.9528 20.2086L11.0886 21.7024C12.958 21.5325 14.6131 20.3989 15.8961 18.9998C17.1869 17.5923 18.1793 15.8339 18.7115 14.2372L17.2885 13.7628ZM10.9528 20.2086C9.25986 20.3625 8.03501 20.0591 6.93006 19.7727C5.85634 19.4943 4.71656 19.1648 3.47214 19.5796L3.94648 21.0026C4.69614 20.7527 5.38417 20.9215 6.55367 21.2247C7.69195 21.5198 9.12575 21.8809 11.0886 21.7024L10.9528 20.2086Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
