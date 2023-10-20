export const SaleTag01Icon = ({
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
        d="M19.7482 9.94186L20.4936 9.85904L19.7482 9.94186ZM19.8959 11.2709L20.6413 11.1881V11.1881L19.8959 11.2709ZM18.6981 14.6857L18.1677 14.1554L18.6981 14.6857ZM13.4722 19.9116L14.0025 20.4419L13.4722 19.9116ZM14.7291 6.10411L14.6462 6.84952L14.6462 6.84952L14.7291 6.10411ZM11.3143 7.30195L10.784 6.77162V6.77162L11.3143 7.30195ZM6.08844 12.5278L6.61877 13.0581L6.08844 12.5278ZM7.56519 19.9116L8.09552 19.3812L7.56519 19.9116ZM6.08844 18.4348L5.55811 18.9651L6.08844 18.4348ZM4 15.4813H4.75V15.4813L4 15.4813ZM12.8095 6.09822L12.5613 5.3905L12.5613 5.3905L12.8095 6.09822ZM10.5187 22L10.5187 21.25H10.5187L10.5187 22ZM19.9018 13.1905L19.1941 12.9422L19.1941 12.9422L19.9018 13.1905ZM18.9648 7.03521L19.4951 6.50488L18.9648 7.03521ZM18.1097 5.79114C17.707 5.69439 17.302 5.94246 17.2053 6.34522C17.1086 6.74797 17.3566 7.1529 17.7594 7.24965L18.1097 5.79114ZM15.0354 6.89277C15.4471 6.93851 15.8179 6.64186 15.8636 6.23018C15.9094 5.8185 15.6127 5.44768 15.2011 5.40194L15.0354 6.89277ZM19.0028 10.0247L19.1505 11.3538L20.6413 11.1881L20.4936 9.85904L19.0028 10.0247ZM18.1677 14.1554L12.9419 19.3812L14.0025 20.4419L19.2284 15.216L18.1677 14.1554ZM10.784 6.77162L5.55811 11.9975L6.61877 13.0581L11.8446 7.83228L10.784 6.77162ZM8.09552 19.3812L6.61877 17.9045L5.55811 18.9651L7.03486 20.4419L8.09552 19.3812ZM5.55811 11.9975C4.87696 12.6786 4.31161 13.2417 3.92584 13.7473C3.52687 14.2703 3.25 14.8189 3.25 15.4813L4.75 15.4813C4.75 15.2787 4.8212 15.0467 5.11838 14.6572C5.42875 14.2504 5.90763 13.7693 6.61877 13.0581L5.55811 11.9975ZM6.61877 17.9045C5.90763 17.1933 5.42875 16.7122 5.11838 16.3054C4.8212 15.9159 4.75 15.6839 4.75 15.4813H3.25C3.25 16.1438 3.52687 16.6924 3.92584 17.2153C4.31161 17.7209 4.87696 18.284 5.55811 18.9651L6.61877 17.9045ZM14.8119 5.3587C13.9031 5.25773 13.2093 5.16318 12.5613 5.3905L13.0578 6.80594C13.3077 6.71826 13.5943 6.73264 14.6462 6.84952L14.8119 5.3587ZM11.8446 7.83228C12.5931 7.08384 12.8078 6.89363 13.0578 6.80594L12.5613 5.3905C11.9132 5.61782 11.4305 6.12508 10.784 6.77162L11.8446 7.83228ZM12.9419 19.3812C12.2307 20.0924 11.7496 20.5712 11.3428 20.8816C10.9533 21.1788 10.7213 21.25 10.5187 21.25L10.5187 22.75C11.1811 22.75 11.7298 22.4731 12.2527 22.0742C12.7583 21.6884 13.3214 21.123 14.0025 20.4419L12.9419 19.3812ZM7.03486 20.4419C7.71602 21.123 8.27911 21.6884 8.78472 22.0742C9.30764 22.4731 9.85625 22.75 10.5187 22.75L10.5187 21.25C10.3161 21.25 10.0841 21.1788 9.69459 20.8816C9.2878 20.5712 8.80666 20.0924 8.09552 19.3812L7.03486 20.4419ZM19.1505 11.3538C19.2674 12.4057 19.2817 12.6923 19.1941 12.9422L20.6095 13.4387C20.8368 12.7907 20.7423 12.0968 20.6413 11.1881L19.1505 11.3538ZM19.2284 15.216C19.8749 14.5695 20.3822 14.0868 20.6095 13.4387L19.1941 12.9422C19.1064 13.1922 18.9162 13.4069 18.1677 14.1554L19.2284 15.216ZM20.4936 9.85904C20.4072 9.08127 20.3362 8.43104 20.2144 7.91374C20.088 7.37656 19.8894 6.89917 19.4951 6.50488L18.4345 7.56554C18.5582 7.68926 18.6629 7.86899 18.7544 8.25753C18.8505 8.66595 18.9123 9.21003 19.0028 10.0247L20.4936 9.85904ZM17.7594 7.24965C18.1361 7.34013 18.3125 7.44353 18.4345 7.56554L19.4951 6.50488C19.1067 6.11644 18.6375 5.91792 18.1097 5.79114L17.7594 7.24965ZM15.2011 5.40194L14.8119 5.3587L14.6462 6.84952L15.0354 6.89277L15.2011 5.40194Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M7 3.69682C9.78054 6.78172 14.3661 0.123717 17.0794 2.53998C18.6407 3.93028 18.1471 7 16.1203 9"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M11.5719 14.4241L12.1018 13.8933L11.5719 14.4241ZM13.4443 12.5548L12.9144 13.0855L13.4443 12.5548ZM11.6817 16.5469L12.2116 17.0776L11.6817 16.5469ZM9.55545 16.4373L10.0853 15.9065L9.55545 16.4373ZM14.5299 12.5308C14.823 12.2381 14.8234 11.7632 14.5308 11.4701C14.2381 11.177 13.7632 11.1766 13.4701 11.4692L14.5299 12.5308ZM8.47011 16.461C8.17697 16.7537 8.17658 17.2286 8.46923 17.5217C8.76189 17.8148 9.23676 17.8152 9.52989 17.5226L8.47011 16.461ZM13.0998 13.7643C12.9902 14.1638 13.2252 14.5764 13.6247 14.686C14.0241 14.7955 14.4368 14.5605 14.5463 14.1611L13.0998 13.7643ZM9.81095 15.2119C9.84737 14.7993 9.54241 14.4353 9.1298 14.3989C8.71719 14.3624 8.35318 14.6674 8.31676 15.08L9.81095 15.2119ZM12.1018 13.8933C11.7866 13.5787 11.7544 13.4118 11.7522 13.3703C11.7513 13.3538 11.746 13.2638 11.9412 13.0689L10.8814 12.0074C10.5197 12.3684 10.222 12.8493 10.2543 13.4508C10.2853 14.0273 10.6119 14.5254 11.042 14.9549L12.1018 13.8933ZM11.9412 13.0689C12.1971 12.8134 12.633 12.8046 12.9144 13.0855L13.9742 12.024C13.1236 11.1748 11.7391 11.1511 10.8814 12.0074L11.9412 13.0689ZM11.1518 16.0161C10.9266 16.2409 10.7664 16.2589 10.6623 16.2474C10.524 16.2321 10.3214 16.1421 10.0853 15.9065L9.02555 16.968C9.40697 17.3488 9.90741 17.6732 10.4978 17.7383C11.1224 17.8073 11.7166 17.5718 12.2116 17.0776L11.1518 16.0161ZM11.042 14.9549C11.3635 15.2758 11.4224 15.4649 11.4282 15.5472C11.4318 15.5987 11.4252 15.7431 11.1518 16.0161L12.2116 17.0776C12.6583 16.6316 12.9695 16.0867 12.9245 15.4426C12.8817 14.8293 12.5257 14.3165 12.1018 13.8933L11.042 14.9549ZM13.9742 13.0855L14.5299 12.5308L13.4701 11.4692L12.9144 12.024L13.9742 13.0855ZM9.02555 15.9065L8.47011 16.461L9.52989 17.5226L10.0853 16.968L9.02555 15.9065ZM12.9144 13.0855C13.1032 13.274 13.1624 13.5358 13.0998 13.7643L14.5463 14.1611C14.7483 13.4247 14.5539 12.6027 13.9742 12.024L12.9144 13.0855ZM10.0853 15.9065C9.8728 15.6943 9.79166 15.4304 9.81095 15.2119L8.31676 15.08C8.25716 15.7553 8.50892 16.4522 9.02555 16.968L10.0853 15.9065Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
