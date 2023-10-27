export const SystemUpdate01Icon = ({
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
        d="M21.255 7.13358L20.7614 6.27698C20.3881 5.62915 20.2015 5.30523 19.8839 5.17607C19.5663 5.0469 19.2071 5.14883 18.4888 5.35267L17.2686 5.69637C16.81 5.80212 16.3288 5.74213 15.9101 5.52698L15.5732 5.33261C15.2141 5.10262 14.9379 4.76352 14.785 4.36493L14.4511 3.36754C14.2315 2.70753 14.1217 2.37752 13.8603 2.18876C13.599 2 13.2518 2 12.5574 2H11.4426C10.7483 2 10.4011 2 10.1397 2.18876C9.87835 2.37752 9.76856 2.70753 9.54899 3.36754L9.21503 4.36493C9.06215 4.76352 8.78595 5.10262 8.42687 5.33261L8.08999 5.52698C7.67124 5.74213 7.19009 5.80212 6.73148 5.69637L5.51125 5.35267C4.79291 5.14883 4.43375 5.0469 4.11617 5.17607C3.79859 5.30523 3.61195 5.62915 3.23865 6.27698L2.74507 7.13358C2.39516 7.74083 2.2202 8.04446 2.25416 8.36768C2.28811 8.6909 2.52233 8.95137 2.99076 9.47231L4.0218 10.625C4.2738 10.944 4.45271 11.5 4.45271 11.9998C4.45271 12.5 4.27386 13.0558 4.02183 13.3749L2.99076 14.5276C2.52233 15.0485 2.28812 15.309 2.25416 15.6322C2.2202 15.9555 2.39516 16.2591 2.74507 16.8663L3.23864 17.7229C3.61193 18.3707 3.79859 18.6947 4.11617 18.8238C4.43375 18.953 4.79292 18.8511 5.51127 18.6472L6.73144 18.3035C7.19013 18.1977 7.67137 18.2578 8.09017 18.473L8.427 18.6674C8.78601 18.8974 9.06214 19.2364 9.215 19.635L9.54899 20.6325C9.76856 21.2925 9.87835 21.6225 10.1397 21.8112C10.4011 22 10.7483 22 11.4426 22H12.5574C13.2518 22 13.599 22 13.8603 21.8112C14.1217 21.6225 14.2315 21.2925 14.4511 20.6325L14.7851 19.635C14.9379 19.2364 15.214 18.8974 15.5731 18.6674L15.9099 18.473C16.3287 18.2578 16.8099 18.1977 17.2686 18.3035L18.4888 18.6472C19.2071 18.8511 19.5663 18.953 19.8839 18.8238C20.2015 18.6947 20.3881 18.3707 20.7614 17.7229L21.255 16.8663C21.6049 16.2591 21.7798 15.9555 21.7459 15.6322C21.7119 15.309 21.4777 15.0485 21.0093 14.5276L19.9782 13.3749C19.7262 13.0558 19.5473 12.5 19.5473 11.9998C19.5473 11.5 19.7263 10.944 19.9782 10.625L21.0093 9.47231C21.4777 8.95137 21.7119 8.6909 21.7459 8.36768C21.7798 8.04446 21.6049 7.74083 21.255 7.13358Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M14.062 11.5L14.5621 10.9999C15.0032 10.5588 15.2238 10.3382 15.5133 10.4297C15.8029 10.5213 15.8486 10.7831 15.9401 11.3067C15.9795 11.5319 16 11.7636 16 12C16 14.2091 14.2091 16 12 16C11.4695 16 10.9632 15.8967 10.5 15.7092M10 12.5351L9.45585 13.0793C9.0216 13.5135 8.80447 13.7307 8.51776 13.6438C8.23106 13.5569 8.17985 13.3003 8.07744 12.7872C8.02664 12.5327 8 12.2695 8 12C8 9.79086 9.79086 8 12 8C12.5305 8 13.0368 8.10325 13.5 8.29076"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
