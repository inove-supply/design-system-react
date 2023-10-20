export const WindSurfIcon = ({
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
        d="M13.5381 4.17516L14.1538 4.60352L13.5381 4.17516ZM8 10.883L7.46459 10.3578C7.27256 10.5536 7.20268 10.8385 7.28235 11.1009L8 10.883ZM15.3264 17.7294C15.7294 17.8253 16.1338 17.5763 16.2296 17.1733C16.3255 16.7703 16.0765 16.366 15.6736 16.2701L15.3264 17.7294ZM14.6122 3.02375L14.8185 3.74483V3.74483L14.6122 3.02375ZM8.53033 10.4695C8.23744 10.1766 7.76256 10.1766 7.46967 10.4695C7.17678 10.7623 7.17678 11.2372 7.46967 11.5301L8.53033 10.4695ZM16 13.7498C16.4142 13.7498 16.75 13.414 16.75 12.9998C16.75 12.5856 16.4142 12.2498 16 12.2498V13.7498ZM12.9225 3.7468C11.8609 5.27256 9.95692 7.81701 7.46459 10.3578L8.53541 11.4082C11.1053 8.78835 13.0624 6.17208 14.1538 4.60352L12.9225 3.7468ZM7.28235 11.1009C7.80773 12.8313 8.54349 14.2215 9.84006 15.3205C11.12 16.4054 12.8769 17.1467 15.3264 17.7294L15.6736 16.2701C13.3231 15.711 11.83 15.0408 10.8099 14.1762C9.80651 13.3257 9.19227 12.2284 8.71765 10.6651L7.28235 11.1009ZM14.1538 4.60352C14.4083 4.23765 14.5641 4.01578 14.6945 3.86717C14.8171 3.72743 14.8473 3.73658 14.8185 3.74483L14.4059 2.30267C14.0363 2.40839 13.774 2.64193 13.567 2.87786C13.3677 3.10493 13.1568 3.41004 12.9225 3.7468L14.1538 4.60352ZM16.5 4.00064C17.0321 3.47206 17.032 3.47196 17.0319 3.47185C17.0318 3.4718 17.0317 3.47169 17.0316 3.4716C17.0314 3.47143 17.0313 3.47124 17.031 3.47103C17.0306 3.47061 17.0301 3.47012 17.0296 3.46956C17.0285 3.46844 17.027 3.46703 17.0254 3.46535C17.022 3.46198 17.0174 3.45751 17.0118 3.45201C17.0006 3.44102 16.9851 3.42589 16.9655 3.40728C16.9265 3.37013 16.8714 3.31872 16.8033 3.25834C16.6685 3.13871 16.4771 2.97837 16.2561 2.82259C16.0393 2.66975 15.77 2.50403 15.4808 2.39137C15.2051 2.28395 14.8134 2.18611 14.4059 2.30267L14.8185 3.74483C14.7681 3.75922 14.791 3.73242 14.9362 3.78902C15.068 3.84036 15.226 3.93164 15.3918 4.04856C15.5535 4.16255 15.7001 4.28474 15.8076 4.3802C15.8608 4.42737 15.9029 4.46665 15.9308 4.49329C15.9448 4.50658 15.9551 4.51664 15.9615 4.52285C15.9646 4.52595 15.9668 4.52808 15.9679 4.52918C15.9684 4.52972 15.9687 4.53 15.9687 4.53001C15.9687 4.53002 15.9687 4.52996 15.9685 4.52983C15.9685 4.52976 15.9684 4.52968 15.9683 4.52958C15.9682 4.52953 15.9681 4.52944 15.9681 4.52942C15.968 4.52932 15.9679 4.52923 16.5 4.00064ZM7.46967 11.5301C8.65377 12.7142 10.6214 13.2388 12.261 13.4911C13.9461 13.7503 15.4945 13.7498 16 13.7498V12.2498C15.5055 12.2498 14.0539 12.2492 12.489 12.0085C10.8786 11.7607 9.34623 11.2853 8.53033 10.4695L7.46967 11.5301Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 21L7 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 19H2C7 20.7143 12.9751 22 17 22C20 22 22 19.7347 22 19Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M16.0103 2C18.1781 7 16.2964 16.3438 15 19"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
