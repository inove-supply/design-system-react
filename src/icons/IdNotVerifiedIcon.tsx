export const IdNotVerifiedIcon = ({
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
        d="M16.5 17L17.4989 18M17.4989 18L18.5 19M17.4989 18L18.5 17M17.4989 18L16.5 19M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6.95309 17.4868C6.66965 17.7888 6.68474 18.2635 6.98679 18.5469C7.28884 18.8304 7.76348 18.8153 8.04691 18.5132L6.95309 17.4868ZM10.5791 17.2458C10.991 17.2021 11.2895 16.8328 11.2458 16.4209C11.2021 16.009 10.8328 15.7105 10.4209 15.7542L10.5791 17.2458ZM3.52513 21.0288L3.00932 21.5733L3.52513 21.0288ZM18.4749 4.97116L17.9591 5.51562L18.4749 4.97116ZM3.52513 4.97116L4.04093 5.51562L3.52513 4.97116ZM8.50279 4.75115C8.91701 4.74961 9.25154 4.41258 9.24999 3.99836C9.24845 3.58415 8.91142 3.24962 8.49721 3.25116L8.50279 4.75115ZM13.5028 3.25116C13.0886 3.24962 12.7515 3.58415 12.75 3.99836C12.7485 4.41258 13.083 4.74961 13.4972 4.75115L13.5028 3.25116ZM18.75 12C18.75 12.4142 19.0858 12.75 19.5 12.75C19.9142 12.75 20.25 12.4142 20.25 12H18.75ZM10.5 22.75C10.9142 22.75 11.25 22.4142 11.25 22C11.25 21.5858 10.9142 21.25 10.5 21.25V22.75ZM8.96901 5.82911L9.35835 5.18808L8.96901 5.82911ZM8.68886 3.99176L7.95815 3.82274V3.82274L8.68886 3.99176ZM8.56197 5.37824L7.87896 5.68808L8.56197 5.37824ZM13.3111 3.99176L14.0418 3.82274L13.3111 3.99176ZM13.438 5.37824L14.121 5.68808L13.438 5.37824ZM13.031 5.82911L13.4203 6.47014L13.031 5.82911ZM11.9086 2.0467L11.7403 2.77759L11.9086 2.0467ZM13.2278 3.63163L12.4971 3.80065L13.2278 3.63163ZM12.9918 2.84004L12.333 3.19842L12.9918 2.84004ZM10.0914 2.0467L10.2597 2.77759L10.0914 2.0467ZM8.77216 3.63163L9.50286 3.80065V3.80065L8.77216 3.63163ZM9.00821 2.84004L9.66705 3.19842L9.00821 2.84004ZM12.25 12C12.25 12.7016 11.6933 13.25 11.0315 13.25V14.75C12.5441 14.75 13.75 13.5075 13.75 12H12.25ZM11.0315 13.25C10.3698 13.25 9.81307 12.7016 9.81307 12H8.31307C8.31307 13.5075 9.51898 14.75 11.0315 14.75V13.25ZM9.81307 12C9.81307 11.2984 10.3698 10.75 11.0315 10.75V9.25C9.51898 9.25 8.31307 10.4925 8.31307 12H9.81307ZM11.0315 10.75C11.6933 10.75 12.25 11.2984 12.25 12H13.75C13.75 10.4925 12.5441 9.25 11.0315 9.25V10.75ZM8.04691 18.5132C8.72491 17.7907 9.62319 17.3472 10.5791 17.2458L10.4209 15.7542C9.10487 15.8938 7.87535 16.504 6.95309 17.4868L8.04691 18.5132ZM3.25 15.3684V10.6316H1.75V15.3684H3.25ZM9.5 21.25C7.82998 21.25 6.64898 21.2486 5.75431 21.1346C4.87725 21.0229 4.38967 20.8147 4.04093 20.4844L3.00932 21.5733C3.68571 22.2141 4.53565 22.4915 5.56479 22.6226C6.57633 22.7514 7.8702 22.75 9.5 22.75V21.25ZM1.75 15.3684C1.75 16.9091 1.74823 18.1443 1.88558 19.1121C2.02661 20.1059 2.32721 20.9271 3.00932 21.5733L4.04093 20.4844C3.69792 20.1594 3.48595 19.7135 3.3707 18.9013C3.25177 18.0633 3.25 16.9538 3.25 15.3684H1.75ZM20.25 10.6316C20.25 9.09083 20.2518 7.8557 20.1144 6.88786C19.9734 5.8941 19.6728 5.0729 18.9907 4.42669L17.9591 5.51562C18.3021 5.84058 18.514 6.28651 18.6293 7.09862C18.7482 7.93665 18.75 9.04614 18.75 10.6316H20.25ZM3.25 10.6316C3.25 9.04614 3.25177 7.93665 3.3707 7.09862C3.48595 6.28651 3.69792 5.84058 4.04093 5.51562L3.00932 4.42669C2.32721 5.0729 2.02661 5.8941 1.88558 6.88786C1.74823 7.8557 1.75 9.09083 1.75 10.6316H3.25ZM8.49721 3.25116C7.18295 3.25606 6.10891 3.28037 5.24135 3.42463C4.35533 3.57196 3.61291 3.85487 3.00932 4.42669L4.04093 5.51562C4.35322 5.21977 4.77604 5.0226 5.48739 4.90432C6.2172 4.78296 7.17265 4.75611 8.50279 4.75115L8.49721 3.25116ZM13.4972 4.75115C14.8273 4.75611 15.7828 4.78296 16.5126 4.90432C17.224 5.0226 17.6468 5.21977 17.9591 5.51562L18.9907 4.42669C18.3871 3.85487 17.6447 3.57196 16.7587 3.42463C15.8911 3.28037 14.817 3.25606 13.5028 3.25116L13.4972 4.75115ZM18.75 10.6316V12H20.25V10.6316H18.75ZM10.5 21.25H9.5V22.75H10.5V21.25ZM12.4971 3.80065L12.5804 4.16077L14.0418 3.82274L13.9586 3.46262L12.4971 3.80065ZM11.4981 5.25H10.5019V6.75H11.4981V5.25ZM9.41957 4.16077L9.50286 3.80065L8.04145 3.46262L7.95815 3.82274L9.41957 4.16077ZM10.5019 5.25C10.071 5.25 9.7969 5.24932 9.59356 5.2315C9.49716 5.22305 9.43739 5.2122 9.4 5.2024C9.38224 5.19774 9.37137 5.19379 9.3655 5.19139C9.36256 5.19019 9.36069 5.1893 9.35969 5.1888C9.35918 5.18854 9.35883 5.18835 9.35863 5.18824C9.35844 5.18813 9.35835 5.18808 9.35835 5.18808L8.57968 6.47014C8.86483 6.64332 9.17387 6.70047 9.46262 6.72578C9.74679 6.75068 10.0984 6.75 10.5019 6.75V5.25ZM7.95815 3.82274C7.87686 4.17417 7.80134 4.49614 7.76888 4.7648C7.73518 5.04374 7.73287 5.36605 7.87896 5.68808L9.24497 5.06839C9.2627 5.10747 9.23876 5.10438 9.25805 4.94474C9.27858 4.77482 9.33069 4.54503 9.41957 4.16077L7.95815 3.82274ZM9.35835 5.18808C9.29699 5.15081 9.26197 5.10585 9.24497 5.06839L7.87896 5.68808C8.02824 6.01716 8.27656 6.28603 8.57968 6.47014L9.35835 5.18808ZM12.5804 4.16077C12.6693 4.54503 12.7214 4.77482 12.742 4.94474C12.7612 5.10438 12.7373 5.10747 12.755 5.06839L14.121 5.68808C14.2671 5.36605 14.2648 5.04374 14.2311 4.7648C14.1987 4.49614 14.1231 4.17417 14.0418 3.82274L12.5804 4.16077ZM11.4981 6.75C11.9016 6.75 12.2532 6.75068 12.5374 6.72578C12.8261 6.70047 13.1352 6.64332 13.4203 6.47014L12.6417 5.18808C12.6417 5.18808 12.6416 5.18813 12.6414 5.18824C12.6412 5.18835 12.6408 5.18854 12.6403 5.1888C12.6393 5.1893 12.6374 5.19019 12.6345 5.19139C12.6286 5.19379 12.6178 5.19774 12.6 5.2024C12.5626 5.2122 12.5028 5.22305 12.4064 5.2315C12.2031 5.24932 11.929 5.25 11.4981 5.25V6.75ZM12.755 5.06839C12.738 5.10585 12.703 5.15081 12.6417 5.18808L13.4203 6.47014C13.7234 6.28604 13.9718 6.01716 14.121 5.68808L12.755 5.06839ZM11 2.75C11.5097 2.75 11.6409 2.7547 11.7403 2.77759L12.0768 1.3158C11.7704 1.2453 11.4312 1.25 11 1.25V2.75ZM13.9586 3.46262C13.8729 3.09244 13.8035 2.76264 13.6506 2.48165L12.333 3.19842C12.3644 3.25619 12.3909 3.3412 12.4971 3.80065L13.9586 3.46262ZM11.7403 2.77759C12.0225 2.84252 12.2298 3.00886 12.333 3.19842L13.6506 2.48165C13.3245 1.88205 12.74 1.46844 12.0768 1.3158L11.7403 2.77759ZM11 1.25C10.5688 1.25 10.2296 1.2453 9.92323 1.3158L10.2597 2.77759C10.3591 2.7547 10.4903 2.75 11 2.75V1.25ZM9.50286 3.80065C9.60914 3.3412 9.63562 3.25619 9.66705 3.19842L8.34938 2.48165C8.19653 2.76264 8.12707 3.09244 8.04145 3.46262L9.50286 3.80065ZM9.92323 1.3158C9.26005 1.46844 8.67555 1.88205 8.34938 2.48165L9.66705 3.19842C9.77016 3.00886 9.97753 2.84252 10.2597 2.77759L9.92323 1.3158Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M7.5 18C8.41684 17.0229 9.72299 16.5115 11.0315 16.5002M13 12C13 13.1046 12.1187 14 11.0315 14C9.94438 14 9.06307 13.1046 9.06307 12C9.06307 10.8954 9.94438 10 11.0315 10C12.1187 10 13 10.8954 13 12Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M8.5 4.00098C5.85561 4.01083 4.44101 4.1033 3.52513 4.97097C2.5 5.94215 2.5 7.50522 2.5 10.6314V15.3682C2.5 18.4944 2.5 20.0575 3.52513 21.0286C4.55025 21.9998 6.20017 21.9998 9.5 21.9998H11.5M13.5 4.00098C16.1444 4.01083 17.559 4.1033 18.4749 4.97097C19.5 5.94215 19.5 7.50522 19.5 10.6314V11.4998"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.77216 3.63163C8.8681 3.21682 8.91608 3.00942 9.00821 2.84004C9.22285 2.44546 9.61879 2.15548 10.0914 2.0467C10.2943 2 10.5296 2 11 2C11.4704 2 11.7057 2 11.9086 2.0467C12.3812 2.15548 12.7771 2.44545 12.9918 2.84004C13.0839 3.00942 13.1319 3.21682 13.2278 3.63163L13.3111 3.99176C13.4813 4.72744 13.5664 5.09528 13.438 5.37824C13.3549 5.5615 13.2132 5.71842 13.031 5.82911C12.7496 6 12.3324 6 11.4981 6H10.5019C9.66755 6 9.25038 6 8.96901 5.82911C8.78677 5.71842 8.6451 5.5615 8.56197 5.37824C8.43361 5.09528 8.51869 4.72744 8.68886 3.99176L8.77216 3.63163Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
