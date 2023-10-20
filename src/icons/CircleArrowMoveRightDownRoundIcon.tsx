export const CircleArrowMoveRightDownRoundIcon = ({
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
        d="M15.784 9.30137L16.3139 8.77052V8.77052L15.784 9.30137ZM15.0099 7.46915C14.7168 7.17654 14.2419 7.17701 13.9493 7.47019C13.6567 7.76337 13.6571 8.23824 13.9503 8.53085L15.0099 7.46915ZM15.784 10.3279L16.3139 10.8587L15.784 10.3279ZM13.9503 11.0984C13.6571 11.391 13.6567 11.8659 13.9493 12.1591C14.2419 12.4522 14.7168 12.4527 15.0099 12.1601L13.9503 11.0984ZM10.3324 15.7874L10.8623 16.3183L10.3324 15.7874ZM12.1662 15.0169C12.4594 14.7243 12.4598 14.2494 12.1672 13.9562C11.8746 13.663 11.3997 13.6626 11.1066 13.9552L12.1662 15.0169ZM9.30392 15.7874L8.77411 16.3183H8.77411L9.30392 15.7874ZM8.52981 13.9552C8.23663 13.6626 7.76176 13.663 7.46915 13.9562C7.17654 14.2494 7.17701 14.7243 7.47019 15.0169L8.52981 13.9552ZM16 10.5646C16.4142 10.5646 16.75 10.2288 16.75 9.81462C16.75 9.40041 16.4142 9.06462 16 9.06462V10.5646ZM9.06818 15.9843C9.06818 16.3985 9.40397 16.7343 9.81818 16.7343C10.2324 16.7343 10.5682 16.3985 10.5682 15.9843H9.06818ZM16.3139 8.77052L15.0099 7.46915L13.9503 8.53085L15.2542 9.83222L16.3139 8.77052ZM15.2542 9.79702L13.9503 11.0984L15.0099 12.1601L16.3139 10.8587L15.2542 9.79702ZM15.2542 9.83222C15.2447 9.82267 15.2447 9.80657 15.2542 9.79702L16.3139 10.8587C16.8915 10.2823 16.8915 9.34699 16.3139 8.77052L15.2542 9.83222ZM10.8623 16.3183L12.1662 15.0169L11.1066 13.9552L9.80263 15.2566L10.8623 16.3183ZM9.83373 15.2566L8.52981 13.9552L7.47019 15.0169L8.77411 16.3183L9.83373 15.2566ZM9.80263 15.2566C9.80394 15.2552 9.80681 15.2531 9.81048 15.2516C9.81365 15.2503 9.81624 15.25 9.81818 15.25C9.82012 15.25 9.82271 15.2503 9.82588 15.2516C9.82955 15.2531 9.83242 15.2552 9.83373 15.2566L8.77411 16.3183C9.3509 16.8939 10.2855 16.8939 10.8623 16.3183L9.80263 15.2566ZM14.1818 10.5646H16V9.06462H14.1818V10.5646ZM9.06818 14.1697V15.9843H10.5682V14.1697H9.06818ZM14.1818 9.06462C13.1745 9.06462 12.3436 9.06303 11.688 9.15101C11.011 9.24185 10.4096 9.44035 9.92741 9.92156L10.987 10.9833C11.1439 10.8267 11.3763 10.7063 11.8875 10.6377C12.4202 10.5662 13.1321 10.5646 14.1818 10.5646V9.06462ZM10.5682 14.1697C10.5682 13.122 10.5698 12.4117 10.6413 11.8805C10.71 11.3709 10.8303 11.1396 10.987 10.9833L9.92741 9.92156C9.44505 10.403 9.2459 11.0038 9.15478 11.6802C9.06658 12.3349 9.06818 13.1645 9.06818 14.1697H10.5682Z"
        strokeWidth={strokeWidth}
      />
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} />
    </svg>
  )
}
