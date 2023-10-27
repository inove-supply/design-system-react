export const Store02Icon = ({
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
        d="M2.91199 5.23509L2.19806 5.0053H2.19806L2.91199 5.23509ZM2.22827 7.35933L2.94219 7.58912L2.22827 7.35933ZM21.088 5.23509L20.3741 5.46488V5.46488L21.088 5.23509ZM21.7717 7.35933L22.4857 7.12954L21.7717 7.35933ZM9.65635 9.77316C9.36534 9.47841 8.89047 9.47538 8.59572 9.7664C8.30096 10.0574 8.29793 10.5323 8.58895 10.827L9.65635 9.77316ZM15.4112 9.77261C15.1202 9.47778 14.6454 9.47464 14.3505 9.76559C14.0557 10.0565 14.0526 10.5314 14.3435 10.8262L15.4112 9.77261ZM2.37533 9.57004L2.98333 9.13091L2.98333 9.13091L2.37533 9.57004ZM10.8727 8.68818C10.9766 8.28722 10.7358 7.87792 10.3349 7.77399C9.9339 7.67006 9.52461 7.91085 9.42068 8.31182L10.8727 8.68818ZM16.6267 8.68818C16.7306 8.28722 16.4899 7.87792 16.0889 7.77399C15.6879 7.67006 15.2786 7.91085 15.1747 8.31182L16.6267 8.68818ZM21.6247 9.57004L21.0167 9.13091V9.13091L21.6247 9.57004ZM21.9735 8.70667L21.2325 8.59103V8.59103L21.9735 8.70667ZM2.0265 8.70667L1.28547 8.82231L2.0265 8.70667ZM4.05507 2.87752L3.60645 2.27649L3.60645 2.27649L4.05507 2.87752ZM2.19806 5.0053L1.51434 7.12954L2.94219 7.58912L3.62592 5.46488L2.19806 5.0053ZM20.3741 5.46488L21.0578 7.58912L22.4857 7.12954L21.8019 5.0053L20.3741 5.46488ZM6.57622 3.25H17.4238V1.75H6.57622V3.25ZM11.9993 10.75C11.0804 10.75 10.2518 10.3762 9.65635 9.77316L8.58895 10.827C9.45574 11.705 10.6646 12.25 11.9993 12.25V10.75ZM17.7547 10.75C16.8355 10.75 16.0066 10.376 15.4112 9.77261L14.3435 10.8262C15.2104 11.7046 16.4196 12.25 17.7547 12.25V10.75ZM6.2453 10.75C5.01112 10.75 3.67028 10.082 2.98333 9.13091L1.76733 10.0092C2.75148 11.3718 4.55603 12.25 6.2453 12.25V10.75ZM9.42068 8.31182C9.05796 9.71116 7.77553 10.75 6.2453 10.75V12.25C8.46912 12.25 10.341 10.7393 10.8727 8.68818L9.42068 8.31182ZM15.1747 8.31182C14.812 9.71116 13.5296 10.75 11.9993 10.75V12.25C14.2231 12.25 16.0951 10.7393 16.6267 8.68818L15.1747 8.31182ZM21.0167 9.13091C20.3297 10.082 18.9889 10.75 17.7547 10.75V12.25C19.444 12.25 21.2485 11.3718 22.2327 10.0092L21.0167 9.13091ZM21.0578 7.58912C21.2449 8.1704 21.2777 8.30138 21.2325 8.59103L22.7145 8.82231C22.8208 8.1415 22.6686 7.69774 22.4857 7.12954L21.0578 7.58912ZM22.2327 10.0092C22.3174 9.89189 22.4327 9.73648 22.5243 9.53046C22.617 9.32192 22.6717 9.09674 22.7145 8.82231L21.2325 8.59103C21.1996 8.80184 21.1709 8.88229 21.1536 8.92111C21.1353 8.96244 21.114 8.99609 21.0167 9.13091L22.2327 10.0092ZM21.8019 5.0053C21.5947 4.36137 21.4214 3.81957 21.2309 3.39553C21.0333 2.95545 20.7871 2.57024 20.3936 2.27649L19.4963 3.47854C19.6085 3.56231 19.7215 3.69586 19.8627 4.01018C20.0111 4.34054 20.1565 4.78877 20.3741 5.46488L21.8019 5.0053ZM17.4238 3.25C18.1135 3.25 18.5655 3.25121 18.9105 3.292C19.2346 3.33033 19.3863 3.39642 19.4963 3.47854L20.3936 2.27649C19.9978 1.9811 19.5607 1.85843 19.0866 1.80238C18.6333 1.74879 18.0777 1.75 17.4238 1.75V3.25ZM1.51434 7.12954C1.33145 7.69774 1.17923 8.1415 1.28547 8.82231L2.76753 8.59103C2.72233 8.30137 2.7551 8.1704 2.94219 7.58912L1.51434 7.12954ZM2.98333 9.13091C2.88596 8.99609 2.86474 8.96244 2.84636 8.92111C2.82911 8.88229 2.80043 8.80184 2.76753 8.59103L1.28547 8.82231C1.3283 9.09674 1.383 9.32192 1.47571 9.53046C1.5673 9.73648 1.68263 9.89189 1.76733 10.0092L2.98333 9.13091ZM3.62592 5.46488C3.84354 4.78877 3.98895 4.34054 4.13735 4.01018C4.27854 3.69586 4.39148 3.56231 4.5037 3.47854L3.60645 2.27649C3.21291 2.57024 2.96674 2.95545 2.76906 3.39553C2.57858 3.81957 2.40532 4.36137 2.19806 5.0053L3.62592 5.46488ZM6.57622 1.75C5.9223 1.75 5.36666 1.74879 4.9134 1.80238C4.43932 1.85843 4.00218 1.9811 3.60645 2.27649L4.5037 3.47854C4.61373 3.39642 4.76536 3.33033 5.08952 3.292C5.43449 3.25121 5.88655 3.25 6.57622 3.25V1.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M3 10.5V15.5C3 18.3284 3 19.7426 3.87868 20.6213C4.75736 21.5 6.17157 21.5 9 21.5H15C17.8284 21.5 19.2426 21.5 20.1213 20.6213C21 19.7426 21 18.3284 21 15.5V10.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7 18H11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
