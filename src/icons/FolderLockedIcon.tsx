export const FolderLockedIcon = ({
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
        d="M16.0803 21.3573L15.7761 22.0428L15.7761 22.0428L16.0803 21.3573ZM15.1332 20.3425L14.4337 20.613H14.4337L15.1332 20.3425ZM21.8668 20.3425L22.5663 20.613L22.5663 20.613L21.8668 20.3425ZM20.9197 21.3573L21.2239 22.0428L21.2239 22.0428L20.9197 21.3573ZM20.9197 16.0177L21.2239 15.3322L20.9197 16.0177ZM21.8668 17.0325L22.5663 16.762L22.5663 16.762L21.8668 17.0325ZM16.0803 16.0177L15.7761 15.3322L16.0803 16.0177ZM15.1332 17.0325L14.4337 16.762L15.1332 17.0325ZM16 15.875C16 16.2892 16.3358 16.625 16.75 16.625C17.1642 16.625 17.5 16.2892 17.5 15.875H16ZM19.5 15.875C19.5 16.2892 19.8358 16.625 20.25 16.625C20.6642 16.625 21 16.2892 21 15.875H19.5ZM17.625 16.625H19.375V15.125H17.625V16.625ZM19.375 20.75H17.625V22.25H19.375V20.75ZM17.625 20.75C17.2063 20.75 16.9325 20.7495 16.7222 20.7342C16.5196 20.7193 16.4338 20.6936 16.3845 20.6718L15.7761 22.0428C16.0484 22.1637 16.3272 22.2093 16.6128 22.2302C16.8905 22.2505 17.2283 22.25 17.625 22.25V20.75ZM14.25 18.6875C14.25 19.1147 14.2496 19.4702 14.2682 19.7611C14.2871 20.0577 14.3278 20.339 14.4337 20.613L15.8328 20.0721C15.8054 20.0014 15.7795 19.8921 15.7651 19.6658C15.7504 19.4336 15.75 19.1339 15.75 18.6875H14.25ZM16.3845 20.6718C16.1471 20.5664 15.9427 20.3566 15.8328 20.0721L14.4337 20.613C14.6789 21.2474 15.1559 21.7676 15.7761 22.0428L16.3845 20.6718ZM21.25 18.6875C21.25 19.1339 21.2496 19.4336 21.2349 19.6658C21.2205 19.8921 21.1946 20.0014 21.1672 20.0721L22.5663 20.613C22.6722 20.339 22.7129 20.0577 22.7318 19.7611C22.7504 19.4702 22.75 19.1147 22.75 18.6875H21.25ZM19.375 22.25C19.7717 22.25 20.1095 22.2505 20.3872 22.2302C20.6728 22.2093 20.9516 22.1637 21.2239 22.0428L20.6155 20.6718C20.5662 20.6936 20.4804 20.7193 20.2778 20.7342C20.0675 20.7495 19.7937 20.75 19.375 20.75V22.25ZM21.1672 20.0721C21.0573 20.3566 20.8529 20.5664 20.6155 20.6718L21.2239 22.0428C21.8441 21.7676 22.3211 21.2474 22.5663 20.613L21.1672 20.0721ZM19.375 16.625C19.7937 16.625 20.0675 16.6255 20.2778 16.6408C20.4804 16.6557 20.5662 16.6814 20.6155 16.7032L21.2239 15.3322C20.9516 15.2113 20.6728 15.1657 20.3872 15.1448C20.1095 15.1245 19.7717 15.125 19.375 15.125V16.625ZM22.75 18.6875C22.75 18.2603 22.7504 17.9048 22.7318 17.6139C22.7129 17.3173 22.6722 17.036 22.5663 16.762L21.1672 17.3029C21.1946 17.3736 21.2205 17.4829 21.2349 17.7092C21.2496 17.9414 21.25 18.2411 21.25 18.6875H22.75ZM20.6155 16.7032C20.8529 16.8086 21.0573 17.0184 21.1672 17.3029L22.5663 16.762C22.3211 16.1277 21.8441 15.6074 21.2239 15.3322L20.6155 16.7032ZM17.625 15.125C17.2283 15.125 16.8905 15.1245 16.6128 15.1448C16.3272 15.1657 16.0484 15.2113 15.7761 15.3322L16.3845 16.7032C16.4338 16.6814 16.5196 16.6557 16.7222 16.6408C16.9325 16.6255 17.2063 16.625 17.625 16.625V15.125ZM15.75 18.6875C15.75 18.2411 15.7504 17.9414 15.7651 17.7092C15.7795 17.4829 15.8054 17.3736 15.8328 17.3029L14.4337 16.762C14.3278 17.036 14.2871 17.3173 14.2682 17.6139C14.2496 17.9048 14.25 18.2603 14.25 18.6875H15.75ZM15.7761 15.3322C15.1559 15.6074 14.6789 16.1277 14.4337 16.762L15.8328 17.3029C15.9427 17.0184 16.1471 16.8086 16.3845 16.7032L15.7761 15.3322ZM17.5 15.875V14.1875H16V15.875H17.5ZM19.5 14.1875V15.875H21V14.1875H19.5ZM18.5 13.25C19.0782 13.25 19.5 13.6952 19.5 14.1875H21C21 12.8158 19.8548 11.75 18.5 11.75V13.25ZM17.5 14.1875C17.5 13.6952 17.9218 13.25 18.5 13.25V11.75C17.1452 11.75 16 12.8158 16 14.1875H17.5Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12.0027 20.5C7.2874 20.5 4.92973 20.5 3.46487 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38042 4.03806C2.6516 3.55227 3.05255 3.15142 3.53848 2.88032C4.22017 2.5 5.12865 2.5 6.94562 2.5C8.10969 2.5 8.69172 2.5 9.20122 2.69101C10.3645 3.12712 10.8442 4.18358 11.3691 5.23313L12.0027 6.5M7.00136 6.5H16.754C18.8613 6.5 19.9149 6.5 20.6718 7.00559C20.9995 7.22447 21.2808 7.50572 21.4997 7.83329C21.8937 8.42282 21.9808 9.19244 22 10.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
