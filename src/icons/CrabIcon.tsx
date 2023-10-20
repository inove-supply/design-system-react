export const CrabIcon = ({
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
        d="M17 3C19.2867 3 23.096 3 21.7007 7.9709M21.7007 7.9709C20.3668 8.13688 18.524 8.5 18.016 6M21.7007 7.9709L21.7921 8.70069C21.9702 10.1229 21.3617 11.5302 20.197 12.39L18.016 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3C4.71333 3 0.903986 3 2.29933 7.9709M2.29933 7.9709C3.63322 8.13688 5.476 8.5 5.984 6M2.29933 7.9709L2.20794 8.70069C2.02983 10.1229 2.63829 11.5302 3.80302 12.39L5.984 14"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 15.1895C18 17.471 15.3597 19.4659 13.582 20.5505C12.5998 21.1498 11.4002 21.1498 10.418 20.5505C8.64031 19.4659 6 17.471 6 15.1895C6 11.7502 8.68629 10 12 10C15.3137 10 18 11.7502 18 15.1895Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M8 19C6.54545 19 5.09091 19 4 21M16 19C17.4545 19 18.9091 19 20 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16.5C5 16.5 3 16 2 14.5M18 16.5C19 16.5 21 16 22 14.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10L14.5 8.5M10 10L9.5 8.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
