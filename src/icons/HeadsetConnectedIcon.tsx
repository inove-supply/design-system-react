export const HeadsetConnectedIcon = ({
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
        d="M18 13.8045C18 13.4588 18 13.286 18.0416 13.132C18.1626 12.6844 18.4814 12.5108 18.8009 12.3289C19.16 12.1244 19.3396 12.0222 19.5175 12.0042C19.7194 11.9838 19.9218 12.0382 20.0944 12.1593C20.3233 12.3198 20.4829 12.6249 20.6463 12.873C21.401 14.0188 21.7784 14.5918 21.9164 15.2236C22.0279 15.7334 22.0279 16.2666 21.9164 16.7764C21.715 17.6979 21.0788 18.4704 20.6078 19.1854C20.3669 19.5511 20.2465 19.734 20.0944 19.8407C19.9218 19.9618 19.7194 20.0162 19.5175 19.9958C19.3396 19.9778 19.16 19.8756 18.8009 19.6711C18.4814 19.4892 18.1626 19.3156 18.0416 18.868C18 18.714 18 18.5412 18 18.1955V13.8045Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M9 15.1148C9.86163 14.4098 10.8907 14 11.9959 14C13.1047 14 14.1367 14.4123 15 15.1215M13.6307 17.5C13.1386 17.1913 12.5834 17.0177 11.9959 17.0177C11.4114 17.0177 10.8588 17.1896 10.3686 17.4954"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
      <path
        d="M12 20H12.0064"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M6 13.8045C6 13.3693 5.99022 12.9782 5.70873 12.6722C5.60634 12.5609 5.4706 12.4836 5.19913 12.329C4.84001 12.1246 4.66045 12.0224 4.48253 12.0044C3.94873 11.9504 3.66154 12.4058 3.3537 12.8731C2.599 14.0189 2.22165 14.5918 2.08357 15.2236C1.97214 15.7334 1.97214 16.2666 2.08357 16.7764C2.28496 17.6979 2.92122 18.4702 3.39217 19.1852C3.68903 19.6359 3.97261 20.0472 4.48253 19.9956C4.66045 19.9776 4.84001 19.8754 5.19913 19.6709C5.4706 19.5164 5.60634 19.4391 5.70873 19.3278C5.99022 19.0218 6 18.6307 6 18.1954V13.8045Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M20 12V10.875C20 6.52576 16.4183 3 12 3C7.58172 3 4 6.52576 4 10.875V12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  )
}
