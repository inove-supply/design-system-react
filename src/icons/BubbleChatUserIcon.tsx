export const BubbleChatUserIcon = ({
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
        d="M13 2.04725C12.6711 2.016 12.3375 2 12 2C6.47778 2 2 6.28357 2 11.5667C2 14.1051 3.03333 16.4115 4.71889 18.1231C5.09 18.5 5.33778 19.0148 5.23778 19.5448C5.07275 20.4112 4.69874 21.2194 4.15111 21.893C5.59195 22.161 7.09014 21.9197 8.37499 21.2364C8.82918 20.9949 9.05627 20.8741 9.21653 20.8496C9.37678 20.8251 9.60633 20.8682 10.0654 20.9545C10.7032 21.0742 11.3507 21.1343 12 21.1334C16.83 21.1334 21.0653 17.8565 22 13.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3913 8.06671C15.8411 8.4458 14.3985 9.21985 15.2771 10.1885C15.7063 10.6616 16.1844 11 16.7853 11H20.2147C20.8156 11 21.2937 10.6616 21.7229 10.1885C22.6015 9.21985 21.1589 8.4458 20.6087 8.06671C19.3185 7.17776 17.6815 7.17776 16.3913 8.06671Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M20.25 3.8C20.25 4.79411 19.4665 5.6 18.5 5.6C17.5335 5.6 16.75 4.79411 16.75 3.8C16.75 2.80589 17.5335 2 18.5 2C19.4665 2 20.25 2.80589 20.25 3.8Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M11.9955 12H12.0045M8 12H8.00897"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
