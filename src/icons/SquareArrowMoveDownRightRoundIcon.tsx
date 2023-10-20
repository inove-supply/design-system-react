export const SquareArrowMoveDownRightRoundIcon = ({
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
        d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25C8.41421 6.25 8.75 6.58579 8.75 7H7.25ZM16 14.0897C16.4142 14.0897 16.75 14.4255 16.75 14.8397C16.75 15.2539 16.4142 15.5897 16 15.5897V14.0897ZM13.3016 14.7655L13.4143 14.024L13.3016 14.7655ZM8.07738 9.75256L7.33739 9.8747L8.07738 9.75256ZM14.692 17.5352C14.3965 17.8254 13.9216 17.821 13.6314 17.5254C13.3413 17.2298 13.3457 16.7549 13.6413 16.4648L14.692 17.5352ZM15.7401 15.4555L16.2655 15.9907V15.9907L15.7401 15.4555ZM15.7401 14.2236L16.2655 13.6884L15.7401 14.2236ZM13.6413 13.2143C13.3457 12.9241 13.3413 12.4493 13.6314 12.1537C13.9216 11.8581 14.3965 11.8537 14.692 12.1438L13.6413 13.2143ZM8.75 7V7.60306H7.25V7H8.75ZM16 15.5897C14.8707 15.5897 13.7496 15.5922 13.1889 15.507L13.4143 14.024C13.8307 14.0873 14.7938 14.0897 16 14.0897V15.5897ZM8.75 7.60306C8.75 8.75337 8.75252 9.23759 8.81736 9.63041L7.33739 9.8747C7.24748 9.32998 7.25 8.69372 7.25 7.60306H8.75ZM13.1889 15.507C10.1962 15.0521 7.81906 12.7929 7.33739 9.8747L8.81736 9.63041C9.18755 11.8731 11.0287 13.6614 13.4143 14.024L13.1889 15.507ZM13.6413 16.4648L15.2147 14.9203L16.2655 15.9907L14.692 17.5352L13.6413 16.4648ZM15.2147 14.7588L13.6413 13.2143L14.692 12.1438L16.2655 13.6884L15.2147 14.7588ZM15.2147 14.9203C15.2618 14.8741 15.2618 14.805 15.2147 14.7588L16.2655 13.6884C16.9115 14.3225 16.9115 15.3566 16.2655 15.9907L15.2147 14.9203Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
