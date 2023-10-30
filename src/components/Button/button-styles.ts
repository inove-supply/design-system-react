export const classWidth = {
  full: 'w-full',
  fit: 'w-fit',
  auto: 'w-auto'
}

export const classAlign = {
  default: 'self-auto',
  center: 'self-center',
  start: 'self-start',
  end: 'self-end'
}

export const classTheme = {
  text: 'p-0',
  default: 'p-3 rounded-lg',
  outline: 'p-3 border-solid border-[1px] rounded-lg bg-transparent'
}

export const classVariant = {
  text: {
    primary: 'text-blue-500',
    secondary: 'text-yellow-500',
    success: 'text-green-500',
    danger: 'text-red-500',
    warning: 'text-orange-500',
    info: 'text-gray-300',
    light: 'text-gray-100',
    dark: 'text-gray-900',
    ghost: ''
  },
  default: {
    primary: 'text-white bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-yellow-500 hover:bg-yellow-600',
    success: 'bg-green-500 hover:bg-green-600',
    danger: 'text-white bg-red-500 hover:bg-red-600',
    warning: 'text-white bg-orange-500 hover:bg-orange-600',
    info: 'bg-gray-300 hover:bg-gray-400',
    light: 'bg-gray-100 hover:bg-gray-200 ',
    dark: 'text-white bg-gray-900 hover:bg-gray-700',
    ghost: 'bg-transparent'
  },
  outline: {
    primary: 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    secondary:
      'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900',
    success:
      'border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
    danger: 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
    warning:
      'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
    info: 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    light:
      'border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-600',
    dark: 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    ghost: 'border-transparent'
  }
}

export const classSize = {
  sm: 'py-2 px-2', //TODO: Add font size class
  md: 'font-medium text-base py-3 px-4',
  lg: 'py-4 px-4',
  xl: 'py-5 px-5'
}
