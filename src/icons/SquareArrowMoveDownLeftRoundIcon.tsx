export const SquareArrowMoveDownLeftRoundIcon = ({
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
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M16.75 7C16.75 6.58579 16.4142 6.25 16 6.25C15.5858 6.25 15.25 6.58579 15.25 7H16.75ZM8 14.0897C7.58579 14.0897 7.25 14.4255 7.25 14.8397C7.25 15.2539 7.58579 15.5897 8 15.5897V14.0897ZM10.6984 14.7655L10.5857 14.024L10.6984 14.7655ZM15.9226 9.75256L16.6626 9.8747L15.9226 9.75256ZM9.30795 17.5352C9.60355 17.8254 10.0784 17.821 10.3686 17.5254C10.6587 17.2298 10.6543 16.7549 10.3587 16.4648L9.30795 17.5352ZM8.25991 15.4555L7.73452 15.9907V15.9907L8.25991 15.4555ZM8.25991 14.2236L7.73452 13.6884L8.25991 14.2236ZM10.3587 13.2143C10.6543 12.9241 10.6587 12.4493 10.3686 12.1537C10.0784 11.8581 9.60355 11.8537 9.30795 12.1438L10.3587 13.2143ZM15.25 7V7.60306H16.75V7H15.25ZM8 15.5897C9.12926 15.5897 10.2504 15.5922 10.8111 15.507L10.5857 14.024C10.1693 14.0873 9.20618 14.0897 8 14.0897V15.5897ZM15.25 7.60306C15.25 8.75337 15.2475 9.23759 15.1826 9.63041L16.6626 9.8747C16.7525 9.32998 16.75 8.69372 16.75 7.60306H15.25ZM10.8111 15.507C13.8038 15.0521 16.1809 12.7929 16.6626 9.8747L15.1826 9.63041C14.8125 11.8731 12.9713 13.6614 10.5857 14.024L10.8111 15.507ZM10.3587 16.4648L8.7853 14.9203L7.73452 15.9907L9.30795 17.5352L10.3587 16.4648ZM8.7853 14.7588L10.3587 13.2143L9.30795 12.1438L7.73452 13.6884L8.7853 14.7588ZM8.7853 14.9203C8.73823 14.8741 8.73823 14.805 8.7853 14.7588L7.73452 13.6884C7.08849 14.3225 7.08849 15.3566 7.73452 15.9907L8.7853 14.9203Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
