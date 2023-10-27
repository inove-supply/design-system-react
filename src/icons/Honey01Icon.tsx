export const Honey01Icon = ({
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
        d="M16.5 5H7.5C7.03406 5 6.80109 5 6.61732 4.92388C6.37229 4.82239 6.17761 4.62771 6.07612 4.38268C6 4.19891 6 3.96594 6 3.5C6 3.03406 6 2.80109 6.07612 2.61732C6.17761 2.37229 6.37229 2.17761 6.61732 2.07612C6.80109 2 7.03406 2 7.5 2H16.5C16.9659 2 17.1989 2 17.3827 2.07612C17.6277 2.17761 17.8224 2.37229 17.9239 2.61732C18 2.80109 18 3.03406 18 3.5C18 3.96594 18 4.19891 17.9239 4.38268C17.8224 4.62771 17.6277 4.82239 17.3827 4.92388C17.1989 5 16.9659 5 16.5 5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7.5 5L7.31779 5.21866C6.17078 6.59506 5.59728 7.28326 5.29864 8.10812C5 8.93299 5 9.82882 5 11.6205V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16V11.6205C19 9.82882 19 8.93299 18.7014 8.10812C18.4027 7.28326 17.8292 6.59506 16.6822 5.21866L16.5 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M10 13.2941V11.4118L12 10L14 11.4118V13.2941M10 13.2941L12 14.7059M10 13.2941L8 14.7059L8 16.5882L10 18L12 16.5882M14 13.2941L12 14.7059M14 13.2941L16 14.7059V16.5882L14 18L12 16.5882M12 14.7059V16.5882"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
