export const Structure02Icon = ({
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
        d="M2 13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11C4.94281 11 5.41421 11 5.70711 11.2929C6 11.5858 6 12.0572 6 13C6 13.9428 6 14.4142 5.70711 14.7071C5.41421 15 4.94281 15 4 15C3.05719 15 2.58579 15 2.29289 14.7071C2 14.4142 2 13.9428 2 13Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M18 13C18 12.0572 18 11.5858 18.2929 11.2929C18.5858 11 19.0572 11 20 11C20.9428 11 21.4142 11 21.7071 11.2929C22 11.5858 22 12.0572 22 13C22 13.9428 22 14.4142 21.7071 14.7071C21.4142 15 20.9428 15 20 15C19.0572 15 18.5858 15 18.2929 14.7071C18 14.4142 18 13.9428 18 13Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 6.99989V13.9999M12 18.9999V21.9999M4 11V9C4 5.69067 4.69067 5 8 5M20 11V9C20 5.69067 19.3093 5 16 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 16.5C14.5 17.8807 13.3807 19 12 19C10.6193 19 9.5 17.8807 9.5 16.5C9.5 15.1193 10.6193 14 12 14C13.3807 14 14.5 15.1193 14.5 16.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
