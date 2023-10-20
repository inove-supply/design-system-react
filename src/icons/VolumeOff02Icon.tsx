export const VolumeOff02Icon = ({
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
        d="M22 22L2 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.88232 16.9782L9.41815 16.4534L9.41815 16.4534L8.88232 16.9782ZM2.89675 8.77271L3.31945 9.39225L3.31945 9.39225L2.89675 8.77271ZM2.89675 15.2275L3.31945 14.6079L3.31945 14.6079L2.89675 15.2275ZM13.0747 19.9228L13.3668 20.6136H13.3668L13.0747 19.9228ZM14.75 14.0001C14.75 13.5859 14.4142 13.2501 14 13.2501C13.5858 13.2501 13.25 13.5859 13.25 14.0001H14.75ZM8.42957 8.53578C8.75136 8.27497 8.80079 7.80267 8.53998 7.48088C8.27917 7.15909 7.80687 7.10966 7.48508 7.37047L8.42957 8.53578ZM5.50604 7.67878C4.82024 7.67878 4.24825 7.67784 3.78664 7.72579C3.31169 7.77512 2.87073 7.88253 2.47406 8.15317L3.31945 9.39225C3.42687 9.31896 3.58882 9.25441 3.94162 9.21776C4.30776 9.17973 4.78837 9.17878 5.50604 9.17878V7.67878ZM5.50604 14.8214C4.78837 14.8214 4.30776 14.8205 3.94162 14.7824C3.58882 14.7458 3.42687 14.6812 3.31945 14.6079L2.47406 15.847C2.87073 16.1177 3.31169 16.2251 3.78664 16.2744C4.24825 16.3224 4.82024 16.3214 5.50604 16.3214V14.8214ZM13.25 14.8136C13.25 16.4109 13.2482 17.5268 13.1414 18.298C13.0299 19.1033 12.8446 19.2058 12.7825 19.232L13.3668 20.6136C14.2301 20.2485 14.5074 19.369 14.6272 18.5038C14.7518 17.6046 14.75 16.3616 14.75 14.8136H13.25ZM8.34648 17.5029C9.41778 18.5968 10.2788 19.4787 10.9914 20.026C11.6783 20.5536 12.4956 20.9821 13.3668 20.6136L12.7825 19.232C12.7285 19.2549 12.5386 19.323 11.9051 18.8365C11.2974 18.3697 10.5249 17.5835 9.41815 16.4534L8.34648 17.5029ZM13.25 14.0001V14.8136H14.75V14.0001H13.25ZM2.75852 12.0001C2.75852 11.3726 2.72201 10.8524 2.80106 10.3519C2.87398 9.89013 3.02886 9.59051 3.31945 9.39225L2.47406 8.15317C1.71825 8.66885 1.42901 9.42392 1.31942 10.1179C1.21595 10.7731 1.25852 11.5096 1.25852 12.0001H2.75852ZM1.25852 12.0001C1.25852 12.4906 1.21595 13.2271 1.31942 13.8823C1.42901 14.5763 1.71825 15.3313 2.47406 15.847L3.31945 14.6079C3.02886 14.4097 2.87398 14.1101 2.80106 13.6483C2.72201 13.1478 2.75852 12.6276 2.75852 12.0001H1.25852ZM9.41815 16.4534C8.82969 15.8525 8.30191 15.4153 7.65954 15.1498C7.019 14.885 6.3379 14.8214 5.50604 14.8214V16.3214C6.27899 16.3214 6.72206 16.3854 7.08647 16.536C7.44906 16.6859 7.80702 16.9521 8.34648 17.5029L9.41815 16.4534ZM5.50604 9.17878C5.87851 9.17878 6.40303 9.20633 6.87312 9.15367C7.38093 9.09679 7.92743 8.94276 8.42957 8.53578L7.48508 7.37047C7.272 7.54317 7.02773 7.62697 6.70614 7.663C6.34683 7.70325 6.00331 7.67878 5.50604 7.67878V9.17878Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M13.0746 4.06614L12.7819 4.75668L13.0746 4.06614ZM9.47154 5.46064C9.17762 5.7525 9.17595 6.22737 9.4678 6.52129C9.75966 6.81522 10.2345 6.81689 10.5285 6.52503L9.47154 5.46064ZM13.2499 9.5C13.2499 9.91421 13.5857 10.25 13.9999 10.25C14.4141 10.25 14.7499 9.91421 14.7499 9.5H13.2499ZM14.7499 9.18575C14.7499 7.63454 14.7517 6.38929 14.6272 5.48847C14.5075 4.62217 14.2304 3.74143 13.3673 3.3756L12.7819 4.75668C12.8441 4.78302 13.0297 4.88627 13.1413 5.69382C13.2482 6.46687 13.2499 7.58534 13.2499 9.18575H14.7499ZM10.5285 6.52503C11.2504 5.8082 11.7862 5.2987 12.2196 4.99927C12.4323 4.8523 12.5784 4.78639 12.6724 4.7617C12.7506 4.74119 12.7734 4.75305 12.7819 4.75668L13.3673 3.3756C12.6217 3.05962 11.9114 3.38898 11.3669 3.76517C10.8036 4.15438 10.1721 4.76503 9.47154 5.46064L10.5285 6.52503ZM13.2499 9.18575V9.5H14.7499V9.18575H13.2499Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M17 10C17.6296 10.7667 18 11.7054 18 12.7195C18 13.1635 17.929 13.593 17.7963 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8C21.2508 9.22951 22 10.7952 22 12.5C22 13.9164 21.4829 15.2367 20.5906 16.348"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
