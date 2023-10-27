export const BloodTypeIcon = ({
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
        d="M8.32918 14.6646C8.14394 15.0351 8.29411 15.4856 8.66459 15.6708C9.03507 15.8561 9.48558 15.7059 9.67082 15.3354L8.32918 14.6646ZM12 9L12.6708 8.66459C12.5438 8.4105 12.2841 8.25 12 8.25C11.7159 8.25 11.4562 8.4105 11.3292 8.66459L12 9ZM14.3292 15.3354C14.5144 15.7059 14.9649 15.8561 15.3354 15.6708C15.7059 15.4856 15.8561 15.0351 15.6708 14.6646L14.3292 15.3354ZM9.85714 12.5357C9.44293 12.5357 9.10714 12.8715 9.10714 13.2857C9.10714 13.6999 9.44293 14.0357 9.85714 14.0357V12.5357ZM14.1429 14.0357C14.5571 14.0357 14.8929 13.6999 14.8929 13.2857C14.8929 12.8715 14.5571 12.5357 14.1429 12.5357V14.0357ZM9.67082 15.3354L12.6708 9.33541L11.3292 8.66459L8.32918 14.6646L9.67082 15.3354ZM11.3292 9.33541L14.3292 15.3354L15.6708 14.6646L12.6708 8.66459L11.3292 9.33541ZM9.85714 14.0357H14.1429V12.5357H9.85714V14.0357Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
