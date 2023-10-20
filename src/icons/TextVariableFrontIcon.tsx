export const TextVariableFrontIcon = ({
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
        d="M19.4286 15H15.5714M17.5 3V15M17.5 3C16.6081 3 15.4624 3.11448 14.5503 3.22723C14.1645 3.27492 13.9716 3.29877 13.8009 3.38287C13.4458 3.55779 13.1595 3.94131 13.0518 4.38652C13 4.60057 13 4.84482 13 5.33333M17.5 3C18.3919 3 19.5376 3.11448 20.4497 3.22723C20.8355 3.27492 21.0284 3.29877 21.1991 3.38287C21.5542 3.55779 21.8405 3.94131 21.9482 4.38652C22 4.60057 22 4.84482 22 5.33333"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M7.5 15H4.5M6 3V15M6 3C5.20721 3 4.18884 3.11448 3.37806 3.22723C3.03514 3.27492 2.86368 3.29877 2.71192 3.38287C2.39625 3.55779 2.1418 3.94131 2.04604 4.38652C2 4.60057 2 4.84482 2 5.33333M6 3C6.79279 3 7.81116 3.11448 8.62194 3.22723C8.96486 3.27492 9.13632 3.29877 9.28808 3.38287C9.60375 3.55779 9.8582 3.94131 9.95396 4.38652C10 4.60057 10 4.84482 10 5.33333"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M2 19H10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19L22 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="19"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
