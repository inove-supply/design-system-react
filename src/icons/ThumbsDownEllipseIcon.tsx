export const ThumbsDownEllipseIcon = ({
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
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M13.1525 15.2136L12.975 14.6571C12.8295 14.201 12.7567 13.973 12.8127 13.793C12.8579 13.6473 12.9573 13.5217 13.0927 13.4391C13.26 13.3369 13.5131 13.3369 14.0194 13.3369H14.2887C16.0021 13.3369 16.8588 13.3369 17.2634 12.8447C17.3097 12.7884 17.3508 12.7286 17.3864 12.6659C17.6977 12.1168 17.3438 11.3773 16.636 9.89811C15.9865 8.54072 15.6617 7.86203 15.0587 7.46255C15.0003 7.42387 14.9403 7.3874 14.8789 7.3532C14.244 7 13.4574 7 11.8843 7H11.5431C9.63715 7 8.68419 7 8.09209 7.55681C7.5 8.11363 7.5 9.00981 7.5 10.8022V11.4321C7.5 12.3741 7.5 12.845 7.67223 13.2761C7.84445 13.7071 8.17424 14.0616 8.8338 14.7705L11.5614 17.702C11.6298 17.7755 11.664 17.8123 11.6942 17.8378C11.9757 18.0755 12.4102 18.0488 12.6563 17.7785C12.6826 17.7495 12.7115 17.7089 12.7691 17.6276C12.8592 17.5004 12.9043 17.4369 12.9436 17.3739C13.2952 16.81 13.4016 16.1401 13.2405 15.5042C13.2225 15.4332 13.1992 15.3599 13.1525 15.2136Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
