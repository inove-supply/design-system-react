export const CircleArrowMoveLeftDownRoundIcon = ({
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
        d="M8.22134 9.30392L7.69101 8.77359L7.69101 8.77359L8.22134 9.30392ZM10.0556 8.53033C10.3485 8.23744 10.3485 7.76256 10.0556 7.46967C9.7627 7.17678 9.28782 7.17678 8.99493 7.46967L10.0556 8.53033ZM8.22134 10.3324L7.69101 10.8628H7.69101L8.22134 10.3324ZM8.99493 12.1667C9.28782 12.4596 9.7627 12.4596 10.0556 12.1667C10.3485 11.8738 10.3485 11.3989 10.0556 11.106L8.99493 12.1667ZM13.6676 15.7787L13.1372 16.309L13.6676 15.7787ZM12.894 13.9444C12.6011 13.6515 12.1262 13.6515 11.8333 13.9444C11.5404 14.2373 11.5404 14.7122 11.8333 15.0051L12.894 13.9444ZM14.6961 15.7787L15.2264 16.309H15.2264L14.6961 15.7787ZM16.5303 15.0051C16.8232 14.7122 16.8232 14.2373 16.5303 13.9444C16.2374 13.6515 15.7626 13.6515 15.4697 13.9444L16.5303 15.0051ZM8 9.06818C7.58579 9.06818 7.25 9.40397 7.25 9.81818C7.25 10.2324 7.58579 10.5682 8 10.5682V9.06818ZM13.4318 16C13.4318 16.4142 13.7676 16.75 14.1818 16.75C14.596 16.75 14.9318 16.4142 14.9318 16H13.4318ZM8.75167 9.83425L10.0556 8.53033L8.99493 7.46967L7.69101 8.77359L8.75167 9.83425ZM7.69101 10.8628L8.99493 12.1667L10.0556 11.106L8.75167 9.80211L7.69101 10.8628ZM7.69101 8.77359C7.1141 9.3505 7.1141 10.2859 7.69101 10.8628L8.75167 9.80211C8.75291 9.80335 8.75507 9.80623 8.75661 9.81001C8.75794 9.81329 8.75832 9.81604 8.75832 9.81818C8.75832 9.82032 8.75794 9.82307 8.75661 9.82635C8.75507 9.83014 8.75291 9.83301 8.75167 9.83425L7.69101 8.77359ZM14.1979 15.2483L12.894 13.9444L11.8333 15.0051L13.1372 16.309L14.1979 15.2483ZM15.2264 16.309L16.5303 15.0051L15.4697 13.9444L14.1657 15.2483L15.2264 16.309ZM13.1372 16.309C13.7141 16.8859 14.6495 16.8859 15.2264 16.309L14.1657 15.2483C14.167 15.2471 14.1699 15.2449 14.1736 15.2434C14.1769 15.2421 14.1797 15.2417 14.1818 15.2417C14.184 15.2417 14.1867 15.2421 14.19 15.2434C14.1938 15.2449 14.1966 15.2471 14.1979 15.2483L13.1372 16.309ZM9.81818 9.06818H8V10.5682H9.81818V9.06818ZM13.4318 14.1818V16H14.9318V14.1818H13.4318ZM9.81818 10.5682C10.8679 10.5682 11.5797 10.5698 12.1123 10.6414C12.6233 10.7101 12.8555 10.8306 13.0124 10.9876L14.0731 9.92689C13.591 9.4448 12.9895 9.24581 12.3122 9.15475C11.6564 9.06659 10.8255 9.06818 9.81818 9.06818V10.5682ZM14.9318 14.1818C14.9318 13.1745 14.9334 12.3436 14.8453 11.6878C14.7542 11.0105 14.5552 10.409 14.0731 9.92689L13.0124 10.9876C13.1694 11.1445 13.2899 11.3767 13.3586 11.8877C13.4302 12.4203 13.4318 13.1321 13.4318 14.1818H14.9318Z"
        strokeWidth={strokeWidth}
      />
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
    </svg>
  )
}
