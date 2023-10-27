export const CursorMagicSelection01Icon = ({
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
        d="M10.7927 20.5894C8.32173 20.7602 5.87348 9.23635 7.55462 7.55498C9.23576 5.8736 20.7604 8.32015 20.5896 10.7911C20.472 12.4094 17.733 13.0495 17.813 14.4877C17.8364 14.9089 18.3685 15.2929 19.4327 16.0607C20.1722 16.5942 20.9262 17.1123 21.653 17.6629C21.9432 17.8827 22.0577 18.2522 21.9725 18.6006C21.5634 20.2737 20.2811 21.5616 18.6011 21.9725C18.2528 22.0577 17.8833 21.9431 17.6636 21.653C17.1131 20.926 16.595 20.1719 16.0615 19.4323C15.2938 18.368 14.91 17.8358 14.4888 17.8124C13.0508 17.7324 12.4107 20.4718 10.7927 20.5894Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M9.02968 3.5V2M5 5L4 4M3.5 9.02975H2M5 13L4 14M14 4L13 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
