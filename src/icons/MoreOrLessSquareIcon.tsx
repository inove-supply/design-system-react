export const MoreOrLessSquareIcon = ({
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
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M7 11.2498C6.58579 11.2498 6.25 11.5856 6.25 11.9998C6.25 12.4141 6.58579 12.7498 7 12.7498V11.2498ZM17 12.7498C17.4142 12.7498 17.75 12.4141 17.75 11.9998C17.75 11.5856 17.4142 11.2498 17 11.2498V12.7498ZM8.87697 9.00015V9.75015H8.87699L8.87697 9.00015ZM17 9.75C17.4142 9.74999 17.75 9.4142 17.75 8.99999C17.75 8.58577 17.4142 8.24999 17 8.25L17 9.75ZM8.57741 7.47865C8.84176 7.15975 8.79754 6.68694 8.47865 6.42259C8.15975 6.15824 7.68694 6.20246 7.42259 6.52135L8.57741 7.47865ZM7.02797 8.6718L6.33931 8.96885L6.33931 8.96885L7.02797 8.6718ZM15.123 15V14.25H15.123L15.123 15ZM6.99999 14.2501C6.58577 14.2501 6.24999 14.5859 6.25 15.0001C6.25001 15.4143 6.5858 15.7501 7.00001 15.7501L6.99999 14.2501ZM15.4226 16.5213C15.1583 16.8402 15.2024 17.313 15.5213 17.5773C15.8402 17.8417 16.313 17.7975 16.5774 17.4786L15.4226 16.5213ZM16.972 15.3283L17.6607 15.0313L16.972 15.3283ZM7 12.7498H17V11.2498H7V12.7498ZM8.87699 9.75015L17 9.75L17 8.25L8.87696 8.25015L8.87699 9.75015ZM8.87697 8.25015C8.28367 8.25015 7.91912 8.24844 7.67966 8.21592C7.40173 8.17819 7.61488 8.13883 7.71664 8.37474L6.33931 8.96885C6.58271 9.53312 7.15123 9.65793 7.47783 9.70228C7.8429 9.75186 8.33203 9.75015 8.87697 9.75015V8.25015ZM8 7C7.42259 6.52135 7.42255 6.52141 7.4225 6.52147C7.42247 6.5215 7.42242 6.52157 7.42237 6.52162C7.42228 6.52173 7.42217 6.52186 7.42205 6.52201C7.4218 6.52232 7.42148 6.5227 7.42109 6.52317C7.42033 6.5241 7.41929 6.52535 7.418 6.52692C7.41541 6.53005 7.4118 6.53445 7.40723 6.54003C7.39809 6.5512 7.3851 6.56713 7.36887 6.58724C7.33642 6.62743 7.29079 6.68455 7.23672 6.75391C7.12928 6.89171 6.98524 7.082 6.84406 7.28611C6.70631 7.48525 6.55575 7.7197 6.44684 7.94158C6.39316 8.05094 6.3361 8.1841 6.30111 8.32523C6.27244 8.4409 6.22241 8.69783 6.33931 8.96885L7.71664 8.37474C7.76099 8.47757 7.76608 8.5645 7.76548 8.60904C7.76487 8.65456 7.75795 8.68247 7.75704 8.68615C7.75585 8.69096 7.76256 8.6653 7.79336 8.60253C7.85343 8.48017 7.95473 8.31719 8.07769 8.13943C8.19722 7.96663 8.32274 7.80053 8.41969 7.67618C8.46781 7.61446 8.50808 7.56406 8.53598 7.52949C8.54992 7.51223 8.56072 7.49898 8.56783 7.4903C8.57138 7.48597 8.574 7.48278 8.57562 7.48081C8.57643 7.47983 8.57699 7.47915 8.57729 7.47878C8.57744 7.4786 8.57753 7.4785 8.57755 7.47848C8.57756 7.47846 8.57755 7.47847 8.57753 7.4785C8.57752 7.47851 8.57748 7.47855 8.57748 7.47856C8.57744 7.4786 8.57741 7.47865 8 7ZM15.123 14.25L6.99999 14.2501L7.00001 15.7501L15.123 15.75L15.123 14.25ZM15.123 15.75C15.7163 15.75 16.0809 15.7517 16.3203 15.7842C16.5983 15.8219 16.3851 15.8613 16.2834 15.6254L17.6607 15.0313C17.4173 14.467 16.8488 14.3422 16.5222 14.2978C16.1571 14.2482 15.668 14.25 15.123 14.25V15.75ZM16 17C16.5774 17.4786 16.5774 17.4786 16.5775 17.4785C16.5775 17.4785 16.5776 17.4784 16.5776 17.4784C16.5777 17.4783 16.5778 17.4781 16.5779 17.478C16.5782 17.4777 16.5785 17.4773 16.5789 17.4768C16.5796 17.4759 16.5807 17.4746 16.582 17.4731C16.5846 17.4699 16.5882 17.4655 16.5927 17.46C16.6019 17.4488 16.6149 17.4329 16.6311 17.4128C16.6636 17.3726 16.7092 17.3155 16.7633 17.2461C16.8707 17.1083 17.0147 16.918 17.1559 16.714C17.2937 16.5148 17.4442 16.2804 17.5532 16.0585C17.6068 15.9492 17.6639 15.816 17.6989 15.6749C17.7276 15.5592 17.7776 15.3023 17.6607 15.0313L16.2834 15.6254C16.239 15.5225 16.2339 15.4356 16.2345 15.3911C16.2351 15.3455 16.242 15.3176 16.243 15.3139C16.2442 15.3091 16.2375 15.3348 16.2066 15.3975C16.1466 15.5199 16.0453 15.6828 15.9223 15.8606C15.8028 16.0334 15.6773 16.1994 15.5803 16.3238C15.5322 16.3855 15.4919 16.4359 15.464 16.4704C15.4501 16.4877 15.4393 16.501 15.4322 16.5096C15.4286 16.514 15.426 16.5171 15.4244 16.5191C15.4236 16.5201 15.423 16.5208 15.4227 16.5211C15.4226 16.5213 15.4225 16.5214 15.4225 16.5215C15.4225 16.5215 15.4225 16.5215 15.4225 16.5214C15.4225 16.5214 15.4225 16.5214 15.4225 16.5214C15.4226 16.5213 15.4226 16.5213 16 17Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
