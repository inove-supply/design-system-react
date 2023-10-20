export const FishFoodIcon = ({
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
      <path d="M6.00781 12L5.99883 12" strokeWidth={strokeWidth} />
      <path
        d="M11 16.0418C11.4635 16.1947 11.9076 16.3708 12.3099 16.6525M12.3099 16.6525C13.3507 17.3811 14 18.5764 14 19.8845C14 19.9484 13.9465 20.0003 13.8819 20C10.9648 19.9871 9.65844 19.4932 9.1094 18.6782L8 16.8568C5.50848 16.3537 3.21828 14.7625 2 12.0833C5 5.48589 14.5 5.48589 17.5 12.0833M12.3099 16.6525C14.4801 15.9922 16.4151 14.4692 17.5 12.0833M12.3099 7.5142C13.3507 6.78564 14 5.59024 14 4.28218C14 3.4556 9.69172 4.62406 9.1094 5.48846L8 7.30982M17.5 12.0833C17.8333 11.4236 19.6 9.11447 22 9.11447C21.1667 9.93915 19.8 13.0729 21 15.0522C19.8 15.0522 18 12.7431 17.5 12.0833Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
