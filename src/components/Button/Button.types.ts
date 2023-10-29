import iconMap from '../../icons/_iconMap'
import {
    ButtonAligns,
    ButtonSizes,
    ButtonThemes,
    ButtonTypes,
    ButtonVariants,
    ButtonWidths
} from './Enums'



export interface CommonProps {
    onClick?: (
        event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => void
}

export interface IconProps {
    name: keyof typeof iconMap
    side?: 'left' | 'right'
    stroke?: number
    color?: string
}

export interface ButtonProps extends CommonProps {
    refProp?: React.LegacyRef<HTMLButtonElement>
    label?: string
    link?: string
    icon?: IconProps
    submit?: boolean
    size?: keyof typeof ButtonSizes
    width?: keyof typeof ButtonWidths
    align?: keyof typeof ButtonAligns
    customClass?: string
    tooltip?: string
    isLoading?: boolean
    isDisabled?: boolean
    theme?: keyof typeof ButtonThemes
    type?: keyof typeof ButtonTypes
    variant?: keyof typeof ButtonVariants
}