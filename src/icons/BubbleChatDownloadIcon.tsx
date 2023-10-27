export const BubbleChatDownloadIcon = ({
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
        d="M22 12C21.763 17.0821 17.3782 21.1334 12.005 21.1334C11.3554 21.1343 10.7076 21.0742 10.0695 20.9545C9.61016 20.8682 9.3805 20.8251 9.22017 20.8496C9.05983 20.8741 8.83262 20.9949 8.3782 21.2364C7.0927 21.9197 5.59376 22.161 4.1522 21.893C4.7001 21.2194 5.07429 20.4112 5.23941 19.5448C5.33946 19.0148 5.09156 18.5 4.72026 18.1231C3.03385 16.4115 2 14.1051 2 11.5667C2 6.28357 6.48004 2 12.005 2C12.5131 2 13.0123 2.03622 13.5 2.10611"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7.5C16.4915 8.0057 17.7998 10 18.5 10M21 7.5C20.5085 8.0057 19.2002 10 18.5 10M18.5 10V2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 12H12.0045M8 12H8.00897"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
