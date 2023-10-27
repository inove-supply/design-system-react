export const IceCream01Icon = ({
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
        d="M12 12.1534C14.4268 12.1534 16.7094 11.8086 18.6994 11.202C19.3273 11.0106 19.6412 10.9149 19.8479 11.0982C20.0546 11.2815 20.0152 11.5735 19.9363 12.1577C19.4239 15.9501 16.0416 19 12 19C7.95837 19 4.57608 15.9501 4.06374 12.1577C3.98483 11.5735 3.94537 11.2815 4.15209 11.0982C4.3588 10.9149 4.67272 11.0106 5.30056 11.202C7.29063 11.8086 9.57324 12.1534 12 12.1534Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M18.2644 9.1465C18.3454 9.55273 18.7403 9.81646 19.1465 9.73555C19.5527 9.65464 19.8165 9.25974 19.7356 8.8535L18.2644 9.1465ZM4.26445 8.8535C4.18354 9.25974 4.44727 9.65464 4.8535 9.73555C5.25973 9.81646 5.65464 9.55273 5.73555 9.1465L4.26445 8.8535ZM13.3241 3.73052C15.7507 4.29471 17.7177 6.40126 18.2644 9.1465L19.7356 8.8535C19.0866 5.59511 16.7257 2.98138 13.6637 2.26948L13.3241 3.73052ZM5.73555 9.1465C6.28232 6.40126 8.24927 4.29471 10.6759 3.73052L10.3363 2.26948C7.2743 2.98138 4.91342 5.59511 4.26445 8.8535L5.73555 9.1465Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 19V21C12 21.5523 11.5523 22 11 22H9H15"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08771 5C6.61656 6.46159 8.10425 7.61154 10.0967 7.22833C11.8214 6.89661 11.4094 7.44878 13.5462 7.89178C16.0476 8.41038 17 6.94879 17 5.97439"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
