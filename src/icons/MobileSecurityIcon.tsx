export const MobileSecurityIcon = ({
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
        d="M12 2C8.70017 2 7.05025 2 6.02513 3.02513C5 4.05025 5 5.70017 5 9V15C5 18.2998 5 19.9497 6.02513 20.9749C7.05025 22 8.70017 22 12 22C15.2998 22 16.9497 22 17.9749 20.9749C19 19.9497 19 18.2998 19 15V14"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M15.0803 10.8573L14.7761 11.5428L14.7761 11.5428L15.0803 10.8573ZM14.1332 9.84253L13.4337 10.113L13.4337 10.113L14.1332 9.84253ZM20.8668 9.84253L21.5663 10.113L21.5663 10.113L20.8668 9.84253ZM19.9197 10.8573L20.2239 11.5428L20.2239 11.5428L19.9197 10.8573ZM19.9197 5.51773L20.2239 4.8322L19.9197 5.51773ZM20.8668 6.53247L21.5663 6.26203L21.5663 6.26203L20.8668 6.53247ZM15.0803 5.51773L14.7761 4.8322H14.7761L15.0803 5.51773ZM14.1332 6.53247L13.4337 6.26203L14.1332 6.53247ZM15 5.375C15 5.78921 15.3358 6.125 15.75 6.125C16.1642 6.125 16.5 5.78921 16.5 5.375H15ZM18.5 5.375C18.5 5.78921 18.8358 6.125 19.25 6.125C19.6642 6.125 20 5.78921 20 5.375L18.5 5.375ZM16.625 6.125L18.375 6.125V4.625H16.625V6.125ZM18.375 10.25H16.625V11.75H18.375V10.25ZM16.625 10.25C16.2063 10.25 15.9325 10.2495 15.7222 10.2342C15.5196 10.2193 15.4338 10.1936 15.3845 10.1718L14.7761 11.5428C15.0484 11.6637 15.3272 11.7093 15.6128 11.7302C15.8905 11.7505 16.2283 11.75 16.625 11.75V10.25ZM13.25 8.1875C13.25 8.61474 13.2496 8.97023 13.2682 9.26108C13.2871 9.55774 13.3278 9.83905 13.4337 10.113L14.8328 9.57209C14.8054 9.50144 14.7795 9.39206 14.7651 9.16575C14.7504 8.93364 14.75 8.6339 14.75 8.1875H13.25ZM15.3845 10.1718C15.1471 10.0664 14.9427 9.85657 14.8328 9.57209L13.4337 10.113C13.6789 10.7474 14.1559 11.2676 14.7761 11.5428L15.3845 10.1718ZM20.25 8.1875C20.25 8.6339 20.2496 8.93364 20.2349 9.16575C20.2205 9.39206 20.1946 9.50144 20.1672 9.57209L21.5663 10.113C21.6722 9.83905 21.7129 9.55774 21.7318 9.26108C21.7504 8.97023 21.75 8.61474 21.75 8.1875H20.25ZM18.375 11.75C18.7717 11.75 19.1095 11.7505 19.3872 11.7302C19.6728 11.7093 19.9516 11.6637 20.2239 11.5428L19.6155 10.1718C19.5662 10.1936 19.4804 10.2193 19.2778 10.2342C19.0675 10.2495 18.7937 10.25 18.375 10.25V11.75ZM20.1672 9.57209C20.0573 9.85657 19.8529 10.0664 19.6155 10.1718L20.2239 11.5428C20.8441 11.2676 21.3211 10.7474 21.5663 10.113L20.1672 9.57209ZM18.375 6.125C18.7937 6.125 19.0675 6.12547 19.2778 6.14084C19.4804 6.15565 19.5662 6.18138 19.6155 6.20325L20.2239 4.8322C19.9516 4.71134 19.6728 4.66571 19.3872 4.64484C19.1095 4.62453 18.7717 4.625 18.375 4.625V6.125ZM21.75 8.1875C21.75 7.76026 21.7504 7.40477 21.7318 7.11392C21.7129 6.81726 21.6722 6.53595 21.5663 6.26203L20.1672 6.80291C20.1946 6.87356 20.2205 6.98294 20.2349 7.20925C20.2496 7.44136 20.25 7.7411 20.25 8.1875H21.75ZM19.6155 6.20325C19.8529 6.30862 20.0573 6.51843 20.1672 6.80291L21.5663 6.26203C21.3211 5.62765 20.8441 5.10744 20.2239 4.8322L19.6155 6.20325ZM16.625 4.625C16.2283 4.625 15.8905 4.62453 15.6128 4.64484C15.3272 4.66571 15.0484 4.71134 14.7761 4.8322L15.3845 6.20325C15.4338 6.18138 15.5196 6.15565 15.7222 6.14084C15.9325 6.12547 16.2063 6.125 16.625 6.125V4.625ZM14.75 8.1875C14.75 7.7411 14.7504 7.44136 14.7651 7.20925C14.7795 6.98294 14.8054 6.87356 14.8328 6.80291L13.4337 6.26203C13.3278 6.53595 13.2871 6.81726 13.2682 7.11392C13.2496 7.40477 13.25 7.76026 13.25 8.1875H14.75ZM14.7761 4.8322C14.1559 5.10744 13.6789 5.62765 13.4337 6.26203L14.8328 6.80291C14.9427 6.51843 15.1471 6.30862 15.3845 6.20325L14.7761 4.8322ZM16.5 5.375V3.6875H15V5.375H16.5ZM18.5 3.6875V5.375L20 5.375V3.6875L18.5 3.6875ZM17.5 2.75C18.0782 2.75 18.5 3.19521 18.5 3.6875L20 3.6875C20 2.31583 18.8548 1.25 17.5 1.25V2.75ZM16.5 3.6875C16.5 3.19521 16.9218 2.75 17.5 2.75V1.25C16.1452 1.25 15 2.31583 15 3.6875H16.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M11 19H13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
