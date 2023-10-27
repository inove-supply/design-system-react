export const ShoppingBasketSecure03Icon = ({
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
        d="M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7187 10.6318 21.6188 10.7251 21.5 10.8013M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M17.4992 13C16.2328 13 15.4117 13.8076 14.4405 14.102C14.0456 14.2217 13.8482 14.2815 13.7683 14.3659C13.6884 14.4502 13.665 14.5735 13.6182 14.8201C13.1174 17.4584 14.212 19.8976 16.8222 20.847C17.1027 20.949 17.2429 21 17.5006 21C17.7583 21 17.8986 20.949 18.179 20.847C20.7891 19.8976 21.8826 17.4584 21.3817 14.8201C21.3349 14.5735 21.3114 14.4502 21.2315 14.3658C21.1516 14.2814 20.9542 14.2216 20.5593 14.102C19.5878 13.8077 18.7657 13 17.4992 13Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 11L10 3M15 3L17.5 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
