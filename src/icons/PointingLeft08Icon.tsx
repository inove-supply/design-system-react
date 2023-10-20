export const PointingLeft08Icon = ({
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
        d="M12 22.75C11.5858 22.75 11.25 22.4142 11.25 22C11.25 21.5858 11.5858 21.25 12 21.25L12 22.75ZM17.9792 8.06729L17.5579 8.68779L17.5579 8.68779L17.9792 8.06729ZM18.8093 8.6309L19.2306 8.0104L19.2306 8.0104L18.8093 8.6309ZM11.3747 8.5343L10.8316 8.01704C10.8444 8.00364 10.8577 7.99071 10.8714 7.97829L11.3747 8.5343ZM10.5431 10.4949C10.2574 10.7949 9.78268 10.8064 9.48274 10.5208C9.1828 10.2351 9.17124 9.76035 9.45691 9.46041L10.5431 10.4949ZM14.9372 6.50519L14.8927 7.25387L14.9372 6.50519ZM14.1756 6.55904L14.0262 5.82406L14.1756 6.55904ZM18.668 21.7083L18.9223 22.4139L18.668 21.7083ZM21.7136 18.6066L21.0051 18.3604L21.7136 18.6066ZM21.8872 12.447L21.1535 12.6027L21.1535 12.6027L21.8872 12.447ZM20.5896 9.97767L20.0464 10.4948L20.5896 9.97767ZM14.5 9.25C14.9142 9.25 15.25 9.58579 15.25 10C15.25 10.4142 14.9142 10.75 14.5 10.75L14.5 9.25ZM11 12.25C11.4142 12.25 11.75 12.5858 11.75 13C11.75 13.4142 11.4142 13.75 11 13.75L11 12.25ZM11 15.25C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75L11 15.25ZM9 16L8.25 16C8.25 15.5858 8.58579 15.25 9 15.25L9 16ZM12 18.25C12.4142 18.25 12.75 18.5858 12.75 19C12.75 19.4142 12.4142 19.75 12 19.75L12 18.25ZM10 19L9.2602 19.1233C9.22396 18.9058 9.28523 18.6834 9.42773 18.5152C9.57024 18.347 9.77954 18.25 10 18.25L10 19ZM10.2215 20.3288L9.48167 20.4521L10.2215 20.3288ZM13 21.25C13.4142 21.25 13.75 21.5858 13.75 22C13.75 22.4142 13.4142 22.75 13 22.75L13 21.25ZM12 21.25L14.8347 21.25L14.8347 22.75L12 22.75L12 21.25ZM18.4005 7.44679L19.2306 8.0104L18.388 9.2514L17.5579 8.68779L18.4005 7.44679ZM11.9178 9.05156L10.5431 10.4949L9.45691 9.46041L10.8316 8.01704L11.9178 9.05156ZM17.5579 8.68779C16.8026 8.17498 16.2799 7.82104 15.846 7.58415C15.4245 7.35404 15.1465 7.26895 14.8927 7.25387L14.9817 5.75651C15.5402 5.78969 16.04 5.98104 16.5648 6.26761C17.0773 6.5474 17.6693 6.95038 18.4005 7.4468L17.5579 8.68779ZM10.8714 7.97829C11.5282 7.38366 12.0597 6.90143 12.529 6.55239C13.0095 6.19502 13.478 5.93545 14.0262 5.82406L14.3249 7.29403C14.0751 7.34477 13.8108 7.46846 13.4242 7.75599C13.0264 8.05186 12.5564 8.47619 11.8781 9.09031L10.8714 7.97829ZM14.8927 7.25387C14.7026 7.24257 14.5118 7.25605 14.3249 7.29403L14.0262 5.82406C14.3405 5.7602 14.6616 5.73749 14.9817 5.75651L14.8927 7.25387ZM14.8347 21.25C16.9151 21.25 17.7586 21.2388 18.4137 21.0027L18.9223 22.4139C17.9586 22.7612 16.7862 22.75 14.8347 22.75L14.8347 21.25ZM22.75 14.7027C22.75 16.6932 22.7605 17.8787 22.422 18.8527L21.0051 18.3604C21.2395 17.6858 21.25 16.8182 21.25 14.7027L22.75 14.7027ZM18.4137 21.0027C19.6201 20.568 20.5747 19.5992 21.0051 18.3604L22.422 18.8527C21.8455 20.5121 20.5616 21.8231 18.9223 22.4139L18.4137 21.0027ZM21.25 14.7027C21.25 13.5205 21.2461 13.0391 21.1535 12.6027L22.6209 12.2914C22.7539 12.9181 22.75 13.5861 22.75 14.7027L21.25 14.7027ZM19.2306 8.0104C20.1421 8.62929 20.6926 8.99816 21.1328 9.46051L20.0464 10.4948C19.7431 10.1763 19.3545 9.9076 18.388 9.2514L19.2306 8.0104ZM21.1535 12.6027C20.9847 11.8069 20.6005 11.0768 20.0464 10.4948L21.1328 9.46051C21.88 10.2453 22.3949 11.2262 22.6209 12.2914L21.1535 12.6027ZM14.5 10.75L4.5 10.75L4.5 9.25L14.5 9.25L14.5 10.75ZM4.5 12.25L8 12.25L8 13.75L4.5 13.75L4.5 12.25ZM3.75 11.5C3.75 11.9142 4.08579 12.25 4.5 12.25L4.5 13.75C3.25736 13.75 2.25 12.7426 2.25 11.5L3.75 11.5ZM4.5 10.75C4.08579 10.75 3.75 11.0858 3.75 11.5L2.25 11.5C2.25 10.2574 3.25736 9.25 4.5 9.25L4.5 10.75ZM8.75 13L8.75 14L7.25 14L7.25 13L8.75 13ZM10 15.25L11 15.25L11 16.75L10 16.75L10 15.25ZM8.75 14C8.75 14.6904 9.30964 15.25 10 15.25L10 16.75C8.48122 16.75 7.25 15.5188 7.25 14L8.75 14ZM10 16.75L9 16.75L9 15.25L10 15.25L10 16.75ZM9.75 16L9.75 17L8.25 17L8.25 16L9.75 16ZM11 18.25L12 18.25L12 19.75L11 19.75L11 18.25ZM9.75 17C9.75 17.6904 10.3096 18.25 11 18.25L11 19.75C9.48122 19.75 8.25 18.5188 8.25 17L9.75 17ZM11 19.75L10 19.75L10 18.25L11 18.25L11 19.75ZM10.7398 18.8767L10.9613 20.2055L9.48167 20.4521L9.2602 19.1233L10.7398 18.8767ZM12.1943 21.25L13 21.25L13 22.75L12.1943 22.75L12.1943 21.25ZM10.9613 20.2055C11.0617 20.8082 11.5832 21.25 12.1943 21.25L12.1943 22.75C10.8499 22.75 9.70267 21.7781 9.48167 20.4521L10.9613 20.2055ZM8 12.25L11 12.25L11 13.75L8 13.75L8 12.25Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2 4.5L8 4.5M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
