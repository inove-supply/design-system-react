export const PyramidStructure01Icon = ({
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
        d="M12 2C12.9022 2 13.675 2.70814 14.5875 3.99725C15.4939 5.2777 15.9471 5.91793 15.6683 6.45896C15.3895 7 14.5733 7 12.9409 7H11.0591C9.42669 7 8.6105 7 8.33169 6.45896C8.05287 5.91793 8.50607 5.2777 9.41248 3.99725C10.325 2.70814 11.0978 2 12 2Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M5.82894 14H18.1711C18.9276 14 19.3059 14 19.4509 13.7508C19.5958 13.5017 19.4091 13.1765 19.0359 12.526C18.9358 12.3515 18.8353 12.1773 18.7346 12.0031C18.1692 11.0254 17.8866 10.5365 17.4209 10.2683C16.9552 10 16.3876 10 15.2523 10H8.74773C7.61242 10 7.04477 10 6.57911 10.2683C6.11344 10.5365 5.83076 11.0254 5.2654 12.0031C5.16471 12.1773 5.06424 12.3515 4.96412 12.526C4.59085 13.1765 4.40422 13.5017 4.54914 13.7508C4.69406 14 5.07236 14 5.82894 14Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M8.24328 22H15.7567C19.3099 22 21.0866 22 21.7671 20.8828C22.1944 20.1813 22.0132 19.3288 21.392 18.0487C21.1514 17.5529 21.0311 17.305 20.7877 17.1525C20.5442 17 20.2499 17 19.6613 17H4.33871C3.75012 17 3.45582 17 3.21234 17.1525C2.96886 17.305 2.84856 17.5529 2.60797 18.0487C1.98681 19.3288 1.80564 20.1813 2.23293 20.8828C2.91344 22 4.69006 22 8.24328 22Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
