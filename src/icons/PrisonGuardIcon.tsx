export const PrisonGuardIcon = ({
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
        d="M18 8C16.3288 7.37209 14.2513 7 12 7C9.74872 7 7.67122 7.37209 6 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M6.96964 8L6.24016 6.58747C5.66135 5.46671 5.37195 4.90633 5.55422 4.41103C5.73648 3.91574 6.29735 3.73843 7.41907 3.38381L11.3897 2.12854C11.6608 2.04285 11.7963 2 11.9354 2C12.0745 2 12.21 2.04285 12.4811 2.12854L16.7191 3.46833C17.7295 3.78776 18.2347 3.94748 18.4274 4.39586C18.62 4.84425 18.4131 5.37861 17.9991 6.44734L17.3977 8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7 8V9.72517C7 11.5184 7.92149 13.1802 9.42752 14.1028L9.94202 14.418C11.2087 15.194 12.7913 15.194 14.058 14.418L14.5725 14.1028C16.0785 13.1802 17 11.5184 17 9.72517V8"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M15 14L16 17M16 17L14.6312 18.1954C13.3773 19.2905 12.7504 19.838 12 19.838C11.2496 19.838 10.6227 19.2905 9.36884 18.1954L8 17M16 17L17.7341 17.578C18.7322 17.9107 19.2312 18.0771 19.6742 18.3342C20.1079 18.5859 20.5012 18.9014 20.841 19.2701C21.1881 19.6468 22 21 22 22M9 14L8 17M8 17L6.26586 17.578C5.2678 17.9107 4.76877 18.0771 4.32577 18.3342C3.89213 18.5859 3.49882 18.9014 3.15903 19.2701C2.81191 19.6468 2 21 2 22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
