export const PenToolMinusIcon = ({
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
        d="M14.2852 19.3647L6.82243 20.7506C5.39103 21.0164 4.67534 21.1493 4.26303 20.737C3.85072 20.3246 3.98362 19.6089 4.24943 18.1774L5.63523 10.7143C5.85745 9.51762 5.96856 8.91925 6.36302 8.5577C6.75749 8.19616 7.47889 8.1256 8.9217 7.98448C10.3123 7.84847 11.6283 7.37177 13 6L19 12.0005C17.6283 13.3723 17.1513 14.6874 17.0151 16.0781C16.8738 17.5211 16.8031 18.2426 16.4416 18.637C16.0801 19.0314 15.4818 19.1425 14.2852 19.3647Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M2 4H8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M12 15.2105C11.4405 15.1197 10.9289 14.8763 10.5263 14.4737M10.5263 14.4737C10.1237 14.0711 9.8803 13.5595 9.78947 13M10.5263 14.4737L5 20"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M13 6C13.7123 4.9491 14.6771 3.1812 16.1065 3.01098C17.0822 2.89479 17.8906 3.70312 19.5072 5.31978L19.6802 5.49277C21.2969 7.10944 22.1052 7.91777 21.989 8.8935C21.8188 10.3229 20.0509 11.2877 19 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
