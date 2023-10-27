export const YogurtIcon = ({
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
        d="M16.9214 10.2725C16.477 10.8399 15.8249 11.2489 15.0731 11.3952M16.9214 10.2725C18.2293 8.60237 17.1781 6.35504 15.5911 5.75202M16.9214 10.2725C18.8538 10.2727 21.1104 12.7982 19.3857 15M4.59984 15C3.08337 13.0641 4.71115 10.6399 6.49945 10.3221M6.49945 10.3221C5.67427 5.23022 11.7071 7.01202 11.858 3.80353C11.8868 3.19088 11.5972 2.53491 10.7606 2C13.8671 2 16.0145 3.83963 15.5911 5.75202M6.49945 10.3221C7.34468 10.1719 8.26918 10.353 9 10.9247M15.5911 5.75202C15.4267 6.4945 14.8748 7.24795 13.841 7.90896"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 15L3.82811 17.7374C4.44939 19.7911 4.76004 20.8179 5.55635 21.4089C6.35266 22 7.42546 22 9.57107 22H14.4289C16.5745 22 17.6473 22 18.4437 21.4089C19.24 20.8179 19.5506 19.7911 20.1719 17.7374L21 15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M2 15H22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
