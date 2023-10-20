export const Touch01Icon = ({
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
        d="M19.3211 11.9618L18.7891 12.4905L19.3211 11.9618ZM18.9985 17.6892L19.6749 18.0131L19.6749 18.0131L18.9985 17.6892ZM9 14L8.45675 14.5171C8.66822 14.7393 8.99365 14.8103 9.27844 14.6964C9.56324 14.5825 9.75 14.3067 9.75 14H9ZM6.78341 11.6713L7.32666 11.1542C7.31182 11.1386 7.29632 11.1236 7.2802 11.1094L6.78341 11.6713ZM4.3775 14.0886L4.97551 13.636C4.9726 13.6322 4.96966 13.6283 4.96668 13.6246L4.3775 14.0886ZM7.65864 18.4236L7.06062 18.8763H7.06062L7.65864 18.4236ZM4.36948 11.9053L3.77682 11.4457L3.77682 11.4457L4.36948 11.9053ZM17.1419 22C17.1419 22.4142 17.4777 22.75 17.8919 22.75C18.3061 22.75 18.6419 22.4142 18.6419 22H17.1419ZM8.10181 22C8.10181 22.4142 8.43759 22.75 8.85181 22.75C9.26602 22.75 9.60181 22.4142 9.60181 22H8.10181ZM8.71263 20.1155L9.42876 19.8927L8.71263 20.1155ZM8.6732 19.9973L9.37968 19.7456L9.37967 19.7455L8.6732 19.9973ZM12.5 9.5H11.75C11.75 9.70469 11.8337 9.90049 11.9816 10.042C12.1295 10.1835 12.3288 10.2584 12.5333 10.2493L12.5 9.5ZM18.7891 12.4905C19.2053 12.9093 19.3421 13.6569 19.1903 14.671C19.0439 15.6486 18.657 16.6658 18.322 17.3653L19.6749 18.0131C20.0471 17.2359 20.4975 16.0699 20.6737 14.8931C20.8445 13.7529 20.789 12.3751 19.8531 11.4332L18.7891 12.4905ZM18.322 17.3653C18.2383 17.54 18.1332 17.7297 18.0096 17.9507C17.8901 18.1644 17.7546 18.4053 17.6309 18.6526C17.3897 19.1351 17.1419 19.7383 17.1419 20.382H18.6419C18.6419 20.1001 18.7561 19.7563 18.9725 19.3235C19.0777 19.1132 19.1949 18.9043 19.3188 18.6828C19.4385 18.4687 19.5673 18.2378 19.6749 18.0131L18.322 17.3653ZM9.54325 13.4829L7.32666 11.1542L6.24016 12.1883L8.45675 14.5171L9.54325 13.4829ZM3.77948 14.5413L7.06062 18.8763L8.25665 17.971L4.97551 13.636L3.77948 14.5413ZM3.77682 11.4457C3.07019 12.3568 3.07482 13.6468 3.78831 14.5527L4.96668 13.6246C4.67956 13.26 4.67752 12.7319 4.96214 12.3649L3.77682 11.4457ZM7.2802 11.1094C6.22827 10.1793 4.63524 10.3388 3.77682 11.4457L4.96214 12.3649C5.29514 11.9355 5.89049 11.8829 6.28661 12.2331L7.2802 11.1094ZM17.1419 20.382V22H18.6419V20.382H17.1419ZM9.60181 22C9.60181 21.0874 9.60964 20.4739 9.42876 19.8927L7.99651 20.3384C8.09397 20.6516 8.10181 20.9963 8.10181 22H9.60181ZM7.06062 18.8763C7.6596 19.6676 7.85727 19.942 7.96672 20.2491L9.37967 19.7455C9.1749 19.1709 8.80091 18.69 8.25665 17.971L7.06062 18.8763ZM9.42876 19.8927C9.4134 19.8433 9.39703 19.7943 9.37968 19.7456L7.96672 20.2491C7.97724 20.2786 7.98717 20.3084 7.99651 20.3384L9.42876 19.8927ZM8.25 3.75V14H9.75V3.75H8.25ZM11.75 3.75V9.5H13.25V3.75H11.75ZM12.5333 10.2493C14.1369 10.1779 16.8679 10.557 18.7891 12.4905L19.8531 11.4332C17.5111 9.07631 14.2796 8.67013 12.4667 8.75074L12.5333 10.2493ZM9.75 3.75C9.75 3.19772 10.1977 2.75 10.75 2.75V1.25C9.36929 1.25 8.25 2.36929 8.25 3.75H9.75ZM10.75 2.75C11.3023 2.75 11.75 3.19772 11.75 3.75H13.25C13.25 2.36929 12.1307 1.25 10.75 1.25V2.75Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
