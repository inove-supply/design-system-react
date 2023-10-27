export const Toilet02Icon = ({
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
        d="M14.4004 14C15.3717 13.0878 16 11.6356 16 10C16 7.23858 14.2091 5 12 5C9.79086 5 8 7.23858 8 10C8 11.6356 8.62827 13.0878 9.59961 14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M8.10669 14H15.8933C16.479 14 17 14.4143 17 15C17 16.5105 16.3302 18.0905 15.2713 19.1262C14.7465 19.6395 14.2349 20.1721 14.8701 20.8686C14.9657 20.9734 15.0766 21.0645 15.1698 21.1715C15.4978 21.5478 15.1458 22 14.7227 22H9.27729C8.85422 22 8.50218 21.5478 8.83018 21.1715C8.9234 21.0645 9.0343 20.9734 9.12991 20.8686C9.76509 20.1721 9.25347 19.6395 8.72869 19.1262C7.66984 18.0905 7 16.5105 7 15C7 14.4143 7.52097 14 8.10669 14Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M18.2893 12C18.8844 12 19.3826 11.5702 19.4418 11.0059L19.8095 7.50176C20.0228 5.46884 20.1294 4.45238 19.7327 3.68365C18.746 1.77184 16.4338 2.00941 14.5944 2.00941H9.40559C7.56622 2.00941 5.25402 1.77184 4.26731 3.68365C3.87056 4.45238 3.9772 5.46884 4.1905 7.50176L4.55816 11.0059C4.61737 11.5702 5.11562 12 5.71068 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
