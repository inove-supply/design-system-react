export const MouseRightClick04Icon = ({
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
        d="M10.5 6V2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 22C16.5 22 18 17.49 18 12C18 6.50998 16.5 2 10.5 2C4.49993 2 3 6.50996 3 12C3 17.49 4.49993 22 10.5 22Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12 7.5C12 7.03406 12 6.80109 11.9239 6.61732C11.8224 6.37229 11.6277 6.17761 11.3827 6.07612C11.1989 6 10.9659 6 10.5 6C10.0341 6 9.80109 6 9.61732 6.07612C9.37229 6.17761 9.17761 6.37229 9.07612 6.61732C9 6.80109 9 7.03406 9 7.5V9.5C9 9.96594 9 10.1989 9.07612 10.3827C9.17761 10.6277 9.37229 10.8224 9.61732 10.9239C9.80109 11 10.0341 11 10.5 11C10.9659 11 11.1989 11 11.3827 10.9239C11.6277 10.8224 11.8224 10.6277 11.9239 10.3827C12 10.1989 12 9.96594 12 9.5V7.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M19 2C20.0547 3.13158 20.7646 4.50113 21 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
