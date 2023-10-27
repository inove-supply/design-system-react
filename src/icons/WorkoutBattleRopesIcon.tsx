export const WorkoutBattleRopesIcon = ({
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
        d="M9 4.5C9 5.32843 8.32843 6 7.5 6C6.67157 6 6 5.32843 6 4.5C6 3.67157 6.67157 3 7.5 3C8.32843 3 9 3.67157 9 4.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M13 7L10.5225 8.11603C10.2355 8.27881 10.092 8.3602 9.93152 8.39418C9.77108 8.42815 9.60455 8.41241 9.27151 8.38093L7.84879 8.24644M6.37797 21V17.0339C6.37797 16.5981 6.37797 16.3802 6.28478 16.1887C6.19158 15.9971 6.01655 15.8553 5.66649 15.5717L5.18949 15.1852M7.84879 8.24644L6.42607 8.11195C5.6689 8.04038 5.29031 8.00459 4.99449 8.18037C4.69867 8.35615 4.56864 8.69415 4.3086 9.37015L3.29447 12.0064C3.06133 12.6125 2.94476 12.9155 3.02554 13.2064C3.10632 13.4973 3.36531 13.7072 3.88329 14.1268L5.18949 15.1852M7.84879 8.24644L5.18949 15.1852"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 9C19.4165 9 18.867 8.72945 18.5168 8.26974L17.4901 6.9216C17.354 6.74297 17.286 6.65366 17.2198 6.58344C16.6504 5.97966 15.741 5.82625 15 6.20901"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 17C19.7146 17 18.4907 16.4474 17.6367 15.4816L16.9585 14.7145C15.9773 13.6047 14.6715 12.8574 13.2478 12.5659M10.873 12.429C10.5631 12.429 10.4082 12.429 10.2646 12.4081C9.02513 12.2283 8.32002 10.81 7.5 10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
