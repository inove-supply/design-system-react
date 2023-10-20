export const Bug01Icon = ({
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
        d="M6.15 15.15H6.9H6.15ZM17.85 15.15H18.6H17.85ZM12.6136 6.6V5.85H12.6136L12.6136 6.6ZM15.5081 6.82698L15.7702 6.12427L15.5081 6.82698ZM17.85 11.8364H17.1H17.85ZM17.623 8.94193L18.3257 8.67983L17.623 8.94193ZM11.3864 6.6V7.35H11.3864L11.3864 6.6ZM8.49193 6.82698L8.22983 6.12427L8.49193 6.82698ZM6.15 11.8364H5.4H6.15ZM6.37698 8.94193L5.67427 8.67983L6.37698 8.94193ZM13.95 6.6C13.95 7.01421 14.2858 7.35 14.7 7.35C15.1142 7.35 15.45 7.01421 15.45 6.6H13.95ZM8.55 6.6C8.55 7.01421 8.88579 7.35 9.3 7.35C9.71421 7.35 10.05 7.01421 10.05 6.6H8.55ZM17.85 12.15C17.4358 12.15 17.1 12.4858 17.1 12.9C17.1 13.3142 17.4358 13.65 17.85 13.65V12.15ZM21 13.65C21.4142 13.65 21.75 13.3142 21.75 12.9C21.75 12.4858 21.4142 12.15 21 12.15V13.65ZM6.15 13.65C6.56421 13.65 6.9 13.3142 6.9 12.9C6.9 12.4858 6.56421 12.15 6.15 12.15V13.65ZM3 12.15C2.58579 12.15 2.25 12.4858 2.25 12.9C2.25 13.3142 2.58579 13.65 3 13.65V12.15ZM3 5.25H3.75H3ZM3.75 5C3.75 4.58579 3.41421 4.25 3 4.25C2.58579 4.25 2.25 4.58579 2.25 5H3.75ZM6.15 9.15C6.56421 9.15 6.9 8.81421 6.9 8.4C6.9 7.98579 6.56421 7.65 6.15 7.65V9.15ZM21.75 5C21.75 4.58579 21.4142 4.25 21 4.25C20.5858 4.25 20.25 4.58579 20.25 5H21.75ZM17.85 7.65C17.4358 7.65 17.1 7.98579 17.1 8.4C17.1 8.81421 17.4358 9.15 17.85 9.15V7.65ZM6.6 18.15C7.01421 18.15 7.35 17.8142 7.35 17.4C7.35 16.9858 7.01421 16.65 6.6 16.65V18.15ZM2.25 21C2.25 21.4142 2.58579 21.75 3 21.75C3.41421 21.75 3.75 21.4142 3.75 21H2.25ZM17.4 16.65C16.9858 16.65 16.65 16.9858 16.65 17.4C16.65 17.8142 16.9858 18.15 17.4 18.15V16.65ZM20.25 21C20.25 21.4142 20.5858 21.75 21 21.75C21.4142 21.75 21.75 21.4142 21.75 21H20.25ZM12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5H12.75ZM11.3864 7.35L12.6136 7.35L12.6136 5.85L11.3864 5.85L11.3864 7.35ZM17.1 11.8364L17.1 15.15H18.6L18.6 11.8364H17.1ZM6.9 15.15L6.9 11.8364H5.4L5.4 15.15H6.9ZM12 20.25C9.18335 20.25 6.9 17.9667 6.9 15.15H5.4C5.4 18.7951 8.35492 21.75 12 21.75V20.25ZM17.1 15.15C17.1 17.9667 14.8167 20.25 12 20.25V21.75C15.6451 21.75 18.6 18.7951 18.6 15.15H17.1ZM12.6136 7.35C13.3849 7.35 13.9292 7.35034 14.3576 7.37693C14.7801 7.40316 15.04 7.45287 15.246 7.52969L15.7702 6.12427C15.3676 5.97411 14.9422 5.91033 14.4506 5.87981C13.9649 5.84966 13.3663 5.85 12.6136 5.85V7.35ZM18.6 11.8364C18.6 11.0837 18.6003 10.4851 18.5702 9.99942C18.5397 9.50782 18.4759 9.08242 18.3257 8.67983L16.9203 9.20403C16.9971 9.41 17.0468 9.66986 17.0731 10.0924C17.0997 10.5208 17.1 11.0651 17.1 11.8364H18.6ZM15.246 7.52969C16.0205 7.81857 16.6314 8.42951 16.9203 9.20403L18.3257 8.67983C17.8848 7.49767 16.9523 6.56519 15.7702 6.12427L15.246 7.52969ZM11.3864 5.85C10.6337 5.85 10.0351 5.84966 9.54942 5.87981C9.05782 5.91033 8.63242 5.97411 8.22983 6.12427L8.75403 7.52969C8.96 7.45287 9.21986 7.40316 9.64236 7.37693C10.0708 7.35034 10.6151 7.35 11.3864 7.35V5.85ZM6.9 11.8364C6.9 11.0651 6.90034 10.5208 6.92693 10.0924C6.95316 9.66986 7.00287 9.41 7.07969 9.20403L5.67427 8.67983C5.52411 9.08242 5.46033 9.50782 5.42981 9.99942C5.39966 10.4851 5.4 11.0837 5.4 11.8364H6.9ZM8.22983 6.12427C7.04767 6.56519 6.11519 7.49767 5.67427 8.67983L7.07969 9.20403C7.36857 8.42951 7.97951 7.81857 8.75403 7.52969L8.22983 6.12427ZM12 3.75C12.7604 3.75 13.1987 4.0687 13.4858 4.53977C13.802 5.05878 13.95 5.80304 13.95 6.6H15.45C15.45 5.66238 15.283 4.60664 14.7667 3.75929C14.2212 2.86401 13.3096 2.25 12 2.25V3.75ZM10.05 6.6C10.05 5.80304 10.198 5.05878 10.5142 4.53977C10.8013 4.0687 11.2396 3.75 12 3.75V2.25C10.6904 2.25 9.77878 2.86401 9.23329 3.75929C8.717 4.60664 8.55 5.66238 8.55 6.6H10.05ZM17.85 13.65H21V12.15H17.85V13.65ZM6.15 12.15H3V13.65H6.15V12.15ZM3.75 5.25V5H2.25V5.25H3.75ZM6.15 7.65C4.82452 7.65 3.75 6.57548 3.75 5.25H2.25C2.25 7.40391 3.99609 9.15 6.15 9.15V7.65ZM21.75 5.25V5H20.25V5.25H21.75ZM17.85 9.15C20.0039 9.15 21.75 7.40391 21.75 5.25H20.25C20.25 6.57548 19.1755 7.65 17.85 7.65V9.15ZM6.6 16.65C4.19756 16.65 2.25 18.5976 2.25 21H3.75C3.75 19.426 5.02599 18.15 6.6 18.15V16.65ZM17.4 18.15C18.974 18.15 20.25 19.426 20.25 21H21.75C21.75 18.5976 19.8024 16.65 17.4 16.65V18.15ZM12.75 21V16.5H11.25V21H12.75Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
