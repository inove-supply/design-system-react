import iconMap from 'icons/_iconMap'
import Tooltip from 'components/Tooltip'

export const Icons = ({
  size,
  color,
  strokeWidth
}: {
  size: number
  color: string
  strokeWidth: number
}) => {
  const icons = Object.keys(iconMap)

  return (
    <div className="storybook-page grid grid-cols-10 gap-8">
      {icons.map((icon) => {
        const IconToRender = iconMap[icon]

        return (
          <Tooltip copyToClipboard text={icon} key={icon}>
            <div className="rounded-xl bg-gray-800 p-4">
              <IconToRender
                color={color}
                size={size}
                strokeWidth={strokeWidth}
              />
            </div>
          </Tooltip>
        )
      })}
    </div>
  )
}
