export const BubbleChatDownload1Icon = ({
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
        d="M14.006 2.19142C13.3595 2.0659 12.6903 2 12.005 2C6.48004 2 2 6.28357 2 11.5667C2 14.1051 3.03385 16.4115 4.72026 18.1231C5.09156 18.5 5.33946 19.0148 5.23941 19.5448C5.07429 20.4112 4.7001 21.2194 4.1522 21.893C5.59376 22.161 7.0927 21.9197 8.3782 21.2364C8.83262 20.9949 9.05983 20.8741 9.22017 20.8496C9.3805 20.8251 9.61016 20.8682 10.0695 20.9545C10.7076 21.0742 11.3554 21.1343 12.005 21.1334C17.3782 21.1334 21.763 17.0821 22 12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7.5C16.4915 8.0057 17.7998 10 18.5 10M21 7.5C20.5085 8.0057 19.2002 10 18.5 10M18.5 10V2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.9955 12H12.0045M8 12H8.00897" strokeWidth={strokeWidth} />
    </svg>
  )
}
