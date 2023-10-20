export const VrGlassesIcon = ({
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
        d="M7 9H17C18.8692 9 19.8038 9 20.5 9.40192C20.9561 9.66523 21.3348 10.0439 21.5981 10.5C22 11.1962 22 12.1308 22 14C22 15.8692 22 16.8038 21.5981 17.5C21.3348 17.9561 20.9561 18.3348 20.5 18.5981C19.8038 19 18.8692 19 17 19H16.6063C15.9194 19 15.5759 19 15.2546 18.9286C14.8244 18.8331 14.4206 18.6439 14.0718 18.3746C13.8112 18.1734 13.5913 17.9096 13.1516 17.3819C12.8012 16.9614 12.626 16.7512 12.4249 16.6568C12.1557 16.5305 11.8443 16.5305 11.5751 16.6568C11.374 16.7512 11.1988 16.9614 10.8484 17.3819C10.4087 17.9096 10.1888 18.1734 9.92823 18.3746C9.57943 18.6439 9.17559 18.8331 8.74542 18.9286C8.42406 19 8.08061 19 7.39369 19H7C5.13077 19 4.19615 19 3.5 18.5981C3.04394 18.3348 2.66523 17.9561 2.40192 17.5C2 16.8038 2 15.8692 2 14C2 12.1308 2 11.1962 2.40192 10.5C2.66523 10.0439 3.04394 9.66523 3.5 9.40192C4.19615 9 5.13077 9 7 9Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 13V11.8284C22 10.6747 22 10.0979 21.8468 9.56035C21.7626 9.26506 21.6447 8.98044 21.4954 8.71212C21.2237 8.22367 20.8158 7.81577 20 7C19.1842 6.18422 18.7763 5.77633 18.2879 5.50457C18.0196 5.35529 17.7349 5.2374 17.4396 5.15322C16.9021 5 16.3253 5 15.1716 5H8.82843C7.67474 5 7.0979 5 6.56035 5.15322C6.26506 5.2374 5.98044 5.35529 5.71212 5.50457C5.22367 5.77633 4.81578 6.18422 4 7C3.18422 7.81578 2.77633 8.22367 2.50457 8.71212C2.35529 8.98044 2.2374 9.26506 2.15322 9.56035C2 10.0979 2 10.6747 2 11.8284V13"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
