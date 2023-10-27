export const UsbErrorIcon = ({
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
        d="M13.9957 10.5014C13.9777 9.26104 13.8858 8.55783 13.4142 8.08606C12.8284 7.5 11.8856 7.5 10 7.5H8C6.11438 7.5 5.17157 7.5 4.58579 8.08606C4 8.67212 4 9.61538 4 11.5019V17.0045C4 17.9342 4 18.3991 4.07686 18.7857C4.39249 20.3732 5.63288 21.6141 7.21964 21.9299C7.43379 21.9725 7.67199 21.9915 8 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 7.5V5.5C12.5 4.09554 12.5 3.39331 12.1629 2.88886C12.017 2.67048 11.8295 2.48298 11.6111 2.33706C11.1067 2 10.4045 2 9 2C7.59554 2 6.89331 2 6.38886 2.33706C6.17048 2.48298 5.98298 2.67048 5.83706 2.88886C5.5 3.39331 5.5 4.09554 5.5 5.5V7.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 4.5H9.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.7325 21.4362L11.2252 20.8707H11.2252L10.7325 21.4362ZM10.0316 20.2613L9.29907 20.4222L10.0316 20.2613ZM18.3391 16.4024L17.695 16.7867L18.3391 16.4024ZM19.9684 20.2613L19.2358 20.1004L19.9684 20.2613ZM19.2675 21.4362L18.7748 20.8707L19.2675 21.4362ZM15.7009 13.1074L15.4759 13.8229L15.7009 13.1074ZM14.2991 13.1074L14.0741 12.392L14.2991 13.1074ZM15 19C14.5858 19 14.25 19.3358 14.25 19.75C14.25 20.1642 14.5858 20.5 15 20.5V19ZM15.01 20.5C15.4242 20.5 15.76 20.1642 15.76 19.75C15.76 19.3358 15.4242 19 15.01 19V20.5ZM14.26 17.5C14.26 17.9142 14.5958 18.25 15.01 18.25C15.4242 18.25 15.76 17.9142 15.76 17.5H14.26ZM15.76 16.375C15.76 15.9608 15.4242 15.625 15.01 15.625C14.5958 15.625 14.26 15.9608 14.26 16.375H15.76ZM15 21.25C13.7764 21.25 12.9173 21.249 12.2806 21.1835C11.6392 21.1174 11.3694 20.9964 11.2252 20.8707L10.2397 22.0016C10.7425 22.4398 11.3997 22.6007 12.1269 22.6756C12.8588 22.751 13.81 22.75 15 22.75V21.25ZM11.0168 16.0182C10.4224 17.0145 9.94408 17.8143 9.64401 18.4689C9.3455 19.1201 9.15496 19.766 9.29907 20.4222L10.7642 20.1004C10.7273 19.9324 10.7479 19.6604 11.0076 19.094C11.2657 18.531 11.6924 17.8135 12.305 16.7867L11.0168 16.0182ZM11.2252 20.8707C10.9883 20.6643 10.8286 20.3939 10.7642 20.1004L9.29907 20.4222C9.43378 21.0355 9.76478 21.5877 10.2397 22.0016L11.2252 20.8707ZM17.695 16.7867C18.3076 17.8135 18.7343 18.531 18.9924 19.094C19.2521 19.6604 19.2728 19.9324 19.2358 20.1004L20.7009 20.4222C20.845 19.766 20.6545 19.1201 20.356 18.4689C20.0559 17.8143 19.5776 17.0145 18.9832 16.0182L17.695 16.7867ZM15 22.75C16.19 22.75 17.1412 22.751 17.8731 22.6756C18.6003 22.6007 19.2575 22.4398 19.7603 22.0016L18.7748 20.8707C18.6306 20.9964 18.3608 21.1174 17.7194 21.1835C17.0827 21.249 16.2236 21.25 15 21.25V22.75ZM19.2358 20.1004C19.1714 20.3939 19.0117 20.6643 18.7748 20.8707L19.7603 22.0016C20.2352 21.5877 20.5662 21.0355 20.7009 20.4222L19.2358 20.1004ZM18.9832 16.0182C18.3888 15.0217 17.9125 14.2212 17.4772 13.6429C17.042 13.0648 16.566 12.5933 15.9259 12.392L15.4759 13.8229C15.6637 13.882 15.9035 14.0464 16.2787 14.545C16.6539 15.0433 17.0827 15.7601 17.695 16.7867L18.9832 16.0182ZM12.305 16.7867C12.9173 15.7601 13.3461 15.0433 13.7213 14.545C14.0965 14.0464 14.3363 13.882 14.5241 13.8229L14.0741 12.392C13.434 12.5933 12.958 13.0648 12.5228 13.6429C12.0875 14.2212 11.6112 15.0217 11.0168 16.0182L12.305 16.7867ZM15.9259 12.392C15.3239 12.2027 14.6761 12.2027 14.0741 12.392L14.5241 13.8229C14.8332 13.7257 15.1668 13.7257 15.4759 13.8229L15.9259 12.392ZM15 20.5H15.01V19H15V20.5ZM15.76 17.5V16.375H14.26V17.5H15.76Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
