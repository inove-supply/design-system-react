export const StoreAdd01Icon = ({
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
        d="M3 10L3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H12.5M21 10V11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M2.91199 4.73509L2.19806 4.5053H2.19806L2.91199 4.73509ZM2.22827 6.85933L2.94219 7.08912L2.22827 6.85933ZM21.088 4.73509L20.3741 4.96488V4.96488L21.088 4.73509ZM21.7717 6.85933L22.4857 6.62954L21.7717 6.85933ZM9.65635 9.27316C9.36534 8.97841 8.89047 8.97538 8.59572 9.2664C8.30096 9.55742 8.29793 10.0323 8.58895 10.327L9.65635 9.27316ZM15.4112 9.27261C15.1202 8.97778 14.6454 8.97464 14.3505 9.26559C14.0557 9.55654 14.0526 10.0314 14.3435 10.3262L15.4112 9.27261ZM2.37533 9.07004L2.98333 8.63091L2.98333 8.63091L2.37533 9.07004ZM10.8727 8.18818C10.9766 7.78722 10.7358 7.37792 10.3349 7.27399C9.9339 7.17006 9.52461 7.41085 9.42068 7.81182L10.8727 8.18818ZM16.6267 8.18818C16.7306 7.78722 16.4899 7.37792 16.0889 7.27399C15.6879 7.17006 15.2786 7.41085 15.1747 7.81182L16.6267 8.18818ZM21.6247 9.07004L21.0167 8.63091V8.63091L21.6247 9.07004ZM21.9735 8.20667L21.2325 8.09103V8.09103L21.9735 8.20667ZM2.0265 8.20667L1.28547 8.32231L2.0265 8.20667ZM4.05507 2.37752L3.60645 1.77649L3.60645 1.77649L4.05507 2.37752ZM2.19806 4.5053L1.51434 6.62954L2.94219 7.08912L3.62592 4.96488L2.19806 4.5053ZM20.3741 4.96488L21.0578 7.08912L22.4857 6.62954L21.8019 4.5053L20.3741 4.96488ZM6.57622 2.75H17.4238V1.25H6.57622V2.75ZM11.9993 10.25C11.0804 10.25 10.2518 9.87621 9.65635 9.27316L8.58895 10.327C9.45574 11.205 10.6646 11.75 11.9993 11.75V10.25ZM17.7547 10.25C16.8355 10.25 16.0066 9.87598 15.4112 9.27261L14.3435 10.3262C15.2104 11.2046 16.4196 11.75 17.7547 11.75V10.25ZM6.2453 10.25C5.01112 10.25 3.67028 9.58203 2.98333 8.63091L1.76733 9.50917C2.75148 10.8718 4.55603 11.75 6.2453 11.75V10.25ZM9.42068 7.81182C9.05796 9.21116 7.77553 10.25 6.2453 10.25V11.75C8.46912 11.75 10.341 10.2393 10.8727 8.18818L9.42068 7.81182ZM15.1747 7.81182C14.812 9.21116 13.5296 10.25 11.9993 10.25V11.75C14.2231 11.75 16.0951 10.2393 16.6267 8.18818L15.1747 7.81182ZM21.0167 8.63091C20.3297 9.58203 18.9889 10.25 17.7547 10.25V11.75C19.444 11.75 21.2485 10.8718 22.2327 9.50917L21.0167 8.63091ZM21.0578 7.08912C21.2449 7.6704 21.2777 7.80138 21.2325 8.09103L22.7145 8.32231C22.8208 7.6415 22.6686 7.19774 22.4857 6.62954L21.0578 7.08912ZM22.2327 9.50917C22.3174 9.39189 22.4327 9.23648 22.5243 9.03046C22.617 8.82192 22.6717 8.59674 22.7145 8.32231L21.2325 8.09103C21.1996 8.30184 21.1709 8.38229 21.1536 8.42111C21.1353 8.46244 21.114 8.49609 21.0167 8.63091L22.2327 9.50917ZM21.8019 4.5053C21.5947 3.86137 21.4214 3.31957 21.2309 2.89553C21.0333 2.45545 20.7871 2.07024 20.3936 1.77649L19.4963 2.97854C19.6085 3.06231 19.7215 3.19586 19.8627 3.51018C20.0111 3.84054 20.1565 4.28877 20.3741 4.96488L21.8019 4.5053ZM17.4238 2.75C18.1135 2.75 18.5655 2.75121 18.9105 2.792C19.2346 2.83033 19.3863 2.89642 19.4963 2.97854L20.3936 1.77649C19.9978 1.4811 19.5607 1.35843 19.0866 1.30238C18.6333 1.24879 18.0777 1.25 17.4238 1.25V2.75ZM1.51434 6.62954C1.33145 7.19774 1.17923 7.6415 1.28547 8.32231L2.76753 8.09103C2.72233 7.80137 2.7551 7.6704 2.94219 7.08912L1.51434 6.62954ZM2.98333 8.63091C2.88596 8.49609 2.86474 8.46244 2.84636 8.42111C2.82911 8.38229 2.80043 8.30184 2.76753 8.09103L1.28547 8.32231C1.3283 8.59674 1.383 8.82192 1.47571 9.03046C1.5673 9.23648 1.68263 9.39189 1.76733 9.50917L2.98333 8.63091ZM3.62592 4.96488C3.84354 4.28877 3.98895 3.84054 4.13735 3.51018C4.27854 3.19586 4.39148 3.06231 4.5037 2.97854L3.60645 1.77649C3.21291 2.07024 2.96674 2.45545 2.76906 2.89553C2.57858 3.31957 2.40532 3.86137 2.19806 4.5053L3.62592 4.96488ZM6.57622 1.25C5.9223 1.25 5.36666 1.24879 4.9134 1.30238C4.43932 1.35843 4.00218 1.4811 3.60645 1.77649L4.5037 2.97854C4.61373 2.89642 4.76536 2.83033 5.08952 2.792C5.43449 2.75121 5.88655 2.75 6.57622 2.75V1.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M21 10V12.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M15 18.5H22M18.5 22L18.5 15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7 17H11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
