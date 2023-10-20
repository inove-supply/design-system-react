export const HierarchyFilesIcon = ({
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
        d="M18.9645 3.96447L17.4853 2.48528C17.2959 2.29589 17.2012 2.20119 17.0891 2.13591C17.0114 2.09062 16.9279 2.05604 16.8409 2.03308C16.7155 2 16.5816 2 16.3137 2C15.0861 2 14.4724 2 14.0134 2.26029C13.6989 2.43864 13.4386 2.6989 13.2603 3.01338C13 3.47235 13 4.08614 13 5.31371V6.5C13 7.90446 13 8.60669 13.3371 9.11114C13.483 9.32952 13.6705 9.51702 13.8889 9.66294C14.3933 10 15.0955 10 16.5 10C17.9045 10 18.6067 10 19.1111 9.66294C19.3295 9.51702 19.517 9.32952 19.6629 9.11114C20 8.60669 20 7.89611 20 6.47495C20 5.8414 20 5.52462 19.9098 5.23452C19.8736 5.11833 19.827 5.00567 19.7704 4.89796C19.629 4.62904 19.4075 4.40751 18.9645 3.96447Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9645 15.9645L17.4853 14.4853C17.2959 14.2959 17.2012 14.2012 17.0891 14.1359C17.0114 14.0906 16.9279 14.056 16.8409 14.0331C16.7155 14 16.5816 14 16.3137 14C15.0861 14 14.4724 14 14.0134 14.2603C13.6989 14.4386 13.4386 14.6989 13.2603 15.0134C13 15.4724 13 16.0861 13 17.3137V18.5C13 19.9045 13 20.6067 13.3371 21.1111C13.483 21.3295 13.6705 21.517 13.8889 21.6629C14.3933 22 15.0955 22 16.5 22C17.9045 22 18.6067 22 19.1111 21.6629C19.3295 21.517 19.517 21.3295 19.6629 21.1111C20 20.6067 20 19.8961 20 18.4749C20 17.8414 20 17.5246 19.9098 17.2345C19.8736 17.1183 19.827 17.0057 19.7704 16.898C19.629 16.629 19.4075 16.4075 18.9645 15.9645Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6H4M4 6V2M4 6V12C4 14.8284 4 16.2426 4.87868 17.1213C5.75736 18 7.17157 18 10 18"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
