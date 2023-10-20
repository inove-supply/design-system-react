export const Structure01Icon = ({
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
        d="M12 9V13M12 13H9C7.11438 13 6.17157 13 5.58579 13.5858C5 14.1716 5 15.1144 5 17M12 13H15C16.8856 13 17.8284 13 18.4142 13.5858C19 14.1716 19 15.1144 19 17"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.00866 21C2 20.7125 2 20.3821 2 20C2 18.5858 2 17.8787 2.43934 17.4393C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.4393C8 17.8787 8 18.5858 8 20C8 20.3821 8 20.7125 7.99134 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M16.0087 21C16 20.7125 16 20.3821 16 20C16 18.5858 16 17.8787 16.4393 17.4393C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.4393C22 17.8787 22 18.5858 22 20C22 20.3821 22 20.7125 21.9913 21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M10.2857 3H13.7143C15.7888 3 16 4.10993 16 6C16 7.89007 15.7888 9 13.7143 9H10.2857C8.2112 9 8 7.89007 8 6C8 4.10993 8.2112 3 10.2857 3Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
