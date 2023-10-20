export const DragRight02Icon = ({
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
        d="M7.03345 13.6528L9 15.3722V6.50065C9 5.67186 9.67186 5 10.5006 5C11.3289 5 12.0006 5.67107 12.0013 6.49935L12.0045 11.263L14.6409 11.6903C16.3426 11.9492 17.1935 12.0786 17.7928 12.4427C18.7828 13.0441 19.5 14 19.5 15.2657C19.5 16.1841 19.2762 16.8002 18.732 18.4556C18.3867 19.5059 18.2141 20.0311 17.9326 20.4469C17.4691 21.1313 16.7853 21.6311 15.9984 21.8605C15.5204 21.9999 14.9745 21.9999 13.8826 21.9999H12.9571C11.5054 21.9999 10.7796 21.9999 10.1335 21.7298C10.0176 21.6814 9.90436 21.6267 9.79422 21.566C9.18004 21.2278 8.72235 20.6566 7.80698 19.5142L4.8436 15.8158C4.38822 15.2474 4.38518 14.4341 4.8363 13.8622C5.37851 13.175 6.37444 13.08 7.03345 13.6528Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6.75C14.0858 6.75 13.75 6.41421 13.75 6C13.75 5.58579 14.0858 5.25 14.5 5.25V6.75ZM18.6716 7L19.1585 7.57045H19.1585L18.6716 7ZM17.9869 8.57045C17.6719 8.83937 17.1985 8.80196 16.9295 8.48691C16.6606 8.17186 16.698 7.69846 17.0131 7.42955L17.9869 8.57045ZM17.0131 4.57045C16.698 4.30154 16.6606 3.82814 16.9295 3.51309C17.1985 3.19803 17.6719 3.16063 17.9869 3.42955L17.0131 4.57045ZM18.6716 5L19.1585 4.42955L19.1585 4.42955L18.6716 5ZM19.5 6.75H14.5V5.25H19.5V6.75ZM19.1585 7.57045L17.9869 8.57045L17.0131 7.42955L18.1847 6.42955L19.1585 7.57045ZM17.9869 3.42955L19.1585 4.42955L18.1847 5.57045L17.0131 4.57045L17.9869 3.42955ZM18.1847 6.42955C18.4776 6.1795 18.6375 6.04083 18.7337 5.93323C18.8204 5.83631 18.75 5.87739 18.75 6H20.25C20.25 6.41551 20.0416 6.72088 19.8521 6.93289C19.6721 7.13421 19.4178 7.3491 19.1585 7.57045L18.1847 6.42955ZM19.1585 4.42955C19.4178 4.6509 19.6721 4.86579 19.8521 5.06711C20.0416 5.27912 20.25 5.58449 20.25 6H18.75C18.75 6.12261 18.8204 6.16369 18.7337 6.06677C18.6375 5.95917 18.4776 5.8205 18.1847 5.57045L19.1585 4.42955Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M12.438 9.5C13.6677 8.81764 14.5 7.50601 14.5 6C14.5 3.79086 12.7091 2 10.5 2C8.29086 2 6.5 3.79086 6.5 6C6.5 7.50601 7.33229 8.81764 8.562 9.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  )
}
