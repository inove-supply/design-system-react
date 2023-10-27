export const Hospital01Icon = ({
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
        d="M14 2V4M14 6V4M10 2V4M10 6V4M10 4H14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M3 22V11.3808C3 7.8766 3 6.12452 4.15327 5.03591C4.88623 4.34404 5.90312 4.09189 7.5 4M21 22V11.3808C21 7.8766 21 6.12452 19.8467 5.03591C19.1138 4.34404 18.0969 4.09189 16.5 4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 22H13.75C13.75 22.4142 14.0858 22.75 14.5 22.75V22ZM22 22.75C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25V22.75ZM2 21.25C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75V21.25ZM9.5 22V22.75C9.91421 22.75 10.25 22.4142 10.25 22H9.5ZM14.299 17.75L13.6495 18.125V18.125L14.299 17.75ZM13.75 17.201L14.125 16.5514V16.5514L13.75 17.201ZM9.70096 17.75L10.3505 18.125V18.125L9.70096 17.75ZM10.25 17.201L10.625 17.8505V17.8505L10.25 17.201ZM14.5 22.75H22V21.25H14.5V22.75ZM2 22.75H9.5V21.25H2V22.75ZM10.25 22V19.5H8.75V22H10.25ZM15.25 22V19.5H13.75V22H15.25ZM15.25 19.5C15.25 19.0465 15.2507 18.6562 15.2218 18.3374C15.192 18.0082 15.1259 17.6822 14.9486 17.375L13.6495 18.125C13.6731 18.1659 13.7075 18.2476 13.7279 18.4727C13.7493 18.7082 13.75 19.0189 13.75 19.5H15.25ZM12 17.75C12.4811 17.75 12.7918 17.7507 13.0273 17.7721C13.2524 17.7925 13.3341 17.8269 13.375 17.8505L14.125 16.5514C13.8178 16.3741 13.4918 16.308 13.1627 16.2782C12.8438 16.2493 12.4535 16.25 12 16.25V17.75ZM14.9486 17.375C14.7511 17.033 14.467 16.7489 14.125 16.5514L13.375 17.8505C13.489 17.9163 13.5837 18.011 13.6495 18.125L14.9486 17.375ZM10.25 19.5C10.25 19.0189 10.2507 18.7082 10.2721 18.4727C10.2925 18.2476 10.3269 18.1659 10.3505 18.125L9.05144 17.375C8.87407 17.6822 8.80802 18.0082 8.77818 18.3374C8.74928 18.6562 8.75 19.0465 8.75 19.5H10.25ZM12 16.25C11.5465 16.25 11.1562 16.2493 10.8373 16.2782C10.5082 16.308 10.1822 16.3741 9.875 16.5514L10.625 17.8505C10.6659 17.8269 10.7476 17.7925 10.9727 17.7721C11.2082 17.7507 11.5189 17.75 12 17.75V16.25ZM10.3505 18.125C10.4163 18.011 10.511 17.9163 10.625 17.8505L9.875 16.5514C9.53296 16.7489 9.24892 17.033 9.05144 17.375L10.3505 18.125Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M14 10H16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M14 14H16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7 14H9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M7 10H9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
