export const DocumentAttachmentIcon = ({
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
        d="M21 11V10C21 6.22876 21 4.34315 19.7595 3.17157C18.519 2 16.5225 2 12.5294 2L11.4706 2C7.47752 2 5.48098 2 4.24049 3.17157C3 4.34315 3 6.22876 3 10L3 14C3 17.7712 3 19.6569 4.24049 20.8284C5.48098 22 7.47751 22 11.4706 22H12"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path d="M8 7H16" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M8 12H13" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M21 20.6471L21 17C21 15.5706 19.6569 14 18 14C16.3431 14 15 15.5706 15 17L15 20.5C15 21.2797 15.7326 22 16.6364 22C17.5401 22 18.2727 21.2797 18.2727 20.5L18.2727 17.7647"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
