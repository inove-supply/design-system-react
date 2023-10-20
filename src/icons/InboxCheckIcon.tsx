export const InboxCheckIcon = ({
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
        d="M21 12.5C21 16.9783 21 19.2175 19.6088 20.6088C18.2175 22 15.9783 22 11.5 22C7.02166 22 4.78249 22 3.39124 20.6088C2 19.2175 2 16.9783 2 12.5C2 8.02166 2 5.78249 3.39124 4.39124C4.78249 3 7.02166 3 11.5 3"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14H16.0743C15.2322 14 14.5706 14.7036 14.1995 15.4472C13.7963 16.2551 12.9889 17 11.5 17C10.0111 17 9.20373 16.2551 8.80054 15.4472C8.42942 14.7036 7.76777 14 6.92566 14H2"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M16.9896 5.32308C16.6157 5.14473 16.1681 5.30322 15.9898 5.67707C15.8114 6.05092 15.9699 6.49857 16.3437 6.67692L16.9896 5.32308ZM17.5556 6.88889L16.9094 7.26961C17.05 7.50835 17.3109 7.65008 17.5877 7.6382C17.8645 7.62632 18.1123 7.46277 18.232 7.21286L17.5556 6.88889ZM19.6888 5.32706C20.0536 5.13071 20.1901 4.67588 19.9937 4.31116C19.7974 3.94644 19.3425 3.80994 18.9778 4.00628L19.6888 5.32706ZM21.25 6C21.25 7.79493 19.7949 9.25 18 9.25V10.75C20.6234 10.75 22.75 8.62335 22.75 6H21.25ZM18 9.25C16.2051 9.25 14.75 7.79493 14.75 6H13.25C13.25 8.62335 15.3766 10.75 18 10.75V9.25ZM14.75 6C14.75 4.20507 16.2051 2.75 18 2.75V1.25C15.3766 1.25 13.25 3.37665 13.25 6H14.75ZM18 2.75C19.7949 2.75 21.25 4.20507 21.25 6H22.75C22.75 3.37665 20.6234 1.25 18 1.25V2.75ZM16.6667 6C16.3437 6.67692 16.3435 6.6768 16.3432 6.67668C16.3432 6.67665 16.3429 6.67653 16.3428 6.67646C16.3425 6.67631 16.3422 6.67616 16.3419 6.67601C16.3413 6.67573 16.3407 6.67545 16.3401 6.67519C16.3391 6.67466 16.3381 6.67419 16.3372 6.67377C16.3355 6.67293 16.3342 6.67229 16.3334 6.67186C16.3317 6.67101 16.3318 6.671 16.3333 6.67185C16.3365 6.67357 16.3458 6.6787 16.3602 6.68749C16.389 6.70516 16.4372 6.737 16.4962 6.78482C16.6146 6.88066 16.7724 7.03715 16.9094 7.26961L18.2017 6.50817C17.9577 6.09405 17.6711 5.8061 17.4403 5.61914C17.3247 5.52556 17.2221 5.4564 17.1438 5.40844C17.1046 5.38441 17.0712 5.36556 17.0451 5.3515C17.0321 5.34446 17.0208 5.33861 17.0115 5.33389C17.0069 5.33154 17.0027 5.32946 16.999 5.32766C16.9972 5.32676 16.9955 5.32593 16.9939 5.32517C16.9931 5.32479 16.9924 5.32442 16.9917 5.32407C16.9913 5.3239 16.991 5.32373 16.9906 5.32357C16.9904 5.32348 16.9902 5.32336 16.9901 5.32332C16.9898 5.3232 16.9896 5.32308 16.6667 6ZM17.5556 6.88889C18.232 7.21286 18.2319 7.21297 18.2319 7.21307C18.2319 7.21309 18.2318 7.21318 18.2318 7.21323C18.2317 7.21333 18.2317 7.21341 18.2317 7.21345C18.2316 7.21355 18.2316 7.21355 18.2317 7.21344C18.2318 7.21323 18.2321 7.21263 18.2326 7.21164C18.2335 7.20965 18.2353 7.20612 18.2377 7.20113C18.2426 7.19114 18.2505 7.17534 18.2611 7.15442C18.2824 7.11254 18.3147 7.05041 18.3566 6.97352C18.4409 6.81901 18.5621 6.60873 18.7097 6.38525C19.0274 5.90438 19.3854 5.4904 19.6888 5.32706L18.9778 4.00628C18.32 4.36043 17.7891 5.05757 17.4582 5.55843C17.2815 5.82582 17.1386 6.07406 17.0397 6.25536C16.9901 6.34638 16.951 6.42147 16.9239 6.47483C16.9103 6.50154 16.8997 6.52287 16.8922 6.53811C16.8884 6.54573 16.8855 6.55183 16.8833 6.55633C16.8822 6.55858 16.8813 6.56043 16.8806 6.56186C16.8803 6.56258 16.88 6.56319 16.8797 6.5637C16.8796 6.56396 16.8795 6.56419 16.8794 6.56439C16.8793 6.56449 16.8793 6.56462 16.8793 6.56467C16.8792 6.5648 16.8791 6.56492 17.5556 6.88889Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
