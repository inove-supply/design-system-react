export const MapsEditingIcon = ({
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
        d="M18.8295 14.2542C19.1276 13.9312 19.2766 13.7698 19.435 13.6756C19.8171 13.4483 20.2876 13.4412 20.6761 13.6569C20.8372 13.7463 20.9908 13.9032 21.298 14.2171C21.6053 14.531 21.7589 14.6879 21.8464 14.8524C22.0575 15.2492 22.0506 15.7299 21.8281 16.1203C21.7359 16.2821 21.5779 16.4343 21.2617 16.7388L17.5003 20.3617C16.9012 20.9387 16.6016 21.2273 16.2272 21.3735C15.8528 21.5197 15.4413 21.509 14.6181 21.4874L14.5062 21.4845C14.2556 21.478 14.1303 21.4747 14.0574 21.392C13.9846 21.3094 13.9945 21.1817 14.0144 20.9265L14.0252 20.7879C14.0812 20.0694 14.1092 19.7102 14.2495 19.3873C14.3898 19.0644 14.6318 18.8022 15.1158 18.2778L18.8295 14.2542Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M22 10.5V9.71749C22 7.77787 22 6.80807 21.4142 6.2055C20.8284 5.60294 19.8856 5.60294 18 5.60294H15.9214C15.004 5.60294 14.9964 5.60116 14.1715 5.18834L10.8399 3.52114C9.44884 2.82504 8.75332 2.47699 8.01238 2.50118C7.27143 2.52537 6.59877 2.91808 5.25345 3.70351L4.02558 4.42037C3.03739 4.99729 2.54329 5.28576 2.27164 5.76564C2 6.24553 2 6.82993 2 7.99873V16.2157C2 17.7514 2 18.5193 2.34226 18.9467C2.57001 19.231 2.88916 19.4222 3.242 19.4856C3.77226 19.5808 4.42148 19.2018 5.71987 18.4437C6.60156 17.929 7.45011 17.3944 8.50487 17.5394C9.38869 17.6608 10.21 18.2185 11 18.6138"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2.5L8 17.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M15 5.5V13.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
