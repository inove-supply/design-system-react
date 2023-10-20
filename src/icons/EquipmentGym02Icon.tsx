export const EquipmentGym02Icon = ({
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
        d="M3 3L3 21M21 3V21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L2 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 10C16.6046 10 17.5 10.9693 17.5 12.165C17.5 12.4484 17.4497 12.719 17.3583 12.967C17.0641 13.7653 13.8692 13.5843 13.6417 12.967C13.5503 12.719 13.5 12.4484 13.5 12.165C13.5 10.9693 14.3954 10 15.5 10Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10C9.60457 10 10.5 10.9693 10.5 12.165C10.5 12.4484 10.4497 12.719 10.3583 12.967C10.0641 13.7653 6.86923 13.5843 6.64168 12.967C6.55027 12.719 6.5 12.4484 6.5 12.165C6.5 10.9693 7.39543 10 8.5 10Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M8.5 10V6M15.5 10V6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
