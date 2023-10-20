export const CallLockedIcon = ({
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
        d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M15.0803 11.8573L14.7761 12.5428L14.7761 12.5428L15.0803 11.8573ZM14.1332 10.8425L13.4337 11.113H13.4337L14.1332 10.8425ZM20.8668 10.8425L21.5663 11.113L21.5663 11.113L20.8668 10.8425ZM19.9197 11.8573L20.2239 12.5428L20.2239 12.5428L19.9197 11.8573ZM19.9197 6.51773L20.2239 5.8322L19.9197 6.51773ZM20.8668 7.53247L21.5663 7.26203L21.5663 7.26203L20.8668 7.53247ZM15.0803 6.51773L14.7761 5.8322L15.0803 6.51773ZM14.1332 7.53247L13.4337 7.26203L14.1332 7.53247ZM15 6.375C15 6.78921 15.3358 7.125 15.75 7.125C16.1642 7.125 16.5 6.78921 16.5 6.375H15ZM18.5 6.375C18.5 6.78921 18.8358 7.125 19.25 7.125C19.6642 7.125 20 6.78921 20 6.375L18.5 6.375ZM16.625 7.125L18.375 7.125V5.625H16.625V7.125ZM18.375 11.25H16.625V12.75H18.375V11.25ZM16.625 11.25C16.2063 11.25 15.9325 11.2495 15.7222 11.2342C15.5196 11.2193 15.4338 11.1936 15.3845 11.1718L14.7761 12.5428C15.0484 12.6637 15.3272 12.7093 15.6128 12.7302C15.8905 12.7505 16.2283 12.75 16.625 12.75V11.25ZM13.25 9.1875C13.25 9.61474 13.2496 9.97023 13.2682 10.2611C13.2871 10.5577 13.3278 10.839 13.4337 11.113L14.8328 10.5721C14.8054 10.5014 14.7795 10.3921 14.7651 10.1658C14.7504 9.93364 14.75 9.6339 14.75 9.1875H13.25ZM15.3845 11.1718C15.1471 11.0664 14.9427 10.8566 14.8328 10.5721L13.4337 11.113C13.6789 11.7474 14.1559 12.2676 14.7761 12.5428L15.3845 11.1718ZM20.25 9.1875C20.25 9.6339 20.2496 9.93364 20.2349 10.1658C20.2205 10.3921 20.1946 10.5014 20.1672 10.5721L21.5663 11.113C21.6722 10.839 21.7129 10.5577 21.7318 10.2611C21.7504 9.97023 21.75 9.61474 21.75 9.1875H20.25ZM18.375 12.75C18.7717 12.75 19.1095 12.7505 19.3872 12.7302C19.6728 12.7093 19.9516 12.6637 20.2239 12.5428L19.6155 11.1718C19.5662 11.1936 19.4804 11.2193 19.2778 11.2342C19.0675 11.2495 18.7937 11.25 18.375 11.25V12.75ZM20.1672 10.5721C20.0573 10.8566 19.8529 11.0664 19.6155 11.1718L20.2239 12.5428C20.8441 12.2676 21.3211 11.7474 21.5663 11.113L20.1672 10.5721ZM18.375 7.125C18.7937 7.125 19.0675 7.12547 19.2778 7.14084C19.4804 7.15565 19.5662 7.18138 19.6155 7.20325L20.2239 5.8322C19.9516 5.71134 19.6728 5.66571 19.3872 5.64484C19.1095 5.62453 18.7717 5.625 18.375 5.625V7.125ZM21.75 9.1875C21.75 8.76026 21.7504 8.40477 21.7318 8.11392C21.7129 7.81726 21.6722 7.53595 21.5663 7.26203L20.1672 7.80291C20.1946 7.87356 20.2205 7.98294 20.2349 8.20925C20.2496 8.44136 20.25 8.7411 20.25 9.1875H21.75ZM19.6155 7.20325C19.8529 7.30862 20.0573 7.51843 20.1672 7.80291L21.5663 7.26203C21.3211 6.62765 20.8441 6.10744 20.2239 5.8322L19.6155 7.20325ZM16.625 5.625C16.2283 5.625 15.8905 5.62453 15.6128 5.64484C15.3272 5.66571 15.0484 5.71134 14.7761 5.8322L15.3845 7.20325C15.4338 7.18138 15.5196 7.15565 15.7222 7.14084C15.9325 7.12547 16.2063 7.125 16.625 7.125V5.625ZM14.75 9.1875C14.75 8.7411 14.7504 8.44136 14.7651 8.20925C14.7795 7.98294 14.8054 7.87356 14.8328 7.80291L13.4337 7.26203C13.3278 7.53595 13.2871 7.81726 13.2682 8.11392C13.2496 8.40477 13.25 8.76026 13.25 9.1875H14.75ZM14.7761 5.8322C14.1559 6.10744 13.6789 6.62765 13.4337 7.26203L14.8328 7.80291C14.9427 7.51843 15.1471 7.30862 15.3845 7.20325L14.7761 5.8322ZM16.5 6.375V4.6875H15V6.375H16.5ZM18.5 4.6875V6.375L20 6.375V4.6875L18.5 4.6875ZM17.5 3.75C18.0782 3.75 18.5 4.19521 18.5 4.6875L20 4.6875C20 3.31583 18.8548 2.25 17.5 2.25V3.75ZM16.5 4.6875C16.5 4.19521 16.9218 3.75 17.5 3.75V2.25C16.1452 2.25 15 3.31583 15 4.6875H16.5Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
