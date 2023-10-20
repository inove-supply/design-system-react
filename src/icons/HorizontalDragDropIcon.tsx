export const HorizontalDragDropIcon = ({
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
        d="M18.001 8V8.00635M12.001 8V8.00635M6.00098 8L6.00098 8.00635M18.001 15.9937V16M12.001 15.9937V16M6.00098 15.9937L6.00098 16"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
