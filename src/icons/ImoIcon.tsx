export const ImoIcon = ({
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2 22L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M7.00859 9L7 9M7.00112 11V15M8.91304 15V12.25C8.91304 11.5596 9.44836 11 10.1087 11C10.769 11 11.3043 11.5596 11.3043 12.25M11.3043 12.25V15M11.3043 12.25C11.3043 11.5596 11.8397 11 12.5 11C13.1603 11 13.6957 11.5596 13.6957 12.25V15M15.6087 12.25V13.75C15.6087 14.4404 16.144 15 16.8043 15C17.4647 15 18 14.4404 18 13.75V12.25C18 11.5596 17.4647 11 16.8043 11C16.144 11 15.6087 11.5596 15.6087 12.25Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
