export const Zip01Icon = ({
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
        d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3561 22C16.3561 22.4142 16.6918 22.75 17.1061 22.75C17.5203 22.75 17.8561 22.4142 17.8561 22H16.3561ZM13.6969 22.75C14.1111 22.75 14.4469 22.4142 14.4469 22C14.4469 21.5858 14.1111 21.25 13.6969 21.25V22.75ZM10.7878 21.25C10.3736 21.25 10.0378 21.5858 10.0378 22C10.0378 22.4142 10.3736 22.75 10.7878 22.75V21.25ZM10.7878 15.25C10.3736 15.25 10.0378 15.5858 10.0378 16C10.0378 16.4142 10.3736 16.75 10.7878 16.75V15.25ZM13.6969 16.75C14.1111 16.75 14.4469 16.4142 14.4469 16C14.4469 15.5858 14.1111 15.25 13.6969 15.25V16.75ZM3.5 15.25C3.08579 15.25 2.75 15.5858 2.75 16C2.75 16.4142 3.08579 16.75 3.5 16.75V15.25ZM7.37879 22.75C7.793 22.75 8.12879 22.4142 8.12879 22C8.12879 21.5858 7.793 21.25 7.37879 21.25V22.75ZM6.14914 18.1766L5.58105 17.6869L6.14914 18.1766ZM4.72964 19.8234L4.16155 19.3338L4.72964 19.8234ZM3.74668 21.6303L4.36342 21.2035H4.36342L3.74668 21.6303ZM18.2697 16.75H19.0455V15.25H18.2697V16.75ZM17.8561 22V19H16.3561V22H17.8561ZM17.8561 19V17.2H16.3561V19H17.8561ZM19.0455 18.25H17.1061V19.75H19.0455V18.25ZM19.75 17.5C19.75 17.9361 19.413 18.25 19.0455 18.25V19.75C20.2846 19.75 21.25 18.7207 21.25 17.5H19.75ZM19.0455 16.75C19.413 16.75 19.75 17.0639 19.75 17.5H21.25C21.25 16.2793 20.2846 15.25 19.0455 15.25V16.75ZM18.2697 15.25C18.0173 15.25 17.7502 15.2483 17.5283 15.2791C17.2824 15.3132 16.9848 15.3992 16.738 15.6536L17.8149 16.6978C17.7386 16.7766 17.6633 16.7747 17.7343 16.7649C17.7732 16.7595 17.8324 16.7549 17.9266 16.7525C18.0203 16.7501 18.1297 16.75 18.2697 16.75V15.25ZM17.8561 17.2C17.8561 17.0559 17.8561 16.9421 17.8585 16.8444C17.8609 16.7462 17.8654 16.6823 17.8711 16.6386C17.8821 16.5543 17.8881 16.6223 17.8149 16.6978L16.738 15.6536C16.4944 15.9049 16.4153 16.2022 16.3837 16.4447C16.3546 16.6678 16.3561 16.9377 16.3561 17.2H17.8561ZM13.6969 21.25H12.2424V22.75H13.6969V21.25ZM12.2424 21.25H10.7878V22.75H12.2424V21.25ZM10.7878 16.75H12.2424V15.25H10.7878V16.75ZM12.2424 16.75H13.6969V15.25H12.2424V16.75ZM11.4924 16V22H12.9924V16H11.4924ZM3.5 16.75H4.64305V15.25H3.5V16.75ZM7.37879 21.25H6.23574V22.75H7.37879V21.25ZM5.58105 17.6869L4.16155 19.3338L5.29773 20.3131L6.71723 18.6662L5.58105 17.6869ZM6.23574 21.25C5.4715 21.25 4.96523 21.2488 4.61402 21.2086C4.225 21.1642 4.28771 21.0941 4.36342 21.2035L3.12993 22.0571C3.46146 22.5362 4.02428 22.651 4.44363 22.6989C4.90079 22.7512 5.51115 22.75 6.23574 22.75V21.25ZM4.16155 19.3338C3.76808 19.7902 3.40695 20.2054 3.19244 20.5566C3.08218 20.7372 2.96962 20.9641 2.93343 21.2229C2.8928 21.5135 2.95453 21.8036 3.12993 22.0571L4.36342 21.2035C4.41092 21.2722 4.42833 21.3637 4.41898 21.4306C4.41408 21.4657 4.4084 21.4436 4.47263 21.3384C4.60709 21.1182 4.86535 20.8147 5.29773 20.3131L4.16155 19.3338ZM4.64305 16.75C5.40729 16.75 5.91355 16.7512 6.26476 16.7914C6.65378 16.8358 6.59107 16.9059 6.51536 16.7965L7.74886 15.9429C7.41733 15.4638 6.85451 15.349 6.43516 15.3011C5.978 15.2488 5.36764 15.25 4.64305 15.25V16.75ZM6.71723 18.6662C7.1107 18.2098 7.47184 17.7946 7.68635 17.4434C7.79661 17.2628 7.90917 17.0359 7.94535 16.7771C7.98599 16.4865 7.92426 16.1964 7.74886 15.9429L6.51536 16.7965C6.46787 16.7278 6.45046 16.6363 6.45981 16.5694C6.46471 16.5343 6.47038 16.5564 6.40616 16.6616C6.27169 16.8818 6.01344 17.1853 5.58105 17.6869L6.71723 18.6662Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
