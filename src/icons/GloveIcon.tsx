export const GloveIcon = ({
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
        d="M13.2821 21H12.202C10.2655 21 9.29724 21 8.464 20.5777C7.63076 20.1554 7.04981 19.3703 5.88792 17.8L3.41438 14.4571C2.79576 13.621 2.87779 12.4511 3.60684 11.7121C4.49835 10.8085 5.97278 10.9147 6.72926 11.9371L8.25569 14V9.42066C8.25569 9.03006 8.25569 8.83476 8.26466 8.66978C8.43073 5.61591 10.8365 3.17742 13.8493 3.00909C14.0121 3 14.2048 3 14.5901 3C15.0368 3 15.2602 3 15.44 3.01111C18.8039 3.21885 21.3181 6.22724 20.9673 9.62464C20.9485 9.80626 20.9118 10.0296 20.8384 10.4762L20.0657 15.1752C19.6781 17.5327 19.4843 18.7114 18.8157 19.5373C18.5131 19.9111 18.1461 20.2262 17.7326 20.4673C16.819 21 15.64 21 13.2821 21Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 17H12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
