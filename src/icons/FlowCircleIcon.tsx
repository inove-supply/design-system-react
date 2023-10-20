export const FlowCircleIcon = ({
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
        d="M18 4.5C18 5.88071 16.8807 7 15.5 7C14.1193 7 13 5.88071 13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M18 19.5C18 20.8807 16.8807 22 15.5 22C14.1193 22 13 20.8807 13 19.5C13 18.1193 14.1193 17 15.5 17C16.8807 17 18 18.1193 18 19.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 4.50024L18 4.50015M6 8.00006C6 6.5956 6 5.89337 6.33706 5.38892C6.48298 5.17054 6.67048 4.98304 6.88886 4.83712C7.39331 4.50006 8.09554 4.50006 9.5 4.50006H13M22 19.5004L18 19.5003M6 16.0004C6 17.4048 6 18.1071 6.33706 18.6115C6.48298 18.8299 6.67048 19.0174 6.88886 19.1633C7.39331 19.5004 8.09554 19.5004 9.5 19.5004H13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
