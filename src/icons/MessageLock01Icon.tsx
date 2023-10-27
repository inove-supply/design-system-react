export const MessageLock01Icon = ({
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
        d="M22 13.4909C21.7253 17.7332 18.3866 21.1125 14.1951 21.3905C12.7652 21.4854 11.2722 21.4852 9.84518 21.3905C9.35376 21.3579 8.81812 21.2409 8.3568 21.0513C7.84352 20.8403 7.58684 20.7348 7.45641 20.7508C7.32598 20.7668 7.13674 20.9061 6.75825 21.1846C6.09091 21.6757 5.25021 22.0285 4.00346 21.9982C3.37302 21.9829 3.0578 21.9752 2.91669 21.7351C2.77557 21.495 2.95132 21.1626 3.30283 20.4978C3.79035 19.5758 4.09923 18.5203 3.63119 17.6746C2.82509 16.4666 2.14038 15.036 2.04032 13.4909C1.98656 12.6607 1.98656 11.8009 2.04032 10.9707C2.31504 6.72838 5.65374 3.34913 9.84518 3.07107C10.7223 3.01289 11.6242 2.99039 12.5212 3.00372"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0803 10.8573L15.7761 11.5428L15.7761 11.5428L16.0803 10.8573ZM15.1332 9.84253L14.4337 10.113H14.4337L15.1332 9.84253ZM21.8668 9.84253L22.5663 10.113L22.5663 10.113L21.8668 9.84253ZM20.9197 10.8573L21.2239 11.5428L21.2239 11.5428L20.9197 10.8573ZM20.9197 5.51773L21.2239 4.8322L20.9197 5.51773ZM21.8668 6.53247L22.5663 6.26203L22.5663 6.26203L21.8668 6.53247ZM16.0803 5.51773L15.7761 4.8322L16.0803 5.51773ZM15.1332 6.53247L14.4337 6.26203L15.1332 6.53247ZM16 5.375C16 5.78921 16.3358 6.125 16.75 6.125C17.1642 6.125 17.5 5.78921 17.5 5.375H16ZM19.5 5.375C19.5 5.78921 19.8358 6.125 20.25 6.125C20.6642 6.125 21 5.78921 21 5.375L19.5 5.375ZM17.625 6.125L19.375 6.125V4.625H17.625V6.125ZM19.375 10.25H17.625V11.75H19.375V10.25ZM17.625 10.25C17.2063 10.25 16.9325 10.2495 16.7222 10.2342C16.5196 10.2193 16.4338 10.1936 16.3845 10.1718L15.7761 11.5428C16.0484 11.6637 16.3272 11.7093 16.6128 11.7302C16.8905 11.7505 17.2283 11.75 17.625 11.75V10.25ZM14.25 8.1875C14.25 8.61474 14.2496 8.97023 14.2682 9.26108C14.2871 9.55774 14.3278 9.83905 14.4337 10.113L15.8328 9.57209C15.8054 9.50144 15.7795 9.39206 15.7651 9.16575C15.7504 8.93364 15.75 8.6339 15.75 8.1875H14.25ZM16.3845 10.1718C16.1471 10.0664 15.9427 9.85657 15.8328 9.57209L14.4337 10.113C14.6789 10.7474 15.1559 11.2676 15.7761 11.5428L16.3845 10.1718ZM21.25 8.1875C21.25 8.6339 21.2496 8.93364 21.2349 9.16575C21.2205 9.39206 21.1946 9.50144 21.1672 9.57209L22.5663 10.113C22.6722 9.83905 22.7129 9.55774 22.7318 9.26108C22.7504 8.97023 22.75 8.61474 22.75 8.1875H21.25ZM19.375 11.75C19.7717 11.75 20.1095 11.7505 20.3872 11.7302C20.6728 11.7093 20.9516 11.6637 21.2239 11.5428L20.6155 10.1718C20.5662 10.1936 20.4804 10.2193 20.2778 10.2342C20.0675 10.2495 19.7937 10.25 19.375 10.25V11.75ZM21.1672 9.57209C21.0573 9.85657 20.8529 10.0664 20.6155 10.1718L21.2239 11.5428C21.8441 11.2676 22.3211 10.7474 22.5663 10.113L21.1672 9.57209ZM19.375 6.125C19.7937 6.125 20.0675 6.12547 20.2778 6.14084C20.4804 6.15565 20.5662 6.18138 20.6155 6.20325L21.2239 4.8322C20.9516 4.71134 20.6728 4.66571 20.3872 4.64484C20.1095 4.62453 19.7717 4.625 19.375 4.625V6.125ZM22.75 8.1875C22.75 7.76026 22.7504 7.40477 22.7318 7.11392C22.7129 6.81726 22.6722 6.53595 22.5663 6.26203L21.1672 6.80291C21.1946 6.87356 21.2205 6.98294 21.2349 7.20925C21.2496 7.44136 21.25 7.7411 21.25 8.1875H22.75ZM20.6155 6.20325C20.8529 6.30862 21.0573 6.51843 21.1672 6.80291L22.5663 6.26203C22.3211 5.62765 21.8441 5.10744 21.2239 4.8322L20.6155 6.20325ZM17.625 4.625C17.2283 4.625 16.8905 4.62453 16.6128 4.64484C16.3272 4.66571 16.0484 4.71134 15.7761 4.8322L16.3845 6.20325C16.4338 6.18138 16.5196 6.15565 16.7222 6.14084C16.9325 6.12547 17.2063 6.125 17.625 6.125V4.625ZM15.75 8.1875C15.75 7.7411 15.7504 7.44136 15.7651 7.20925C15.7795 6.98294 15.8054 6.87356 15.8328 6.80291L14.4337 6.26203C14.3278 6.53595 14.2871 6.81726 14.2682 7.11392C14.2496 7.40477 14.25 7.76026 14.25 8.1875H15.75ZM15.7761 4.8322C15.1559 5.10744 14.6789 5.62765 14.4337 6.26203L15.8328 6.80291C15.9427 6.51843 16.1471 6.30862 16.3845 6.20325L15.7761 4.8322ZM17.5 5.375V3.6875H16V5.375H17.5ZM19.5 3.6875V5.375L21 5.375V3.6875L19.5 3.6875ZM18.5 2.75C19.0782 2.75 19.5 3.19521 19.5 3.6875L21 3.6875C21 2.31583 19.8548 1.25 18.5 1.25V2.75ZM17.5 3.6875C17.5 3.19521 17.9218 2.75 18.5 2.75V1.25C17.1452 1.25 16 2.31583 16 3.6875H17.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M8.5 15H15.5M8.5 10H12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
