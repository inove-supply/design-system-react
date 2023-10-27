export const MailAccount02Icon = ({
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
        d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.996 10C21.9933 9.63328 21.9894 9.77017 21.9842 9.5265C21.9189 6.46005 21.8862 4.92682 20.7551 3.79105C19.6239 2.65528 18.0497 2.61571 14.9012 2.53658C12.9607 2.48781 11.0393 2.48781 9.09882 2.53657C5.95033 2.6157 4.37608 2.65526 3.24495 3.79103C2.11382 4.92681 2.08114 6.46003 2.01576 9.52648C1.99474 10.5125 1.99475 11.4926 2.01577 12.4786C2.08114 15.5451 2.11383 17.0783 3.24496 18.2141C4.37608 19.3498 5.95033 19.3894 9.09883 19.4685C9.7068 19.4838 10.4957 19.4943 11 19.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5861 18.6482C14.9573 19.0167 13.3087 19.7693 14.3128 20.711C14.8033 21.171 15.3496 21.5 16.0365 21.5H19.9557C20.6425 21.5 21.1888 21.171 21.6794 20.711C22.6835 19.7693 21.0348 19.0167 20.4061 18.6482C18.9316 17.7839 17.0606 17.7839 15.5861 18.6482Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M19.9961 14C19.9961 15.1046 19.1007 16 17.9961 16C16.8915 16 15.9961 15.1046 15.9961 14C15.9961 12.8954 16.8915 12 17.9961 12C19.1007 12 19.9961 12.8954 19.9961 14Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
