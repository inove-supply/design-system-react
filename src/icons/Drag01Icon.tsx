export const Drag01Icon = ({
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
        d="M20.3211 11.9618L19.7891 12.4905L20.3211 11.9618ZM19.9985 17.6892L20.6749 18.0131L20.6749 18.0131L19.9985 17.6892ZM18.8919 20.382H19.6419H18.8919ZM10 14L9.45675 14.5171C9.66822 14.7393 9.99365 14.8103 10.2784 14.6964C10.5632 14.5825 10.75 14.3067 10.75 14H10ZM7.78341 11.6713L8.32666 11.1542C8.31182 11.1386 8.29632 11.1236 8.2802 11.1094L7.78341 11.6713ZM5.3775 14.0886L5.97551 13.636C5.9726 13.6322 5.96966 13.6283 5.96668 13.6246L5.3775 14.0886ZM8.65864 18.4236L8.06062 18.8763H8.06062L8.65864 18.4236ZM5.36948 11.9053L4.77682 11.4457L4.77682 11.4457L5.36948 11.9053ZM18.1419 22C18.1419 22.4142 18.4777 22.75 18.8919 22.75C19.3061 22.75 19.6419 22.4142 19.6419 22H18.1419ZM9.10181 22C9.10181 22.4142 9.43759 22.75 9.85181 22.75C10.266 22.75 10.6018 22.4142 10.6018 22H9.10181ZM9.71263 20.1155L10.4288 19.8927L9.71263 20.1155ZM9.6732 19.9973L10.3797 19.7456L10.3797 19.7455L9.6732 19.9973ZM10 3.75H10.75H10ZM13.5 3.75H14.25H13.5ZM13.5 9.5H12.75C12.75 9.70469 12.8337 9.90049 12.9816 10.042C13.1295 10.1835 13.3288 10.2584 13.5333 10.2493L13.5 9.5ZM19.7891 12.4905C20.2053 12.9093 20.3421 13.6569 20.1903 14.671C20.0439 15.6486 19.657 16.6658 19.322 17.3653L20.6749 18.0131C21.0471 17.2359 21.4975 16.0699 21.6737 14.8931C21.8445 13.7529 21.789 12.3751 20.8531 11.4332L19.7891 12.4905ZM19.322 17.3653C19.2383 17.54 19.1332 17.7297 19.0096 17.9507C18.8901 18.1644 18.7546 18.4053 18.6309 18.6526C18.3897 19.1351 18.1419 19.7383 18.1419 20.382H19.6419C19.6419 20.1001 19.7561 19.7563 19.9725 19.3235C20.0777 19.1132 20.1949 18.9043 20.3188 18.6828C20.4385 18.4687 20.5673 18.2378 20.6749 18.0131L19.322 17.3653ZM10.5433 13.4829L8.32666 11.1542L7.24016 12.1883L9.45675 14.5171L10.5433 13.4829ZM4.77948 14.5413L8.06062 18.8763L9.25665 17.971L5.97551 13.636L4.77948 14.5413ZM4.77682 11.4457C4.07019 12.3568 4.07482 13.6468 4.78831 14.5527L5.96668 13.6246C5.67956 13.26 5.67752 12.7319 5.96214 12.3649L4.77682 11.4457ZM8.2802 11.1094C7.22827 10.1793 5.63524 10.3388 4.77682 11.4457L5.96214 12.3649C6.29514 11.9355 6.89049 11.8829 7.28661 12.2331L8.2802 11.1094ZM18.1419 20.382V22H19.6419V20.382H18.1419ZM10.6018 22C10.6018 21.0874 10.6096 20.4739 10.4288 19.8927L8.99651 20.3384C9.09397 20.6516 9.10181 20.9963 9.10181 22H10.6018ZM8.06062 18.8763C8.6596 19.6676 8.85727 19.942 8.96672 20.2491L10.3797 19.7455C10.1749 19.1709 9.80091 18.69 9.25665 17.971L8.06062 18.8763ZM10.4288 19.8927C10.4134 19.8433 10.397 19.7943 10.3797 19.7456L8.96672 20.2491C8.97724 20.2786 8.98717 20.3084 8.99651 20.3384L10.4288 19.8927ZM9.25 3.75V14H10.75V3.75H9.25ZM12.75 3.75V9.5H14.25V3.75H12.75ZM13.5333 10.2493C15.1369 10.1779 17.8679 10.557 19.7891 12.4905L20.8531 11.4332C18.5111 9.07631 15.2796 8.67013 13.4667 8.75074L13.5333 10.2493ZM10.75 3.75C10.75 3.19772 11.1977 2.75 11.75 2.75V1.25C10.3693 1.25 9.25 2.36929 9.25 3.75H10.75ZM11.75 2.75C12.3023 2.75 12.75 3.19772 12.75 3.75H14.25C14.25 2.36929 13.1307 1.25 11.75 1.25V2.75Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M21 4L17 4M21 4C21 4.56018 19.5057 5.60678 19 6M21 4C21 3.43982 19.5057 2.39322 19 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 4L7 4M3 4C3 3.43982 4.4943 2.39322 5 2M3 4C3 4.56018 4.4943 5.60678 5 6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
