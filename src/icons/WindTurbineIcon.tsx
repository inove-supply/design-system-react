export const WindTurbineIcon = ({
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
        d="M13.5 11C13.5 11.8284 12.8284 12.5 12 12.5C11.1716 12.5 10.5 11.8284 10.5 11C10.5 10.1716 11.1716 9.5 12 9.5C12.8284 9.5 13.5 10.1716 13.5 11Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21 10.5C20.9883 10.3076 20.9708 10.1167 20.9476 9.92766C20.6197 7.25804 19.1604 4.94528 17.0722 3.5M6.92775 3.5C4.83963 4.94528 3.38027 7.25804 3.05244 9.92766C3.02923 10.1167 3.01169 10.3076 3 10.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M12 9.5V7"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M10.199 3.99008L10.3507 5.50744C10.4066 6.06576 10.4345 6.34492 10.5703 6.55077C10.6633 6.69171 10.7905 6.8068 10.94 6.88532C11.1584 7 11.4389 7 12 7C12.5611 7 12.8416 7 13.06 6.88532C13.2095 6.8068 13.3367 6.69171 13.4297 6.55077C13.5655 6.34492 13.5934 6.06576 13.6493 5.50744L13.801 3.99007C13.8837 3.16301 13.9251 2.74947 13.7332 2.45461C13.6754 2.36574 13.6038 2.28663 13.5211 2.22024C13.2468 2 12.8312 2 12 2C11.1688 2 10.7532 2 10.4789 2.22024C10.3962 2.28663 10.3246 2.36574 10.2668 2.45461C10.0749 2.74947 10.1163 3.16301 10.199 3.99008Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M10.7002 11.75L8.53516 13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M6.83097 16.0648L8.06918 15.1747C8.52478 14.8472 8.75258 14.6834 8.86293 14.4629C8.93849 14.3119 8.97457 14.1442 8.96782 13.9754C8.95797 13.729 8.81769 13.486 8.53714 13.0001C8.25659 12.5142 8.11632 12.2712 7.90782 12.1395C7.76508 12.0493 7.60182 11.9967 7.43326 11.9866C7.18707 11.9719 6.93135 12.0873 6.41992 12.3181L5.02997 12.9454C4.27236 13.2873 3.89355 13.4582 3.73412 13.7718C3.68607 13.8663 3.65335 13.9679 3.6372 14.0727C3.58362 14.4204 3.79142 14.7803 4.20701 15.5001C4.62261 16.22 4.83041 16.5799 5.1583 16.7073C5.25713 16.7457 5.36144 16.7682 5.46732 16.7738C5.8186 16.7925 6.15606 16.5499 6.83097 16.0648Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M13.2998 11.75L15.4648 13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M18.9699 12.9444L17.58 12.3171C17.0685 12.0863 16.8128 11.9709 16.5666 11.9856C16.3981 11.9957 16.2348 12.0483 16.092 12.1385C15.8836 12.2703 15.7433 12.5132 15.4627 12.9991C15.1822 13.4851 15.0419 13.728 15.032 13.9745C15.0253 14.1432 15.0614 14.3109 15.1369 14.4619C15.2473 14.6825 15.4751 14.8462 15.9307 15.1737L17.1689 16.0638C17.8438 16.549 18.1813 16.7915 18.5326 16.7728C18.6384 16.7672 18.7427 16.7447 18.8416 16.7063C19.1695 16.5789 19.3773 16.219 19.7929 15.4991C20.2085 14.7793 20.4163 14.4194 20.3627 14.0717C20.3465 13.9669 20.3138 13.8654 20.2657 13.7708C20.1063 13.4573 19.7275 13.2863 18.9699 12.9444Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M12 12.5V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M18 22H6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
