export const CreativeMarketIcon = ({
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
        d="M10.7962 2.91338C11.4188 2.29077 12.2756 1.96039 13.1551 2.0038L18.7587 2.28039C20.3601 2.35944 21.6406 3.63993 21.7196 5.24131L21.9962 10.8449C22.0396 11.7244 21.7092 12.5811 21.0866 13.2037L13.5082 20.7822C11.8844 22.4059 9.25177 22.4059 7.62799 20.7822L3.21783 16.372C1.59406 14.7482 1.59406 12.1156 3.21783 10.4918L10.7962 2.91338Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M17.5002 6.5L17.4912 6.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12.982 12.2064L10.0004 14M10.0004 14L7.01869 15.7936M10.0004 14L10.0187 17.5M10.0004 14L9.98202 10.5M10.0004 14L13 15.7063M10.0004 14L7 12.2935"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
