import React, { createRef } from 'react'

import {
  classSize,
  classTheme,
  classWidth,
  classVariant,
  classAlign
} from './button-styles'

import { SpinnerIcon } from '../../icons/SpinnerIcon'
import iconMap from 'icons/_iconMap'
import {
  ButtonAligns,
  ButtonSizes,
  ButtonThemes,
  ButtonTypes,
  ButtonVariants,
  ButtonWidths
} from './enums'
import Tooltip from 'components/Tooltip'

interface CommonProps {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void
}

interface IconProps {
  name: string
  side?: 'left' | 'right'
  stroke?: number
  color?: string
}

interface ButtonProps extends CommonProps {
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

const Button = ({
  refProp,
  label,
  link,
  icon,
  size = 'md',
  width = 'auto',
  align = 'default',
  customClass = '',
  tooltip,
  isLoading,
  isDisabled,
  theme = 'default',
  type,
  variant = 'primary',
  ...events
}: ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const renderIcon = (marginSide = 'me-2') => {
    if (isLoading) {
      return (
        <span className={marginSide}>
          <SpinnerIcon />
        </span>
      )
    }

    if (!icon) return null

    const MappedIcon = iconMap[icon.name]

    return (
      <span className={marginSide}>
        <MappedIcon
          color={icon.color || 'white'}
          strokeWidth={icon.stroke || 2}
          size={24}
        />
      </span>
    )
  }

  const buttonRef = refProp ?? createRef<HTMLButtonElement>()

  const classDefault = `button flex items-center justify-center font-medium h-fit ${
    isDisabled && 'cursor-not-allowed opacity-50'
  }`

  const buttonClassName = `${classDefault} ${classWidth[width]} ${classAlign[align]} ${classVariant[theme][variant]} ${classTheme[theme]} ${classSize[size]} ${customClass}`

  const rightIconsClassName = label ? 'ms-2 right-icon' : 'right-icon'
  const leftIconsClassName = label ? 'me-2 left-icon' : 'left-icon'

  const contentButton = () => {
    return (
      <>
        {(!icon?.side || icon.side === 'left') &&
          renderIcon(leftIconsClassName)}
        <span>{label}</span>
        {icon?.side === 'right' && renderIcon(rightIconsClassName)}
      </>
    )
  }

  if (link) {
    if (tooltip) {
      return (
        <Tooltip text={tooltip}>
          <a
            href={link}
            className={buttonClassName}
            ref={buttonRef as React.LegacyRef<HTMLAnchorElement>}
            {...events}
          >
            {contentButton()}
          </a>
        </Tooltip>
      )
    } else {
      return (
        <a
          href={link}
          className={buttonClassName}
          ref={buttonRef as React.LegacyRef<HTMLAnchorElement>}
          {...events}
        >
          {contentButton()}
        </a>
      )
    }
  }

  if (tooltip) {
    return (
      <Tooltip text={tooltip}>
        <button className={buttonClassName} ref={buttonRef} {...events}>
          {contentButton()}
        </button>
      </Tooltip>
    )
  } else {
    return (
      <button
        type={type}
        className={buttonClassName}
        {...events}
        disabled={isDisabled}
        ref={buttonRef}
      >
        {contentButton()}
      </button>
    )
  }
}

export default Button
