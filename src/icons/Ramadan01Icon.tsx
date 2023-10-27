export const Ramadan01Icon = ({
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
        d="M18.1911 3.07767L18.895 4.49715C18.991 4.69475 19.2469 4.88428 19.4629 4.92057L20.7388 5.1343C21.5547 5.27141 21.7467 5.86824 21.1587 6.457L20.1668 7.45709C19.9989 7.62646 19.9069 7.9531 19.9589 8.18699L20.2428 9.425C20.4668 10.4049 19.9509 10.784 19.091 10.2718L17.8951 9.55808C17.6791 9.42903 17.3232 9.42903 17.1032 9.55808L15.9073 10.2718C15.0514 10.784 14.5315 10.4009 14.7554 9.425L15.0394 8.18699C15.0914 7.9531 14.9994 7.62646 14.8314 7.45709L13.8395 6.457C13.2556 5.86824 13.4436 5.27141 14.2595 5.1343L15.5353 4.92057C15.7473 4.88428 16.0033 4.69475 16.0993 4.49715L16.8032 3.07767C17.1872 2.30744 17.8111 2.30744 18.1911 3.07767Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 11.8049C2.5 17.1594 6.84065 21.5 12.1951 21.5C16.601 21.5 20.3204 18.5611 21.5 14.5367C20.0791 15.5691 18.3306 16.1779 16.44 16.1779C11.6804 16.1779 7.82208 12.3196 7.82208 7.56005C7.82208 5.66937 8.43094 3.9209 9.46326 2.5C5.4389 3.67959 2.5 7.39904 2.5 11.8049Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
    </svg>
  )
}
