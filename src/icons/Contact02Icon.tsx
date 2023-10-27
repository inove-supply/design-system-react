export const Contact02Icon = ({
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
        d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M9.79993 11.9741C9.37332 11.2302 9.16733 10.6228 9.04313 10.007C8.85943 9.09641 9.27981 8.20686 9.97622 7.63926C10.2706 7.39937 10.608 7.48133 10.782 7.79358L11.1749 8.49851C11.4864 9.05725 11.6421 9.33663 11.6112 9.63282C11.5803 9.929 11.3703 10.1702 10.9503 10.6527L9.79993 11.9741ZM9.79993 11.9741C10.6634 13.4797 12.0185 14.8356 13.5259 15.7001M13.5259 15.7001C14.2698 16.1267 14.8772 16.3327 15.493 16.4569C16.4036 16.6406 17.2931 16.2202 17.8607 15.5238C18.1006 15.2294 18.0187 14.892 17.7064 14.718L17.0015 14.3251C16.4427 14.0136 16.1634 13.8579 15.8672 13.8888C15.571 13.9197 15.3298 14.1297 14.8473 14.5497L13.5259 15.7001Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
