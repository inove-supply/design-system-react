export const DatesIcon = ({
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
        d="M15.1356 4.99789L15.6633 4.46486L15.1356 4.99789ZM2.96868 17.0412L3.49629 16.5081H3.49629L2.96868 17.0412ZM1.76434 13.48C1.37122 13.6105 1.15835 14.035 1.28887 14.4281C1.41939 14.8212 1.84388 15.0341 2.23699 14.9036L1.76434 13.48ZM5.11584 14.916L4.58822 15.449L5.11584 14.916ZM16.2744 8.19456C16.3792 8.59529 16.789 8.83519 17.1898 8.73038C17.5905 8.62557 17.8304 8.21575 17.7256 7.81501L16.2744 8.19456ZM9.83541 17.6708C10.2059 17.4856 10.3561 17.0351 10.1708 16.6646C9.98558 16.2941 9.53507 16.1439 9.16459 16.3292L9.83541 17.6708ZM6.80642 5.79659C8.38386 4.23518 9.81481 3.70671 11.0498 3.75276C12.2993 3.79935 13.5054 4.43951 14.608 5.53093L15.6633 4.46486C14.3943 3.20876 12.8518 2.31891 11.1057 2.2538C9.34523 2.18815 7.53357 2.96627 5.75119 4.73052L6.80642 5.79659ZM5.83742 17.2495C4.77901 17.2637 3.9934 17.0002 3.49629 16.5081L2.44106 17.5742C3.32694 18.4511 4.56965 18.7666 5.85756 18.7493L5.83742 17.2495ZM3.49629 16.5081C3.07086 16.087 2.81644 15.4606 2.76123 14.6286C2.70586 13.7942 2.85626 12.8035 3.1898 11.7445C3.85797 9.62301 5.21504 7.37179 6.80642 5.79659L5.75119 4.73052C3.98276 6.48098 2.49894 8.94481 1.75909 11.2939C1.38862 12.4701 1.19323 13.6535 1.26452 14.7279C1.33597 15.8046 1.68067 16.8215 2.44106 17.5742L3.49629 16.5081ZM2.23699 14.9036C3.03867 14.6374 3.95494 14.8222 4.58822 15.449L5.64345 14.3829C4.59152 13.3417 3.07855 13.0436 1.76434 13.48L2.23699 14.9036ZM4.58822 15.449C5.22025 16.0746 5.40302 16.9741 5.13716 17.7587L6.55782 18.2401C7.0016 16.9304 6.69661 15.4254 5.64345 14.3829L4.58822 15.449ZM14.608 5.53093C15.4544 6.36867 16.0321 7.26799 16.2744 8.19456L17.7256 7.81501C17.3962 6.55561 16.6392 5.4309 15.6633 4.46486L14.608 5.53093ZM9.16459 16.3292C8.21958 16.8017 6.91375 17.235 5.83742 17.2495L5.85756 18.7493C7.24432 18.7307 8.78042 18.1983 9.83541 17.6708L9.16459 16.3292Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M11 13.0238C11 13.0238 10.9993 14.2477 12.2173 14.2472C13.4354 14.2467 13.4348 15.4704 13.4348 15.4704M14.0098 10C14.0098 10 14.0091 11.2239 15.2271 11.2234C16.4452 11.2229 16.4446 12.4465 16.4446 12.4465M15.5652 14.5535C15.5652 14.5535 15.5645 15.7773 16.7825 15.7768C18.0006 15.7763 18 17 18 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5193 5.76215C11.3876 5.36944 10.9624 5.15787 10.5697 5.28959C10.177 5.42132 9.96543 5.84645 10.0972 6.23917L11.5193 5.76215ZM7.23904 9.09728C6.84633 8.96556 6.42119 9.17713 6.28947 9.56984C6.15774 9.96255 6.36931 10.3877 6.76202 10.5194L7.23904 9.09728ZM19.2061 10.7656C20.7673 12.3268 21.2931 13.7404 21.2473 14.9573C21.2008 16.189 20.5632 17.3804 19.4718 18.4718L20.5324 19.5324C21.7886 18.2763 22.6809 16.7471 22.7462 15.0137C22.812 13.2655 22.0312 11.4694 20.2668 9.70498L19.2061 10.7656ZM19.4718 18.4718C18.3804 19.5632 17.189 20.2008 15.9573 20.2473C14.7404 20.2931 13.3268 19.7673 11.7656 18.2061L10.705 19.2668C12.4694 21.0312 14.2655 21.812 16.0137 21.7462C17.7471 21.6809 19.2763 20.7886 20.5324 19.5324L19.4718 18.4718ZM11.7656 18.2061C10.1909 16.6313 8.8473 14.38 8.18563 12.2576C7.85535 11.1982 7.70624 10.2066 7.76113 9.37093C7.8159 8.53704 8.06843 7.90989 8.48916 7.48916L7.4285 6.4285C6.67547 7.18153 6.33496 8.19775 6.26436 9.27261C6.19387 10.3457 6.38704 11.5282 6.75361 12.7041C7.48565 15.0522 8.9541 17.5159 10.705 19.2668L11.7656 18.2061ZM8.48916 7.48916C8.90989 7.06843 9.53704 6.8159 10.3709 6.76113C11.2066 6.70624 12.1982 6.85535 13.2576 7.18563C15.38 7.8473 17.6313 9.19085 19.2061 10.7656L20.2668 9.70498C18.5159 7.9541 16.0522 6.48565 13.7041 5.75361C12.5282 5.38704 11.3457 5.19387 10.2726 5.26436C9.19775 5.33496 8.18153 5.67547 7.4285 6.4285L8.48916 7.48916ZM10.0972 6.23917C10.3614 7.02697 10.1789 7.92868 9.55371 8.55383L10.6144 9.61449C11.6573 8.57155 11.9575 7.06872 11.5193 5.76215L10.0972 6.23917ZM9.55371 8.55383C8.92856 9.17898 8.02685 9.36153 7.23904 9.09728L6.76202 10.5194C8.0686 10.9577 9.57142 10.6574 10.6144 9.61449L9.55371 8.55383Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
