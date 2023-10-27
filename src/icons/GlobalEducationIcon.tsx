export const GlobalEducationIcon = ({
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
        d="M12.75 14.9313C12.75 14.5171 12.4142 14.1813 12 14.1813C11.5858 14.1813 11.25 14.5171 11.25 14.9313H12.75ZM8.25353 20.867L8.01796 21.5791H8.01796L8.25353 20.867ZM5.98056 20.2895L5.8441 21.027H5.8441L5.98056 20.2895ZM2.72078 5.40782L2.24085 4.83148L2.24085 4.83148L2.72078 5.40782ZM15.7465 20.867L15.5109 20.155L15.7465 20.867ZM18.0194 20.2895L18.1559 21.027L18.0194 20.2895ZM21.2792 5.40782L21.7592 4.83148V4.83148L21.2792 5.40782ZM11.25 21.443C11.25 21.8572 11.5858 22.193 12 22.193C12.4142 22.193 12.75 21.8572 12.75 21.443H11.25ZM19.4167 4.28829C19.005 4.3343 18.7086 4.7053 18.7546 5.11696C18.8006 5.52861 19.1716 5.82502 19.5833 5.77901L19.4167 4.28829ZM4.4167 5.77901C4.82835 5.82502 5.19935 5.52861 5.24536 5.11696C5.29137 4.7053 4.99495 4.3343 4.5833 4.28829L4.4167 5.77901ZM8.48911 20.155C7.78421 19.9218 6.99366 19.7143 6.11702 19.5521L5.8441 21.027C6.65432 21.1769 7.3786 21.3676 8.01796 21.5791L8.48911 20.155ZM1.25 8.93208V15.9378H2.75V8.93208H1.25ZM6.11702 19.5521C5.08275 19.3607 4.36241 19.2265 3.83932 19.0754C3.30976 18.9225 3.12221 18.788 3.03931 18.6883L1.88588 19.6473C2.26559 20.104 2.81856 20.3419 3.4231 20.5165C4.03412 20.693 4.84146 20.8415 5.8441 21.027L6.11702 19.5521ZM1.25 15.9378C1.25 16.8112 1.24888 17.5294 1.31251 18.0962C1.37725 18.673 1.51858 19.2055 1.88588 19.6473L3.03931 18.6883C2.94402 18.5737 2.85405 18.3823 2.80314 17.9289C2.75112 17.4653 2.75 16.8467 2.75 15.9378H1.25ZM2.75 8.93208C2.75 7.93223 2.75225 7.27207 2.83065 6.78267C2.90317 6.33003 3.02553 6.13004 3.20072 5.98415L2.24085 4.83148C1.69526 5.28582 1.45722 5.87328 1.34954 6.54538C1.24775 7.18071 1.25 7.98257 1.25 8.93208H2.75ZM15.982 21.5791C16.6214 21.3676 17.3457 21.1769 18.1559 21.027L17.883 19.5521C17.0063 19.7143 16.2158 19.9218 15.5109 20.155L15.982 21.5791ZM21.25 8.93208V15.9378H22.75V8.93208H21.25ZM18.1559 21.027C19.1585 20.8415 19.9659 20.693 20.5769 20.5165C21.1814 20.3419 21.7344 20.104 22.1141 19.6473L20.9607 18.6883C20.8778 18.788 20.6902 18.9225 20.1607 19.0754C19.6376 19.2265 18.9173 19.3607 17.883 19.5521L18.1559 21.027ZM21.25 15.9378C21.25 16.8467 21.2489 17.4653 21.1969 17.9289C21.146 18.3823 21.056 18.5737 20.9607 18.6883L22.1141 19.6473C22.4814 19.2055 22.6227 18.673 22.6875 18.0962C22.7511 17.5294 22.75 16.8112 22.75 15.9378H21.25ZM22.75 8.93208C22.75 7.98257 22.7522 7.18071 22.6505 6.54538C22.5428 5.87328 22.3047 5.28582 21.7592 4.83148L20.7993 5.98415C20.9745 6.13004 21.0968 6.33003 21.1693 6.78267C21.2478 7.27207 21.25 7.93223 21.25 8.93208H22.75ZM8.01796 21.5791C9.15606 21.9556 10.0208 22.2418 10.6407 22.4333C10.9503 22.529 11.2096 22.6045 11.4171 22.6566C11.6025 22.7031 11.8162 22.75 12 22.75V21.25C12.0228 21.25 11.9731 21.2496 11.7825 21.2018C11.6141 21.1595 11.385 21.0933 11.0836 21.0002C10.4814 20.8141 9.63396 20.5338 8.48911 20.155L8.01796 21.5791ZM15.5109 20.155C14.366 20.5338 13.5186 20.8141 12.9164 21.0002C12.615 21.0933 12.3859 21.1595 12.2175 21.2018C12.0269 21.2496 11.9772 21.25 12 21.25V22.75C12.1838 22.75 12.3975 22.7031 12.5829 22.6566C12.7904 22.6045 13.0497 22.529 13.3593 22.4333C13.9792 22.2418 14.8439 21.9556 15.982 21.5791L15.5109 20.155ZM11.25 14.9313V21.443H12.75V14.9313H11.25ZM19.5833 5.77901C20.2849 5.7006 20.559 5.7841 20.7993 5.98415L21.7592 4.83148C21.0557 4.24566 20.2785 4.19199 19.4167 4.28829L19.5833 5.77901ZM4.5833 4.28829C3.72154 4.19199 2.94433 4.24566 2.24085 4.83148L3.20072 5.98415C3.44095 5.7841 3.71507 5.7006 4.4167 5.77901L4.5833 4.28829Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2M12 12C13.1046 12 14 9.76142 14 7C14 4.23858 13.1046 2 12 2M12 12C10.8954 12 10 9.76142 10 7C10 4.23858 10.8954 2 12 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
