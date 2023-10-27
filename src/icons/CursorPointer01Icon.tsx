export const CursorPointer01Icon = ({
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
        d="M13.0342 20.8715C11.0574 21.0082 9.09878 11.7891 10.4437 10.444C11.7886 9.09888 21.0083 11.0561 20.8717 13.0329C20.7776 14.3275 18.5864 14.8396 18.6504 15.9902C18.6691 16.3272 19.0948 16.6343 19.9462 17.2485C20.5377 17.6754 21.141 18.0899 21.7224 18.5304C21.9545 18.7062 22.0461 19.0018 21.978 19.2805C21.6507 20.619 20.6249 21.6493 19.2809 21.978C19.0022 22.0462 18.7066 21.9545 18.5308 21.7224C18.0905 21.1408 17.676 20.5375 17.2492 19.9459C16.635 19.0944 16.328 18.6686 15.991 18.6499C14.8406 18.5859 14.3286 20.7775 13.0342 20.8715Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7.05139 16C4.12629 15.1008 2 12.3774 2 9.15744C2 5.20449 5.20449 2 9.15744 2C12.3774 2 15.1008 4.12629 16 7.05139"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M11 6.95491C10.4754 6.36883 9.71316 6 8.86472 6C7.28258 6 6 7.28258 6 8.86472C6 9.71316 6.36883 10.4754 6.95491 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
