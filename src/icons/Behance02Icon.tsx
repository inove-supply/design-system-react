export const Behance02Icon = ({
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
        strokeLinejoin="round"
      />
      <path
        d="M9.62964 11.25C9.21543 11.25 8.87964 11.5858 8.87964 12C8.87964 12.4142 9.21543 12.75 9.62964 12.75V11.25ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75V11.25ZM9.73921 12.75C10.1534 12.75 10.4892 12.4142 10.4892 12C10.4892 11.5858 10.1534 11.25 9.73921 11.25V12.75ZM15.7655 9.75C16.1797 9.75 16.5155 9.41421 16.5155 9C16.5155 8.58579 16.1797 8.25 15.7655 8.25V9.75ZM14.3046 8.25C13.8903 8.25 13.5546 8.58579 13.5546 9C13.5546 9.41421 13.8903 9.75 14.3046 9.75V8.25ZM17 13V13.75C17.4142 13.75 17.75 13.4142 17.75 13H17ZM17.0036 15.5557C17.3106 15.2776 17.3339 14.8033 17.0557 14.4964C16.7776 14.1894 16.3033 14.1661 15.9964 14.4443L17.0036 15.5557ZM7.75 14.5V9.5H6.25V14.5H7.75ZM7.97394 9.25H9.62964V7.75H7.97394V9.25ZM9.62964 9.25C10.1849 9.25 10.6327 9.69896 10.6327 10.25H12.1327C12.1327 8.86804 11.0108 7.75 9.62964 7.75V9.25ZM10.6327 10.25C10.6327 10.801 10.1849 11.25 9.62964 11.25V12.75C11.0108 12.75 12.1327 11.632 12.1327 10.25H10.6327ZM9.62964 12.75C10.1849 12.75 10.6327 13.199 10.6327 13.75H12.1327C12.1327 12.368 11.0108 11.25 9.62964 11.25V12.75ZM10.6327 13.75C10.6327 14.301 10.1849 14.75 9.62964 14.75V16.25C11.0108 16.25 12.1327 15.132 12.1327 13.75H10.6327ZM9.62964 14.75H7.97394V16.25H9.62964V14.75ZM7 12.75H9.73921V11.25H7V12.75ZM7.75 9.5C7.75 9.37943 7.75005 9.28635 7.752 9.20678C7.75397 9.12684 7.75756 9.07868 7.76148 9.04874C7.76535 9.01916 7.76716 9.02732 7.75636 9.05426C7.74321 9.08708 7.71858 9.13003 7.67991 9.16973L6.60535 8.12316C6.37501 8.35966 6.30243 8.63821 6.27418 8.85399C6.24849 9.05018 6.25 9.28496 6.25 9.5H7.75ZM7.97394 7.75C7.76613 7.75 7.53284 7.74832 7.33704 7.77535C7.11759 7.80564 6.83837 7.8839 6.60535 8.12316L7.67991 9.16973C7.64104 9.20964 7.59696 9.23705 7.55998 9.25267C7.52908 9.26572 7.51658 9.26479 7.54216 9.26126C7.56835 9.25765 7.61286 9.25403 7.68984 9.25204C7.76644 9.25005 7.8563 9.25 7.97394 9.25V7.75ZM6.25 14.5C6.25 14.715 6.24849 14.9498 6.27418 15.146C6.30243 15.3618 6.37501 15.6403 6.60535 15.8768L7.67991 14.8303C7.71858 14.87 7.74321 14.9129 7.75636 14.9457C7.76716 14.9727 7.76535 14.9808 7.76148 14.9513C7.75756 14.9213 7.75397 14.8732 7.752 14.7932C7.75005 14.7137 7.75 14.6206 7.75 14.5H6.25ZM7.97394 14.75C7.8563 14.75 7.76644 14.7499 7.68984 14.748C7.61286 14.746 7.56835 14.7424 7.54216 14.7387C7.51658 14.7352 7.52908 14.7343 7.55998 14.7473C7.59696 14.763 7.64104 14.7904 7.67991 14.8303L6.60535 15.8768C6.83837 16.1161 7.11759 16.1944 7.33704 16.2246C7.53284 16.2517 7.76614 16.25 7.97394 16.25V14.75ZM15.7655 8.25H14.3046V9.75H15.7655V8.25ZM13.1042 13.75H17V12.25H13.1042V13.75ZM17.75 13C17.75 11.6045 16.5804 10.25 15.0521 10.25V11.75C15.6754 11.75 16.25 12.3542 16.25 13H17.75ZM15.0521 10.25C13.5238 10.25 12.3542 11.6045 12.3542 13H13.8542C13.8542 12.3542 14.4289 11.75 15.0521 11.75V10.25ZM12.3542 13V13.5H13.8542V13H12.3542ZM12.3542 13.5C12.3542 15 13.5436 16.25 15.0521 16.25V14.75C14.4091 14.75 13.8542 14.2091 13.8542 13.5H12.3542ZM15.0521 16.25C15.681 16.25 16.4885 16.0226 17.0036 15.5557L15.9964 14.4443C15.8247 14.5998 15.4112 14.75 15.0521 14.75V16.25Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
