export const WorkoutRunIcon = ({
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
        d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M15 20.9998L14.3359 18.3839C14.1161 17.5181 13.6615 16.7274 13.0207 16.0964L11.5 14.5989M6 11.1524C7 9.18269 8.53767 8.04132 12 8.00038M12 8.00038C12.2186 7.9978 12.5444 7.99702 12.8698 7.99707C13.3747 7.99716 13.6271 7.9972 13.8282 8.09116C14.0293 8.18512 14.2356 8.43158 14.6482 8.92451C14.7664 9.06574 14.8878 9.19228 15 9.27645M12 8.00038L10.7309 9.95858C10.0332 11.0352 9.68429 11.5735 9.67069 12.1387C9.66463 12.3904 9.70617 12.6411 9.79313 12.8774C9.98834 13.408 10.4922 13.8049 11.5 14.5989M15 9.27645C16.1547 10.1424 17.9627 10.4911 20 8.19815M15 9.27645L11.5 14.5989"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
