export const Medal03Icon = ({
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
        d="M10.5292 13.6376C11.2478 13.2125 11.6071 13 12 13C12.3929 13 12.7522 13.2125 13.4708 13.6376L14.4708 14.2292C15.2167 14.6704 15.5896 14.891 15.7948 15.26C16 15.6289 16 16.0789 16 16.979V18.021C16 18.9211 16 19.3711 15.7948 19.74C15.5896 20.109 15.2167 20.3296 14.4708 20.7708L13.4708 21.3624C12.7522 21.7875 12.3929 22 12 22C11.6071 22 11.2478 21.7875 10.5292 21.3624L9.52922 20.7708C8.78332 20.3296 8.41037 20.109 8.20519 19.74C8 19.3711 8 18.9211 8 18.021V16.979C8 16.0789 8 15.6289 8.20519 15.26C8.41037 14.891 8.78332 14.6704 9.52922 14.2292L10.5292 13.6376Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M17.2588 2.0105H6.74116C5.93143 2.0105 4.85952 1.86882 4.30576 2.62642C4 3.04472 4 3.65001 4 4.8606C4 5.89272 4 6.40877 4.20617 6.84356C4.55829 7.58616 5.34557 7.90873 6.02037 8.25954L9.31672 9.97321C10.6334 10.6577 11.2918 11 12 11C12.7082 11 13.3666 10.6577 14.6833 9.97321L17.9796 8.25954C18.6544 7.90873 19.4417 7.58616 19.7938 6.84356C20 6.40877 20 5.89272 20 4.8606C20 3.65001 20 3.04472 19.6942 2.62642C19.1405 1.86882 18.0686 2.0105 17.2588 2.0105Z"
        strokeWidth={strokeWidth}
      />
      <path d="M12 2V6" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
