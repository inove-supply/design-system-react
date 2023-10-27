export const AidsIcon = ({
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
        d="M12 2C9.92705 2 6.88247 2.5672 6.29 4.89186C5.7657 6.94903 5.88763 8.4198 7.1936 10.1667L14.8875 20.4583C15.6615 21.4936 16.0486 22.0113 16.5727 21.9998C17.0969 21.9883 17.4599 21.4542 18.186 20.3859L18.7147 19.608C19.6223 18.2725 20.0762 17.6047 19.9895 16.883C19.9029 16.1613 19.3034 15.6152 18.1043 14.523L6.79911 4"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 2C14.0729 2 17.1175 2.5672 17.71 4.89186C18.2343 6.94903 18.1124 8.4198 16.8064 10.1667L15.4358 12M17.2009 4L12 8.84105M12 16.5959L9.11248 20.4583C8.33845 21.4936 7.95143 22.0113 7.42726 21.9998C6.90309 21.9883 6.54007 21.4542 5.81402 20.3859L5.28533 19.608C4.37768 18.2725 3.92383 17.6047 4.01046 16.883C4.09709 16.1613 4.69663 15.6152 5.89571 14.523L8.60624 12"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
