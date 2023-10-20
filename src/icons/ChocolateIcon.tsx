export const ChocolateIcon = ({
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
        d="M16.2006 14.6886L9.31135 7.79939C8.84911 7.33715 8.61799 7.10603 8.33269 7.03327C8.22784 7.00653 8.11954 6.99581 8.01149 7.00147C7.71745 7.01686 7.44549 7.19817 6.90157 7.56078L6.76211 7.65376C5.65941 8.38889 5.10805 8.75646 5.02086 9.19212C4.97402 9.42615 5.00656 9.66912 5.11333 9.88258C5.31208 10.28 5.94072 10.4895 7.19799 10.9086C7.60207 11.0433 7.80411 11.1106 7.95873 11.2387C8.04473 11.3099 8.11907 11.3942 8.17908 11.4883C8.287 11.6576 8.32876 11.8665 8.4123 12.2841L8.68235 13.6344C8.81834 14.3143 8.88633 14.6543 9.11602 14.884C9.34571 15.1137 9.68566 15.1817 10.3656 15.3176L11.7159 15.5877C12.1335 15.6712 12.3424 15.713 12.5117 15.8209C12.6058 15.8809 12.6901 15.9553 12.7613 16.0413C12.8894 16.1959 12.9567 16.3979 13.0914 16.802C13.5105 18.0593 13.72 18.6879 14.1174 18.8867C14.3309 18.9934 14.5738 19.026 14.8079 18.9791C15.2435 18.8919 15.6111 18.3406 16.3462 17.2379L16.4392 17.0984C16.8018 16.5545 16.9831 16.2825 16.9985 15.9885C17.0042 15.8805 16.9935 15.7722 16.9667 15.6673C16.894 15.382 16.6628 15.1509 16.2006 14.6886Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M13.5 18L11.7256 19.8557C10.2961 21.2852 9.5813 22 8.69309 22C7.80489 22 7.09012 21.2852 5.66057 19.8557L4.14431 18.3394C2.71477 16.9099 2 16.1951 2 15.3069C2 14.4187 2.71477 13.7039 4.14431 12.2744L6 10.5"
        strokeWidth={strokeWidth}
      />
      <path
        d="M9 7.70827L12.6459 4.06241C14.0208 2.68747 14.7083 2 15.5626 2C16.4168 2 17.1043 2.68747 18.4792 4.06241L19.9376 5.52076C21.3125 6.8957 22 7.58317 22 8.43745C22 9.29173 21.3125 9.9792 19.9376 11.3541L16.2917 15"
        strokeWidth={strokeWidth}
      />
      <path
        d="M19.6003 4.39996L12.4003 11.6M12 4L20 12"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}
