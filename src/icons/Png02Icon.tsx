export const Png02Icon = ({
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
        d="M6.25 18C6.25 18.4142 6.58579 18.75 7 18.75C7.41421 18.75 7.75 18.4142 7.75 18H6.25ZM17.9307 17.7559L18.4628 17.2273H18.4628L17.9307 17.7559ZM20.7575 17.7559L20.2255 17.2273L20.7575 17.7559ZM17.9307 13.2443L18.4628 13.7729V13.7729L17.9307 13.2443ZM20.2325 13.9065C20.2728 14.3187 20.6397 14.6202 21.0519 14.58C21.4642 14.5397 21.7657 14.1728 21.7254 13.7606L20.2325 13.9065ZM19.6565 15.1737C19.2461 15.2297 18.9589 15.6079 19.015 16.0183C19.0711 16.4287 19.4492 16.7159 19.8596 16.6598L19.6565 15.1737ZM16.2563 13.0002C16.2563 12.586 15.9205 12.2502 15.5063 12.2502C15.0921 12.2502 14.7563 12.586 14.7563 13.0002H16.2563ZM11.2651 18C11.2651 18.4142 11.6009 18.75 12.0151 18.75C12.4293 18.75 12.7651 18.4142 12.7651 18H11.2651ZM14.5469 16.8512L13.8986 17.2284V17.2284L14.5469 16.8512ZM12.9745 14.149L12.3263 14.5262L12.9745 14.149ZM15.3203 17.7963L15.5661 18.5049H15.5661L15.3203 17.7963ZM12.2011 13.2039L12.4469 13.9125L12.2011 13.2039ZM8.00773 13.7502H8.67954V12.2502H8.00773V13.7502ZM7.75 18V15.5001H6.25V18H7.75ZM7.75 15.5001V14.0002H6.25V15.5001H7.75ZM8.67954 14.7501H7V16.2501H8.67954V14.7501ZM9.1892 14.2502C9.1892 14.5208 8.9665 14.7501 8.67954 14.7501V16.2501C9.78397 16.2501 10.6892 15.3602 10.6892 14.2502H9.1892ZM8.67954 13.7502C8.9665 13.7502 9.1892 13.9795 9.1892 14.2502H10.6892C10.6892 13.1402 9.78397 12.2502 8.67954 12.2502V13.7502ZM8.00773 12.2502C7.79125 12.2502 7.55401 12.2486 7.35567 12.2751C7.13635 12.3044 6.85589 12.3795 6.6193 12.6143L7.67585 13.679C7.63703 13.7176 7.59436 13.7427 7.5609 13.7564C7.5334 13.7676 7.5247 13.7658 7.55403 13.7619C7.58381 13.758 7.63201 13.7543 7.71245 13.7523C7.79251 13.7503 7.8862 13.7502 8.00773 13.7502V12.2502ZM7.75 14.0002C7.75 13.8795 7.75005 13.7868 7.75206 13.7076C7.75409 13.628 7.75777 13.5809 7.76166 13.5523C7.76547 13.5241 7.76696 13.5341 7.75507 13.5627C7.74069 13.5974 7.71474 13.6404 7.67585 13.679L6.6193 12.6143C6.38191 12.8498 6.3051 13.1305 6.27524 13.3509C6.24838 13.5491 6.25 13.7858 6.25 14.0002H7.75ZM18.4382 16.3334V14.6668H16.9382V16.3334H18.4382ZM19.3441 17.25C18.9325 17.25 18.6997 17.2484 18.5362 17.2263C18.3948 17.2071 18.4216 17.1859 18.4628 17.2273L17.3987 18.2845C17.6823 18.57 18.0256 18.6708 18.3351 18.7127C18.6225 18.7516 18.9752 18.75 19.3441 18.75V17.25ZM16.9382 16.3334C16.9382 16.7052 16.9367 17.0589 16.9752 17.3471C17.0165 17.6563 17.1157 17.9998 17.3987 18.2845L18.4628 17.2273C18.5032 17.268 18.4813 17.2931 18.4619 17.1485C18.4398 16.9827 18.4382 16.7473 18.4382 16.3334H16.9382ZM20.25 16.3334C20.25 16.7473 20.2484 16.9827 20.2263 17.1485C20.207 17.2931 20.185 17.268 20.2255 17.2273L21.2895 18.2845C21.5725 17.9998 21.6718 17.6563 21.7131 17.3471C21.7516 17.0589 21.75 16.7052 21.75 16.3334H20.25ZM19.3441 18.75C19.7131 18.75 20.0657 18.7516 20.3532 18.7127C20.6627 18.6708 21.0059 18.57 21.2895 18.2845L20.2255 17.2273C20.2666 17.1859 20.2934 17.2071 20.152 17.2263C19.9885 17.2484 19.7557 17.25 19.3441 17.25V18.75ZM19.3441 12.2502C18.9752 12.2502 18.6225 12.2486 18.3351 12.2875C18.0256 12.3294 17.6823 12.4302 17.3987 12.7157L18.4628 13.7729C18.4216 13.8143 18.3948 13.7931 18.5362 13.7739C18.6997 13.7518 18.9325 13.7502 19.3441 13.7502V12.2502ZM18.4382 14.6668C18.4382 14.2529 18.4398 14.0175 18.4619 13.8518C18.4813 13.7071 18.5032 13.7322 18.4628 13.7729L17.3987 12.7157C17.1157 13.0005 17.0165 13.3439 16.9752 13.6531C16.9367 13.9413 16.9382 14.2951 16.9382 14.6668H18.4382ZM21.75 16.3334C21.75 15.8547 21.4678 15.5353 21.1781 15.3698C20.9258 15.2256 20.6466 15.1781 20.4532 15.1589C20.2449 15.1382 20.0472 15.1426 19.9087 15.1507C19.8377 15.1548 19.7779 15.1601 19.7347 15.1645C19.713 15.1668 19.6952 15.1688 19.682 15.1704C19.6754 15.1712 19.6699 15.1719 19.6657 15.1725C19.6635 15.1727 19.6617 15.173 19.6602 15.1732C19.6594 15.1733 19.6587 15.1734 19.6581 15.1734C19.6578 15.1735 19.6575 15.1735 19.6573 15.1736C19.6571 15.1736 19.657 15.1736 19.6569 15.1736C19.6567 15.1736 19.6565 15.1737 19.7581 15.9168C19.8596 16.6598 19.8595 16.6599 19.8593 16.6599C19.8593 16.6599 19.8591 16.6599 19.859 16.6599C19.8588 16.66 19.8587 16.66 19.8585 16.66C19.8582 16.66 19.858 16.6601 19.8578 16.6601C19.8575 16.6601 19.8574 16.6601 19.8576 16.6601C19.8581 16.6601 19.8596 16.6599 19.8621 16.6596C19.8671 16.659 19.876 16.6579 19.8882 16.6567C19.9129 16.6541 19.9502 16.6508 19.9955 16.6481C20.0899 16.6427 20.2027 16.6414 20.3048 16.6515C20.4219 16.6632 20.4532 16.6832 20.4338 16.6721C20.4166 16.6622 20.3664 16.6297 20.3206 16.5602C20.2703 16.484 20.25 16.4007 20.25 16.3334H21.75ZM14.7563 13.0002V16.5184H16.2563V13.0002H14.7563ZM12.7651 18V14.4818H11.2651V18H12.7651ZM15.1951 16.474L13.6228 13.7718L12.3263 14.5262L13.8986 17.2284L15.1951 16.474ZM14.7563 16.5184C14.7563 16.9432 14.7551 17.1953 14.7376 17.3541C14.7287 17.4345 14.7213 17.4268 14.741 17.382C14.7669 17.3229 14.8596 17.1623 15.0745 17.0877L15.5661 18.5049C15.874 18.3981 16.0365 18.1627 16.1147 17.9844C16.1866 17.8203 16.2141 17.6488 16.2285 17.5189C16.2574 17.2571 16.2563 16.9025 16.2563 16.5184H14.7563ZM13.8986 17.2284C14.0831 17.5454 14.2571 17.8472 14.4125 18.0527C14.4887 18.1534 14.6056 18.2939 14.7666 18.3988C14.9544 18.5213 15.2433 18.6168 15.5661 18.5049L15.0745 17.0877C15.1727 17.0537 15.2801 17.0451 15.3838 17.0639C15.4809 17.0815 15.5493 17.1185 15.5856 17.1422C15.6453 17.1811 15.6539 17.2075 15.6089 17.148C15.5713 17.0982 15.5197 17.0205 15.4471 16.9014C15.3757 16.7842 15.2942 16.6443 15.1951 16.474L13.8986 17.2284ZM12.7651 14.4818C12.7651 14.057 12.7663 13.8049 12.7838 13.6461C12.7927 13.5657 12.8001 13.5734 12.7804 13.6183C12.7545 13.6773 12.6618 13.8379 12.4469 13.9125L11.9553 12.4953C11.6474 12.6021 11.4849 12.8375 11.4067 13.0158C11.3347 13.1799 11.3073 13.3514 11.2929 13.4813C11.264 13.7431 11.2651 14.0977 11.2651 14.4818H12.7651ZM13.6228 13.7718C13.4383 13.4549 13.2643 13.153 13.1089 12.9475C13.0327 12.8468 12.9158 12.7063 12.7548 12.6014C12.567 12.479 12.2781 12.3834 11.9553 12.4953L12.4469 13.9125C12.3487 13.9465 12.2413 13.9551 12.1376 13.9363C12.0405 13.9187 11.9721 13.8817 11.9358 13.8581C11.8761 13.8192 11.8674 13.7927 11.9125 13.8523C11.9501 13.902 12.0017 13.9797 12.0742 14.0988C12.1457 14.216 12.2272 14.3559 12.3263 14.5262L13.6228 13.7718ZM19.3441 13.7502C19.549 13.7502 19.7125 13.7483 19.868 13.757C20.0223 13.7657 20.1203 13.7831 20.1816 13.8033C20.2354 13.821 20.2303 13.8306 20.2154 13.8124C20.1995 13.7931 20.2225 13.8036 20.2325 13.9065L21.7254 13.7606C21.693 13.4288 21.5859 13.1179 21.3749 12.8608C21.1649 12.6049 20.8997 12.4606 20.6509 12.3786C20.2054 12.2318 19.6681 12.2502 19.3441 12.2502V13.7502Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
