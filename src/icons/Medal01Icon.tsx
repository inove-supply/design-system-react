export const Medal01Icon = ({
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
        d="M8 2V10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M16 2V10"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M2 5.92586C2 4.86687 2 4.33738 2.15278 3.90965C2.45111 3.07449 3.15617 2.41924 4.05482 2.14199C4.51506 2 5.08481 2 6.2243 2H17.7757C18.9152 2 19.4849 2 19.9452 2.14199C20.8438 2.41924 21.5489 3.07449 21.8472 3.90965C22 4.33738 22 4.86687 22 5.92586C22 6.37737 22 6.60312 21.9495 6.80803C21.8513 7.20614 21.6148 7.56313 21.2765 7.82381C21.1023 7.95798 20.8854 8.05961 20.4516 8.26288L13.8007 11.3791C12.9174 11.793 12.4757 12 12 12C11.5243 12 11.0827 11.793 10.1993 11.3791L3.54838 8.26288C3.11456 8.05961 2.89765 7.95798 2.72352 7.82381C2.38519 7.56313 2.14867 7.20614 2.05052 6.80803C2 6.60312 2 6.37737 2 5.92586Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M10.5292 13.6376C11.2478 13.2125 11.6071 13 12 13C12.3929 13 12.7522 13.2125 13.4708 13.6376L14.4708 14.2292C15.2167 14.6704 15.5896 14.891 15.7948 15.26C16 15.6289 16 16.0789 16 16.979V18.021C16 18.9211 16 19.3711 15.7948 19.74C15.5896 20.109 15.2167 20.3296 14.4708 20.7708L13.4708 21.3624C12.7522 21.7875 12.3929 22 12 22C11.6071 22 11.2478 21.7875 10.5292 21.3624L9.52922 20.7708C8.78332 20.3296 8.41037 20.109 8.20519 19.74C8 19.3711 8 18.9211 8 18.021V16.979C8 16.0789 8 15.6289 8.20519 15.26C8.41037 14.891 8.78332 14.6704 9.52922 14.2292L10.5292 13.6376Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
