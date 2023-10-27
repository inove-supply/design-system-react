export const TextSelectionIcon = ({
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
        d="M20.25 20.5C20.25 20.9142 20.5858 21.25 21 21.25C21.4142 21.25 21.75 20.9142 21.75 20.5H20.25ZM18.8911 12.0308L19.0084 11.29L18.8911 12.0308ZM20.9692 14.1089L20.2285 14.2262V14.2262L20.9692 14.1089ZM17.1089 12.0308L16.9916 11.29H16.9916L17.1089 12.0308ZM21 16H21.75C21.75 15.5858 21.4142 15.25 21 15.25V16ZM14.5211 13.2001C14.3555 13.5797 14.5289 14.0218 14.9086 14.1874C15.2882 14.3531 15.7303 14.1796 15.8959 13.7999L14.5211 13.2001ZM20.25 15V20.5H21.75V15H20.25ZM18 12.75C18.4932 12.75 18.6524 12.7523 18.7738 12.7715L19.0084 11.29C18.7411 11.2477 18.4358 11.25 18 11.25V12.75ZM21.75 15C21.75 14.5642 21.7523 14.2589 21.71 13.9916L20.2285 14.2262C20.2477 14.3476 20.25 14.5068 20.25 15H21.75ZM18.7738 12.7715C19.5226 12.8901 20.1099 13.4774 20.2285 14.2262L21.71 13.9916C21.4897 12.6009 20.3991 11.5103 19.0084 11.29L18.7738 12.7715ZM18 11.25C17.5642 11.25 17.2589 11.2477 16.9916 11.29L17.2262 12.7715C17.3476 12.7523 17.5068 12.75 18 12.75V11.25ZM17.5 16.75H21V15.25H17.5V16.75ZM20.25 16V17.5714H21.75V16H20.25ZM20.25 17.5714C20.25 19.0508 19.0508 20.25 17.5714 20.25V21.75C19.8792 21.75 21.75 19.8792 21.75 17.5714H20.25ZM17.5 15.25C15.7051 15.25 14.25 16.7051 14.25 18.5H15.75C15.75 17.5335 16.5335 16.75 17.5 16.75V15.25ZM15.8959 13.7999C16.1308 13.2616 16.6271 12.8664 17.2262 12.7715L16.9916 11.29C15.8779 11.4664 14.9571 12.2009 14.5211 13.2001L15.8959 13.7999ZM17.5714 20.25C16.5636 20.25 15.75 19.4714 15.75 18.5H14.25C14.25 20.3658 15.8027 21.75 17.5714 21.75V20.25Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M11 21.75C11.4142 21.75 11.75 21.4142 11.75 21C11.75 20.5858 11.4142 20.25 11 20.25V21.75ZM11 3.75C11.4142 3.75 11.75 3.41421 11.75 3C11.75 2.58579 11.4142 2.25 11 2.25V3.75ZM3 20.25C2.58579 20.25 2.25 20.5858 2.25 21C2.25 21.4142 2.58579 21.75 3 21.75V20.25ZM3 2.25C2.58579 2.25 2.25 2.58579 2.25 3C2.25 3.41421 2.58579 3.75 3 3.75V2.25ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM10 12.75C10.4142 12.75 10.75 12.4142 10.75 12C10.75 11.5858 10.4142 11.25 10 11.25V12.75ZM6.25 7V17H7.75V7H6.25ZM6.25 17C6.25 17.9216 6.24841 18.6883 6.32991 19.2945C6.41432 19.9223 6.59999 20.4891 7.05546 20.9445L8.11612 19.8839C7.9858 19.7536 7.87858 19.5561 7.81654 19.0946C7.75159 18.6116 7.75 17.964 7.75 17H6.25ZM11 20.25C10.036 20.25 9.38843 20.2484 8.90539 20.1835C8.44393 20.1214 8.24643 20.0142 8.11612 19.8839L7.05546 20.9445C7.51093 21.4 8.07773 21.5857 8.70552 21.6701C9.31174 21.7516 10.0784 21.75 11 21.75V20.25ZM11 2.25C10.0784 2.25 9.31174 2.24841 8.70552 2.32991C8.07773 2.41432 7.51093 2.59999 7.05546 3.05546L8.11612 4.11612C8.24643 3.9858 8.44393 3.87858 8.90539 3.81654C9.38843 3.75159 10.036 3.75 11 3.75V2.25ZM7.75 7C7.75 6.03599 7.75159 5.38843 7.81654 4.90539C7.87858 4.44393 7.9858 4.24643 8.11612 4.11612L7.05546 3.05546C6.59999 3.51093 6.41432 4.07773 6.32991 4.70552C6.24841 5.31174 6.25 6.07839 6.25 7H7.75ZM6.25 17C6.25 17.964 6.24841 18.6116 6.18346 19.0946C6.12142 19.5561 6.0142 19.7536 5.88388 19.8839L6.94454 20.9445C7.40001 20.4891 7.58568 19.9223 7.67009 19.2945C7.75159 18.6883 7.75 17.9216 7.75 17H6.25ZM3 21.75C3.92161 21.75 4.68826 21.7516 5.29448 21.6701C5.92227 21.5857 6.48907 21.4 6.94454 20.9445L5.88388 19.8839C5.75357 20.0142 5.55607 20.1214 5.09461 20.1835C4.61157 20.2484 3.96401 20.25 3 20.25V21.75ZM3 3.75C3.96401 3.75 4.61157 3.75159 5.09461 3.81654C5.55607 3.87858 5.75357 3.9858 5.88388 4.11612L6.94454 3.05546C6.48907 2.59999 5.92227 2.41432 5.29448 2.32991C4.68826 2.24841 3.92161 2.25 3 2.25V3.75ZM7.75 7C7.75 6.07839 7.75159 5.31174 7.67009 4.70552C7.58568 4.07773 7.40001 3.51093 6.94454 3.05546L5.88388 4.11612C6.0142 4.24643 6.12142 4.44393 6.18346 4.90539C6.24841 5.38843 6.25 6.03599 6.25 7H7.75ZM4 12.75H10V11.25H4V12.75Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
