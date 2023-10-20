export const TriangleIcon = ({
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
        d="M3 17.3362V7.10375C3 5.22156 3 4.28046 3.56542 4.04626C4.13085 3.81205 4.7963 4.47751 6.12721 5.80841L18.1916 17.8728C19.5225 19.2037 20.1879 19.8692 19.9537 20.4346C19.7195 21 18.7784 21 16.8963 21H6.66376C4.93665 21 4.07309 21 3.53655 20.4635C3 19.9269 3 19.0634 3 17.3362Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.8655 12.8655L21.3958 13.3958L20.8655 12.8655ZM17.4822 8.44323C17.1885 8.15116 16.7136 8.15248 16.4215 8.44619C16.1294 8.73989 16.1308 9.21477 16.4245 9.50684L17.4822 8.44323ZM19.7983 12.9656L19.7393 13.7133L19.7983 12.9656ZM18.59 12.1178C18.1771 12.0852 17.8159 12.3935 17.7832 12.8064C17.7506 13.2193 18.0589 13.5805 18.4718 13.6131L18.59 12.1178ZM21.6131 10.4718C21.5805 10.0589 21.2193 9.75062 20.8064 9.78325C20.3935 9.81587 20.0852 10.1771 20.1178 10.59L21.6131 10.4718ZM20.9656 11.7983L21.7133 11.7393L20.9656 11.7983ZM16.4245 6.49316C16.1308 6.78523 16.1294 7.26011 16.4215 7.55381C16.7136 7.84752 17.1885 7.84884 17.4822 7.55677L16.4245 6.49316ZM20.9656 4.20166L21.7133 4.26074L21.7133 4.26074L20.9656 4.20166ZM20.1178 5.41001C20.0852 5.82294 20.3935 6.18413 20.8064 6.21675C21.2193 6.24938 21.5805 5.94108 21.6131 5.52816L20.1178 5.41001ZM18.4718 2.38685C18.0589 2.41948 17.7506 2.78067 17.7832 3.19359C17.8159 3.60652 18.1771 3.91482 18.59 3.88219L18.4718 2.38685ZM19.7983 3.03438L19.7393 2.28671L19.7393 2.28671L19.7983 3.03438ZM14.4784 7.58722C14.7694 7.88191 15.2443 7.88485 15.539 7.59377C15.8337 7.30269 15.8366 6.82783 15.5455 6.53313L14.4784 7.58722ZM11.0344 4.20166L10.2867 4.26074V4.26074L11.0344 4.20166ZM10.3869 5.52816C10.4195 5.94108 10.7807 6.24938 11.1936 6.21675C11.6065 6.18413 11.9148 5.82294 11.8822 5.41001L10.3869 5.52816ZM13.41 3.88219C13.8229 3.91482 14.1841 3.60652 14.2168 3.19359C14.2494 2.78067 13.9411 2.41948 13.5282 2.38685L13.41 3.88219ZM12.2017 3.03438L12.2607 2.28671L12.2607 2.28671L12.2017 3.03438ZM21.3943 12.3337L17.4822 8.44323L16.4245 9.50684L20.3366 13.3973L21.3943 12.3337ZM19.8574 12.2179L18.59 12.1178L18.4718 13.6131L19.7393 13.7133L19.8574 12.2179ZM20.1178 10.59L20.2179 11.8574L21.7133 11.7393L21.6131 10.4718L20.1178 10.59ZM19.7393 13.7133C20.016 13.7351 20.3003 13.7593 20.5338 13.7462C20.7816 13.7323 21.1201 13.6715 21.3958 13.3958L20.3351 12.3351C20.4399 12.2304 20.5436 12.2433 20.4499 12.2485C20.4048 12.2511 20.3375 12.2506 20.2334 12.245C20.1301 12.2394 20.0096 12.23 19.8574 12.2179L19.7393 13.7133ZM20.2179 11.8574C20.23 12.0096 20.2394 12.1301 20.245 12.2334C20.2506 12.3375 20.2511 12.4048 20.2485 12.4499C20.2433 12.5436 20.2304 12.4399 20.3351 12.3351L21.3958 13.3958C21.6715 13.1201 21.7323 12.7816 21.7462 12.5338C21.7593 12.3003 21.7351 12.016 21.7133 11.7393L20.2179 11.8574ZM20.3366 2.60272L16.4245 6.49316L17.4822 7.55677L21.3943 3.66633L20.3366 2.60272ZM20.2179 4.14259L20.1178 5.41001L21.6131 5.52816L21.7133 4.26074L20.2179 4.14259ZM18.59 3.88219L19.8574 3.78205L19.7393 2.28671L18.4718 2.38685L18.59 3.88219ZM21.7133 4.26074C21.7351 3.98403 21.7593 3.69968 21.7462 3.46619C21.7323 3.21839 21.6715 2.87992 21.3958 2.60419L20.3351 3.66485C20.2304 3.56007 20.2433 3.45643 20.2485 3.55011C20.2511 3.59524 20.2506 3.66246 20.245 3.76656C20.2394 3.86995 20.23 3.99044 20.2179 4.14259L21.7133 4.26074ZM19.8574 3.78205C20.0096 3.77003 20.1301 3.76056 20.2334 3.75499C20.3375 3.74938 20.4048 3.74894 20.4499 3.75147C20.5436 3.75672 20.4399 3.76963 20.3351 3.66485L21.3958 2.60419C21.1201 2.32847 20.7816 2.26771 20.5338 2.25382C20.3003 2.24074 20.016 2.26485 19.7393 2.28671L19.8574 3.78205ZM10.6009 3.66156L14.4784 7.58722L15.5455 6.53313L11.6681 2.60748L10.6009 3.66156ZM10.2867 4.26074L10.3869 5.52816L11.8822 5.41001L11.7821 4.14259L10.2867 4.26074ZM13.5282 2.38685L12.2607 2.28671L12.1426 3.78205L13.41 3.88219L13.5282 2.38685ZM11.7821 4.14259C11.77 3.99044 11.7606 3.86995 11.755 3.76656C11.7494 3.66246 11.7489 3.59524 11.7515 3.55011C11.7567 3.45643 11.7696 3.56007 11.6649 3.66485L10.6042 2.60419C10.3285 2.87992 10.2677 3.21839 10.2538 3.46619C10.2407 3.69968 10.2649 3.98403 10.2867 4.26074L11.7821 4.14259ZM12.2607 2.28671C11.984 2.26485 11.6997 2.24074 11.4662 2.25382C11.2184 2.26771 10.8799 2.32847 10.6042 2.60419L11.6649 3.66485C11.5601 3.76963 11.4564 3.75672 11.5501 3.75147C11.5952 3.74894 11.6625 3.74938 11.7666 3.75499C11.8699 3.76056 11.9904 3.77003 12.1426 3.78205L12.2607 2.28671ZM16.6136 8C16.6136 8.3389 16.3389 8.61364 16 8.61364V10.1136C17.1673 10.1136 18.1136 9.16733 18.1136 8H16.6136ZM16 8.61364C15.6611 8.61364 15.3864 8.3389 15.3864 8H13.8864C13.8864 9.16733 14.8327 10.1136 16 10.1136V8.61364ZM15.3864 8C15.3864 7.6611 15.6611 7.38636 16 7.38636V5.88636C14.8327 5.88636 13.8864 6.83267 13.8864 8H15.3864ZM16 7.38636C16.3389 7.38636 16.6136 7.6611 16.6136 8H18.1136C18.1136 6.83267 17.1673 5.88636 16 5.88636V7.38636Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
