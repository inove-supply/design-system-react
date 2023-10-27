export const Tap08Icon = ({
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
        d="M20.25 11.5C20.25 11.0858 19.9142 10.75 19.5 10.75C19.0858 10.75 18.75 11.0858 18.75 11.5H20.25ZM5.56729 17.4792L6.18779 17.0579L6.18779 17.0579L5.56729 17.4792ZM6.1309 18.3093L5.5104 18.7306H5.5104L6.1309 18.3093ZM6.0343 10.8747L5.51704 10.3316C5.50364 10.3444 5.49071 10.3577 5.47829 10.3714L6.0343 10.8747ZM7.99493 10.0431C8.29487 9.75741 8.30643 9.28268 8.02076 8.98274C7.73508 8.6828 7.26035 8.67124 6.96041 8.95691L7.99493 10.0431ZM4.00519 14.4372L4.75387 14.3927L4.00519 14.4372ZM4.05904 13.6756L3.32406 13.5262L4.05904 13.6756ZM19.2083 18.168L19.9139 18.4223L19.2083 18.168ZM16.1066 21.2136L15.8604 20.5051L16.1066 21.2136ZM9.94702 21.3872L10.1027 20.6535H10.1027L9.94702 21.3872ZM7.47767 20.0896L7.99483 19.5464L7.47767 20.0896ZM6.75 14C6.75 14.4142 7.08579 14.75 7.5 14.75C7.91422 14.75 8.25 14.4142 8.25 14H6.75ZM9.75 10.5C9.75 10.9142 10.0858 11.25 10.5 11.25C10.9142 11.25 11.25 10.9142 11.25 10.5H9.75ZM12.75 10.5C12.75 10.9142 13.0858 11.25 13.5 11.25C13.9142 11.25 14.25 10.9142 14.25 10.5H12.75ZM13.5 8.5V7.75C13.0858 7.75 12.75 8.08579 12.75 8.5H13.5ZM15.75 11.5C15.75 11.9142 16.0858 12.25 16.5 12.25C16.9142 12.25 17.25 11.9142 17.25 11.5H15.75ZM16.5 9.5L16.6233 8.7602C16.4058 8.72396 16.1834 8.78523 16.0152 8.92773C15.847 9.07024 15.75 9.27954 15.75 9.5H16.5ZM17.8288 9.72147L17.9521 8.98167L17.8288 9.72147ZM18.75 12.5C18.75 12.9142 19.0858 13.25 19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5H18.75ZM18.75 11.5V14.3347H20.25V11.5H18.75ZM4.94679 17.9005L5.5104 18.7306L6.7514 17.888L6.18779 17.0579L4.94679 17.9005ZM6.55156 11.4178L7.99493 10.0431L6.96041 8.95691L5.51704 10.3316L6.55156 11.4178ZM6.18779 17.0579C5.67498 16.3026 5.32104 15.7799 5.08415 15.346C4.85404 14.9245 4.76895 14.6465 4.75387 14.3927L3.25651 14.4817C3.28969 15.0402 3.48104 15.54 3.76761 16.0648C4.0474 16.5773 4.45038 17.1693 4.94679 17.9005L6.18779 17.0579ZM5.47829 10.3714C4.88366 11.0282 4.40143 11.5597 4.05239 12.029C3.69502 12.5095 3.43545 12.978 3.32406 13.5262L4.79403 13.8249C4.84477 13.5751 4.96846 13.3108 5.25599 12.9242C5.55186 12.5264 5.97619 12.0564 6.59031 11.3781L5.47829 10.3714ZM4.75387 14.3927C4.74257 14.2026 4.75605 14.0118 4.79403 13.8249L3.32406 13.5262C3.2602 13.8405 3.23749 14.1616 3.25651 14.4817L4.75387 14.3927ZM18.75 14.3347C18.75 16.4151 18.7388 17.2586 18.5027 17.9137L19.9139 18.4223C20.2612 17.4586 20.25 16.2862 20.25 14.3347H18.75ZM12.2027 22.25C14.1932 22.25 15.3787 22.2605 16.3527 21.922L15.8604 20.5051C15.1858 20.7395 14.3182 20.75 12.2027 20.75V22.25ZM18.5027 17.9137C18.068 19.1201 17.0992 20.0747 15.8604 20.5051L16.3527 21.922C18.0121 21.3455 19.3231 20.0616 19.9139 18.4223L18.5027 17.9137ZM12.2027 20.75C11.0205 20.75 10.5391 20.7461 10.1027 20.6535L9.79137 22.1209C10.4181 22.2539 11.0861 22.25 12.2027 22.25V20.75ZM5.5104 18.7306C6.12929 19.6421 6.49816 20.1926 6.96051 20.6328L7.99483 19.5464C7.67629 19.2431 7.4076 18.8545 6.7514 17.888L5.5104 18.7306ZM10.1027 20.6535C9.30688 20.4847 8.57685 20.1005 7.99483 19.5464L6.96051 20.6328C7.74531 21.38 8.72624 21.8949 9.79137 22.1209L10.1027 20.6535ZM8.25 14V4H6.75V14H8.25ZM9.75 4V7.5H11.25V4H9.75ZM9 3.25C9.41422 3.25 9.75 3.58579 9.75 4H11.25C11.25 2.75736 10.2426 1.75 9 1.75V3.25ZM8.25 4C8.25 3.58579 8.58579 3.25 9 3.25V1.75C7.75736 1.75 6.75 2.75736 6.75 4H8.25ZM10.5 8.25H11.5V6.75H10.5V8.25ZM12.75 9.5V10.5H14.25V9.5H12.75ZM11.5 8.25C12.1904 8.25 12.75 8.80964 12.75 9.5H14.25C14.25 7.98122 13.0188 6.75 11.5 6.75V8.25ZM14.25 9.5V8.5H12.75V9.5H14.25ZM13.5 9.25H14.5V7.75H13.5V9.25ZM15.75 10.5V11.5H17.25V10.5H15.75ZM14.5 9.25C15.1904 9.25 15.75 9.80964 15.75 10.5H17.25C17.25 8.98122 16.0188 7.75 14.5 7.75V9.25ZM17.25 10.5V9.5H15.75V10.5H17.25ZM16.3767 10.2398L17.7055 10.4613L17.9521 8.98167L16.6233 8.7602L16.3767 10.2398ZM18.75 11.6943V12.5H20.25V11.6943H18.75ZM17.7055 10.4613C18.3082 10.5617 18.75 11.0832 18.75 11.6943H20.25C20.25 10.3499 19.2781 9.20267 17.9521 8.98167L17.7055 10.4613ZM9.75 7.5V10.5H11.25V7.5H9.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
