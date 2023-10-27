export const RocketIcon = ({
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
        d="M8 10.1667L12.1232 6.04344C13.2481 4.91858 13.8105 4.35614 14.4312 3.90314C15.7047 2.9737 17.1818 2.36187 18.7395 2.11858C19.4988 2 20.2942 2 21.885 2C21.9681 2 22 2.03812 22 2.11504C22 3.70584 22 4.50125 21.8814 5.26046C21.6381 6.81818 21.0263 8.29527 20.0969 9.56878C19.6439 10.1895 19.0814 10.7519 17.9566 11.8768L13.8333 16"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.341 8.09838C8.63808 8.09838 6.49778 7.73765 4.9043 8.39769C3.73671 8.88132 2.87754 10.0012 2 10.8787L5.30597 12.2955C6.18208 12.671 5.64651 13.7766 5.50147 14.5018C5.33985 15.3099 5.34886 15.3397 5.93158 15.9224L8.07758 18.0684C8.6603 18.6511 8.69008 18.6602 9.49816 18.4985C10.2234 18.3535 11.329 17.8179 11.7044 18.694L13.1213 22C13.9988 21.1225 15.1187 20.2633 15.6023 19.0957C16.2624 17.5022 15.9016 15.3619 15.9016 13.659"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M18.894 6.16669C19.1869 5.8738 19.1869 5.39893 18.894 5.10603C18.6011 4.81314 18.1262 4.81314 17.8333 5.10603L18.894 6.16669ZM15.9697 6.96967C15.6768 7.26256 15.6768 7.73744 15.9697 8.03033C16.2626 8.32322 16.7374 8.32322 17.0303 8.03033L15.9697 6.96967ZM17.8333 5.10603L15.9697 6.96967L17.0303 8.03033L18.894 6.16669L17.8333 5.10603ZM13.9778 4.74967C15.762 4.80259 17.0307 5.34191 17.8673 6.19922C18.7066 7.05944 19.2002 8.33139 19.2503 10.0222L20.7497 9.97776C20.6917 8.02218 20.1114 6.35127 18.9409 5.15166C17.7675 3.94915 16.0904 3.31167 14.0222 3.25033L13.9778 4.74967Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 20L11 21"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L3 13"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
