export const LoveKoreanFingerIcon = ({
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
        d="M8.38746 2.45671L7.85638 2.9863V2.9863L8.38746 2.45671ZM12.0473 6.12685L11.5162 6.65643L12.0473 6.12685ZM16.0841 10.175L16.6151 9.64541V9.64541L16.0841 10.175ZM16.817 10.91L16.286 11.4396V11.4396L16.817 10.91ZM6.18844 2.45671L6.71951 2.9863L6.18844 2.45671ZM6.18844 4.66193L6.71951 4.13235H6.71951L6.18844 4.66193ZM10.5865 9.07236L10.0554 9.60194L10.5865 9.07236ZM8.38746 11.2776L7.85638 11.8072L8.38746 11.2776ZM6.92144 12.0126L6.39037 11.4831H6.39037L6.92144 12.0126ZM9.12046 12.0126L9.65154 11.4831L9.65154 11.4831L9.12046 12.0126ZM6.92144 14.2179L6.39037 14.7474L6.92144 14.2179ZM8.02095 19.7309L8.55203 19.2013L8.02095 19.7309ZM5.45543 17.1581L4.92436 17.6877H4.92436L5.45543 17.1581ZM7.65445 14.9529L8.18553 14.4233L7.65445 14.9529ZM16.2562 5.7075L15.8253 5.09361L15.8253 5.09361L16.2562 5.7075ZM16.439 4.12838L16.0945 4.79456L16.439 4.12838ZM13.0033 4.46881L13.4753 5.05165V5.05165L13.0033 4.46881ZM8.11718 16.4791C8.40966 16.7724 8.88453 16.7731 9.17784 16.4806C9.47114 16.1881 9.47181 15.7133 9.17933 15.4199L8.11718 16.4791ZM12.5619 12.1155C12.8543 12.4088 13.3292 12.4094 13.6225 12.117C13.9158 11.8245 13.9165 11.3496 13.624 11.0563L12.5619 12.1155ZM10.3395 14.2973C10.632 14.5906 11.1069 14.5913 11.4002 14.2988C11.6935 14.0063 11.6942 13.5314 11.4017 13.2381L10.3395 14.2973ZM7.85638 2.9863L11.5162 6.65643L12.5784 5.59726L8.91853 1.92713L7.85638 2.9863ZM11.5162 6.65643L15.553 10.7046L16.6151 9.64541L12.5784 5.59726L11.5162 6.65643ZM15.553 10.7046L16.286 11.4396L17.3481 10.3805L16.6151 9.64541L15.553 10.7046ZM6.71951 2.9863C7.03369 2.67123 7.5422 2.67123 7.85638 2.9863L8.91853 1.92713C8.01823 1.02429 6.55767 1.02429 5.65736 1.92713L6.71951 2.9863ZM6.71951 4.13235C6.40417 3.81611 6.40417 3.30253 6.71951 2.9863L5.65736 1.92713C4.75822 2.82881 4.75822 4.28984 5.65736 5.19151L6.71951 4.13235ZM8.91853 9.60194C9.23271 9.28688 9.74122 9.28688 10.0554 9.60194L11.1176 8.54277C10.2172 7.63993 8.75669 7.63993 7.85638 8.54277L8.91853 9.60194ZM8.91853 10.748C8.60319 10.4318 8.60319 9.91817 8.91853 9.60194L7.85638 8.54277C6.95724 9.44445 6.95724 10.9055 7.85638 11.8072L8.91853 10.748ZM7.45252 12.5422C7.7667 12.2272 8.27521 12.2272 8.58939 12.5422L9.65154 11.4831C8.75123 10.5802 7.29067 10.5802 6.39037 11.4831L7.45252 12.5422ZM7.45252 13.6883C7.13718 13.372 7.13718 12.8585 7.45252 12.5422L6.39037 11.4831C5.49123 12.3847 5.49123 13.8458 6.39037 14.7474L7.45252 13.6883ZM8.55203 19.2013L5.98651 16.6286L4.92436 17.6877L7.48988 20.2605L8.55203 19.2013ZM5.98651 15.4825C6.30069 15.1674 6.8092 15.1674 7.12337 15.4825L8.18553 14.4233C7.28522 13.5205 5.82466 13.5205 4.92436 14.4233L5.98651 15.4825ZM5.98651 16.6286C5.67116 16.3123 5.67116 15.7987 5.98651 15.4825L4.92436 14.4233C4.02521 15.325 4.02521 16.7861 4.92436 17.6877L5.98651 16.6286ZM5.65736 5.19151L10.0554 9.60194L11.1176 8.54277L6.71951 4.13235L5.65736 5.19151ZM7.85638 11.8072L8.58939 12.5422L9.65154 11.4831L8.91853 10.748L7.85638 11.8072ZM6.39037 14.7474L7.12337 15.4825L8.18553 14.4233L7.45252 13.6883L6.39037 14.7474ZM15.8253 5.09361C15.1685 5.55461 14.4183 6.28785 14.2041 7.31095C13.9781 8.39057 14.3945 9.5428 15.553 10.7046L16.6151 9.64541C15.6755 8.70309 15.5844 8.03811 15.6723 7.61828C15.772 7.14192 16.1569 6.69346 16.687 6.32139L15.8253 5.09361ZM16.7835 3.46219C15.4433 2.76908 13.7661 2.88593 12.5313 3.88598L13.4753 5.05165C14.2278 4.44221 15.261 4.36349 16.0945 4.79456L16.7835 3.46219ZM7.12337 15.4825L8.11718 16.4791L9.17933 15.4199L8.18553 14.4233L7.12337 15.4825ZM10.0554 9.60194L12.5619 12.1155L13.624 11.0563L11.1176 8.54277L10.0554 9.60194ZM8.58939 12.5422L10.3395 14.2973L11.4017 13.2381L9.65154 11.4831L8.58939 12.5422ZM16.687 6.32139C17.1243 6.01451 17.4482 5.53096 17.5362 5.01304C17.631 4.45553 17.442 3.80273 16.7835 3.46219L16.0945 4.79456C16.1047 4.79984 16.0811 4.78748 16.0658 4.75224C16.0544 4.72578 16.0639 4.7237 16.0574 4.76171C16.0509 4.80006 16.0307 4.85885 15.9873 4.92522C15.9445 4.9906 15.8881 5.04956 15.8253 5.09361L16.687 6.32139ZM12.5313 3.88598C12.1615 4.18545 11.9296 4.58684 11.7692 4.91539C11.6868 5.08416 11.6136 5.25492 11.5502 5.40251C11.484 5.55696 11.4295 5.6836 11.3744 5.79556L12.7201 6.45813C12.7959 6.30426 12.8663 6.1394 12.9287 5.99396C12.9941 5.84166 13.0533 5.70416 13.1171 5.57356C13.249 5.30335 13.3643 5.14156 13.4753 5.05165L12.5313 3.88598ZM16.286 11.4396C19.1033 14.2649 18.5752 17.6405 16.6748 19.6083C15.717 20.6001 14.4193 21.2233 13.0177 21.2492C11.6277 21.2748 10.0607 20.7142 8.55203 19.2013L7.48988 20.2605C9.24863 22.0242 11.1964 22.783 13.0453 22.7489C14.8826 22.715 16.5479 21.8991 17.7538 20.6503C20.181 18.137 20.7835 13.8256 17.3481 10.3805L16.286 11.4396Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
