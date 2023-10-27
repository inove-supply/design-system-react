export const LocationStar02Icon = ({
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
        d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.6911 7.57767L13.395 8.99715C13.491 9.19475 13.7469 9.38428 13.9629 9.42057L15.2388 9.6343C16.0547 9.77141 16.2467 10.3682 15.6587 10.957L14.6668 11.9571C14.4989 12.1265 14.4069 12.4531 14.4589 12.687L14.7428 13.925C14.9668 14.9049 14.4509 15.284 13.591 14.7718L12.3951 14.0581C12.1791 13.929 11.8232 13.929 11.6032 14.0581L10.4073 14.7718C9.5514 15.284 9.03146 14.9009 9.25543 13.925L9.5394 12.687C9.5914 12.4531 9.49941 12.1265 9.33143 11.9571L8.33954 10.957C7.7556 10.3682 7.94358 9.77141 8.75949 9.6343L10.0353 9.42057C10.2473 9.38428 10.5033 9.19475 10.5993 8.99715L11.3032 7.57767C11.6872 6.80744 12.3111 6.80744 12.6911 7.57767Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
