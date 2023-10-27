export const PenConnectUsbIcon = ({
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
        d="M17.2141 7.98239L18.6158 6.58063C19.39 5.80646 20.6452 5.80646 21.4194 6.58063C22.1935 7.3548 22.1935 8.60998 21.4194 9.38415L20.0176 10.7859M17.2141 7.98239L8.98023 16.2163C7.93493 17.2616 7.41226 17.7842 7.05637 18.4211C6.70047 19.058 6.52927 19.7771 6.18687 21.2151L6 22L6.78486 21.8131C8.22295 21.4707 8.94199 21.2995 9.57889 20.9436C10.2158 20.5877 10.7384 20.0651 11.7837 19.0198L20.0176 10.7859M17.2141 7.98239L20.0176 10.7859"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 4.25C1.58579 4.25 1.25 4.58579 1.25 5C1.25 5.41421 1.58579 5.75 2 5.75V4.25ZM8.71151 5.23717C8.8425 4.84421 8.63013 4.41947 8.23717 4.28849C7.84421 4.1575 7.41947 4.36987 7.28849 4.76283L8.71151 5.23717ZM7.45585 6.63246L8.16736 6.86963L7.45585 6.63246ZM5.5 7.25C5.08579 7.25 4.75 7.58579 4.75 8C4.75 8.41421 5.08579 8.75 5.5 8.75V7.25ZM6.86395 7.81124L7.30248 8.41967L6.86395 7.81124ZM5.78849 5.23717C5.91947 5.63013 6.34421 5.8425 6.73717 5.71151C7.13013 5.58053 7.3425 5.15579 7.21151 4.76283L5.78849 5.23717ZM5.95585 3.36754L6.66736 3.13037V3.13037L5.95585 3.36754ZM4 1.25C3.58579 1.25 3.25 1.58579 3.25 2C3.25 2.41421 3.58579 2.75 4 2.75V1.25ZM5.36395 2.18876L4.92542 2.79719L4.92542 2.79719L5.36395 2.18876ZM10 4.25H2V5.75H10V4.25ZM7.28849 4.76283L6.74434 6.39529L8.16736 6.86963L8.71151 5.23717L7.28849 4.76283ZM5.55848 7.25H5.5V8.75H5.55848V7.25ZM6.74434 6.39529C6.62887 6.74168 6.56111 6.94137 6.49559 7.08222C6.46603 7.14577 6.44572 7.17719 6.43484 7.19176C6.42981 7.19851 6.42698 7.20138 6.42637 7.20199C6.42588 7.20248 6.4258 7.20253 6.42542 7.20281L7.30248 8.41967C7.57541 8.22296 7.73754 7.96876 7.85562 7.71492C7.96557 7.47857 8.06282 7.18325 8.16736 6.86963L6.74434 6.39529ZM5.55848 8.75C5.88907 8.75 6.19999 8.75113 6.45898 8.72156C6.73713 8.68981 7.02955 8.61639 7.30248 8.41967L6.42542 7.20281C6.42503 7.20309 6.42496 7.20314 6.42434 7.20346C6.42357 7.20384 6.41995 7.20561 6.41196 7.20826C6.39469 7.21396 6.35846 7.2233 6.28883 7.23125C6.13449 7.24887 5.92362 7.25 5.55848 7.25V8.75ZM7.21151 4.76283L6.66736 3.13037L5.24434 3.60472L5.78849 5.23717L7.21151 4.76283ZM4.05848 1.25H4V2.75H4.05848V1.25ZM6.66736 3.13037C6.56282 2.81675 6.46557 2.52143 6.35562 2.28508C6.23754 2.03124 6.07541 1.77704 5.80248 1.58033L4.92542 2.79719C4.9258 2.79747 4.92588 2.79752 4.92637 2.79801C4.92698 2.79862 4.92981 2.80149 4.93484 2.80824C4.94572 2.82281 4.96603 2.85423 4.99559 2.91778C5.06111 3.05863 5.12887 3.25832 5.24434 3.60472L6.66736 3.13037ZM4.05848 2.75C4.42362 2.75 4.63449 2.75113 4.78883 2.76875C4.85846 2.7767 4.89469 2.78604 4.91196 2.79174C4.91995 2.79439 4.92357 2.79616 4.92434 2.79654C4.92496 2.79686 4.92503 2.79691 4.92542 2.79719L5.80248 1.58033C5.52955 1.38361 5.23713 1.31019 4.95898 1.27844C4.69999 1.24887 4.38907 1.25 4.05848 1.25V2.75ZM11 4.75C11.1381 4.75 11.25 4.86193 11.25 5H12.75C12.75 4.0335 11.9665 3.25 11 3.25V4.75ZM11.25 5C11.25 5.13807 11.1381 5.25 11 5.25V6.75C11.9665 6.75 12.75 5.9665 12.75 5H11.25ZM11 5.25C10.8619 5.25 10.75 5.13807 10.75 5H9.25C9.25 5.9665 10.0335 6.75 11 6.75V5.25ZM10.75 5C10.75 4.86193 10.8619 4.75 11 4.75V3.25C10.0335 3.25 9.25 4.0335 9.25 5H10.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
