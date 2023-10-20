export const FileSyncIcon = ({
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
        d="M20 12.1822V7.81855C20 6.12531 20 5.27869 19.732 4.60251C19.3012 3.51547 18.3902 2.65802 17.2352 2.25257C16.5168 2.00037 15.6173 2.00037 13.8182 2.00037C10.6698 2.00037 9.09563 2.00037 7.83836 2.44172C5.81714 3.15125 4.22281 4.65179 3.46894 6.55412C3 7.73743 3 9.21901 3 12.1822V14.7276C3 17.797 3 19.3317 3.8477 20.3975C4.09058 20.7028 4.37862 20.9739 4.70307 21.2025C5.74797 21.9387 7.21706 21.9956 10 22"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17L13.0228 17.5944C13.5374 15.7277 15.5114 14.6199 17.4318 15.1201C18.4149 15.3761 19.1934 16.0039 19.6501 16.806M21 20L19.9774 19.4056C19.4628 21.2723 17.4888 22.3801 15.5684 21.8799C14.6081 21.6298 13.8431 21.0251 13.3824 20.2496"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
