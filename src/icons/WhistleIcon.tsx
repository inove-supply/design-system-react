export const WhistleIcon = ({
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
        d="M13.6713 16.9638L12.9625 16.7184L12.9625 16.7184L13.6713 16.9638ZM21.4081 9.08705L21.102 9.77176V9.77176L21.4081 9.08705ZM21.8969 12.1743L21.1726 11.9794V11.9794L21.8969 12.1743ZM14.4832 15.1854L14.9182 15.7964L14.9182 15.7963L14.4832 15.1854ZM19.8216 14.4523L20.2376 15.0763L20.2376 15.0763L19.8216 14.4523ZM11.7969 9.4453L12.4209 9.02927V9.02927L11.7969 9.4453ZM12.3516 10.2774L11.7275 10.6934L11.7275 10.6934L12.3516 10.2774ZM15.3769 9.36924L14.6654 9.13207V9.13207L15.3769 9.36924ZM12.9625 16.7184C12.2505 18.775 10.2965 20.25 8 20.25V21.75C10.9554 21.75 13.4653 19.8511 14.38 17.2092L12.9625 16.7184ZM8 20.25C5.10051 20.25 2.75 17.8995 2.75 15H1.25C1.25 18.7279 4.27208 21.75 8 21.75V20.25ZM2.75 15C2.75 12.1005 5.10051 9.75 8 9.75V8.25C4.27208 8.25 1.25 11.2721 1.25 15H2.75ZM18.0126 14.25H16V15.75H18.0126V14.25ZM20.4648 9.75C20.7253 9.75 20.8805 9.75046 20.9959 9.75889C21.104 9.76678 21.1174 9.77864 21.102 9.77176L21.7141 8.40233C21.504 8.30841 21.2953 8.27675 21.1051 8.26287C20.9224 8.24954 20.7033 8.25 20.4648 8.25V9.75ZM21.25 10.5352C21.25 11.414 21.2439 11.7146 21.1726 11.9794L22.6211 12.3693C22.7561 11.8678 22.75 11.3311 22.75 10.5352H21.25ZM14.38 17.2092C14.5679 16.6665 14.6953 16.2999 14.8062 16.0428C14.9286 15.7587 14.9727 15.7576 14.9182 15.7964L14.0481 14.5744C13.7333 14.7986 13.5552 15.1557 13.4287 15.4489C13.2906 15.7692 13.1423 16.1991 12.9625 16.7184L14.38 17.2092ZM16 14.25C15.5964 14.25 15.2397 14.2492 14.9536 14.2766C14.6649 14.3042 14.3381 14.368 14.0481 14.5744L14.9182 15.7963C14.8886 15.8174 14.9014 15.7885 15.0966 15.7698C15.2944 15.7508 15.566 15.75 16 15.75V14.25ZM19.4056 13.8282C18.9352 14.1418 18.5878 14.25 18.0126 14.25V15.75C18.8873 15.75 19.5237 15.5523 20.2376 15.0763L19.4056 13.8282ZM22.75 10.5352C22.75 10.2836 22.7591 9.87307 22.6526 9.49516C22.5302 9.06097 22.2521 8.64281 21.7141 8.40233L21.102 9.77176C21.1522 9.79419 21.1672 9.81231 21.1719 9.81813C21.1788 9.82667 21.1938 9.84858 21.2088 9.90203C21.2472 10.0381 21.25 10.2165 21.25 10.5352H22.75ZM21.1726 11.9794C20.9575 12.7786 20.3615 13.191 19.4056 13.8282L20.2376 15.0763C21.0988 14.5022 22.2354 13.8018 22.6211 12.3693L21.1726 11.9794ZM15.8892 9.75H20.4648V8.25H15.8892V9.75ZM8 9.75H10.9648V8.25H8V9.75ZM11.1728 9.86132L11.7275 10.6934L12.9756 9.86133L12.4209 9.02927L11.1728 9.86132ZM12.7676 11.25H14.9279V9.75H12.7676V11.25ZM11.7275 10.6934C11.9594 11.0411 12.3496 11.25 12.7676 11.25V9.75C12.8512 9.75 12.9292 9.79178 12.9756 9.86132L11.7275 10.6934ZM10.9648 9.75C11.0484 9.75 11.1265 9.79178 11.1728 9.86133L12.4209 9.02927C12.0963 8.54243 11.5499 8.25 10.9648 8.25V9.75ZM15.8892 8.25C15.334 8.25 14.841 8.6053 14.6654 9.13207L16.0884 9.60641C16.0598 9.69216 15.9796 9.75 15.8892 9.75V8.25ZM14.9279 11.25C15.2506 11.25 15.46 11.0688 15.5485 10.9759C15.6446 10.875 15.7077 10.7655 15.7462 10.6905C15.8257 10.5356 15.8854 10.3576 15.928 10.2162C15.9731 10.0667 16.0113 9.91545 16.04 9.79985C16.0551 9.73863 16.0664 9.69259 16.0765 9.6525C16.0881 9.60703 16.0911 9.59849 16.0884 9.60641L14.6654 9.13207C14.6483 9.18351 14.6329 9.24295 14.6227 9.28312C14.6112 9.32867 14.5972 9.38594 14.584 9.43888C14.5561 9.55162 14.5253 9.67218 14.4918 9.78362C14.4558 9.90312 14.4273 9.97515 14.4119 10.0051C14.403 10.0225 14.4169 9.98909 14.4625 9.9412C14.5005 9.90131 14.6581 9.75 14.9279 9.75V11.25Z"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="8"
        cy="15"
        r="2"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5V3M11 6L10 5M16 6L17 5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
