export const MouseLeftClick01Icon = ({
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
        d="M13.5 2L13.5 6M13.5 10L13.5 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 2C3.94531 3.13158 3.23544 4.50113 3 6"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M12 7.5C12 7.03406 12 6.80109 12.0761 6.61732C12.1776 6.37229 12.3723 6.17761 12.6173 6.07612C12.8011 6 13.0341 6 13.5 6C13.9659 6 14.1989 6 14.3827 6.07612C14.6277 6.17761 14.8224 6.37229 14.9239 6.61732C15 6.80109 15 7.03406 15 7.5V8.5C15 8.96594 15 9.19891 14.9239 9.38268C14.8224 9.62771 14.6277 9.82239 14.3827 9.92388C14.1989 10 13.9659 10 13.5 10C13.0341 10 12.8011 10 12.6173 9.92388C12.3723 9.82239 12.1776 9.62771 12.0761 9.38268C12 9.19891 12 8.96594 12 8.5V7.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6.24061 17.0888C6.43047 19.4803 8.32417 21.511 10.765 21.8118C11.6626 21.9223 12.5752 22 13.5 22C14.4247 22 15.3373 21.9223 16.2349 21.8118C18.6758 21.511 20.5694 19.4803 20.7593 17.0888C20.8909 15.4317 21 13.732 21 12C21 10.268 20.8909 8.56832 20.7593 6.91118C20.5694 4.51965 18.6758 2.48893 16.2349 2.1882C15.3373 2.07762 14.4247 2 13.5 2C12.5752 2 11.6626 2.07762 10.765 2.1882C8.32417 2.48893 6.43047 4.51965 6.24061 6.91118C6.10903 8.56832 6 10.268 6 12C6 13.732 6.10903 15.4317 6.24061 17.0888Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
