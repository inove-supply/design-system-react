import { SpinnerIcon } from './SpinnerIcon'

type IconProps = {
  [key: string]: ({
    color,
    strokeWidth,
    size
  }: {
    color?: string
    strokeWidth?: number
    size?: number
  }) => JSX.Element
}

const iconMap: IconProps = {
  SpinnerIcon
}

export default iconMap
