export const FoldersIcon = ({
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
        d="M7.5 9.55556H16.275C18.171 9.55556 19.119 9.55556 19.8 10.005C20.0949 10.1995 20.348 10.4495 20.545 10.7407C21 11.4133 21 12.3496 21 14.2222C21 17.3432 21 18.9038 20.2416 20.0248C19.9133 20.51 19.4914 20.9267 19.0001 21.251C17.8651 22 16.285 22 13.125 22H12C7.75736 22 5.63604 22 4.31802 20.6983C3 19.3965 3 17.3014 3 13.1111V10.3949C3 8.78027 3 7.97294 3.34228 7.36717C3.58628 6.93535 3.94704 6.57904 4.38426 6.33806C4.99761 6 5.81502 6 7.44984 6C8.49722 6 9.02091 6 9.47933 6.16978C10.526 6.55744 10.9576 7.49651 11.4299 8.42945L12 9.55556"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M3 2.00022H8.5C9.47008 2.00022 10.4182 1.97191 11.2387 2.55545C12.29 3.30312 12.71 4.69733 13.7613 5.445C14.5818 6.02854 15.5299 6.00022 16.5 6.00022H21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
