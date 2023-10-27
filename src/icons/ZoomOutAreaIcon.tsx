export const ZoomOutAreaIcon = ({
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
        d="M19.075 19.075L22 22M12.9 14.85H16.8M20.7 14.85C20.7 11.6191 18.0809 9 14.85 9C11.6191 9 9 11.6191 9 14.85C9 18.0809 11.6191 20.7 14.85 20.7C18.0809 20.7 20.7 18.0809 20.7 14.85Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6C2.1305 4.6645 2.4262 3.7663 3.09625 3.09625C3.7663 2.4262 4.6645 2.1305 6 2M6 22C4.6645 21.8695 3.7663 21.5738 3.09625 20.9037C2.4262 20.2337 2.1305 19.3355 2 18M22 6C21.8695 4.6645 21.5738 3.7663 20.9037 3.09625C20.2337 2.4262 19.3355 2.1305 18 2M2 10L2 14M14 2L10 2"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
      />
    </svg>
  )
}
