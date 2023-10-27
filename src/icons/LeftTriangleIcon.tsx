export const LeftTriangleIcon = ({
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
        d="M11 20V22"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8V6.48477C20 3.77749 20 2.42383 19.2091 2.07276C18.4182 1.72168 17.4766 2.65735 15.5934 4.5287L4.71649 15.3371C2.7279 17.3131 1.73361 18.3012 2.06169 19.1506C2.38977 20 3.76568 20 6.51751 20H8M11 20H17.3944C18.6227 20 19.2368 20 19.6184 19.6036C20 19.2072 20 18.5692 20 17.2932V13C20 12.0572 20 11.5858 20.2929 11.2929C20.5858 11 21.0572 11 22 11"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15H19C17.1144 15 16.1716 15 15.5858 15.5858C15 16.1716 15 17.1144 15 19V20"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
