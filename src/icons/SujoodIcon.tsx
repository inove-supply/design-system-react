export const SujoodIcon = ({
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
        d="M19.5 12.5107C19.5 11.0269 18.6112 8.56411 15.0561 6.5857C10.6122 4.11268 7.31475 4.86323 6.16835 6.5857C5.1808 8.06949 4.68705 10.0479 9.13094 14.9939H7.49878C6.55716 14.9939 6.08499 14.9953 5.79222 15.2875C5.5 15.5802 5.5 16.0511 5.5 16.9927C5.5 17.9343 5.5 18.4051 5.79222 18.6979C6.08499 18.9901 6.55716 18.9915 7.49878 18.9915H9.5C10.665 19.069 12.9951 18.6512 12.9951 16.3595M19.5 12.5107C19 12.8337 17.5 14.382 15.5 13.9945L16.5 16.493C17.1667 16.6596 18.6 17.7922 19 18.9915H15.6606C14.9429 18.9915 14.2802 18.6071 13.9242 17.9844L12.9951 16.3595M19.5 12.5107H19.7577C21.2722 12.5107 22.5 13.7378 22.5 15.2514C22.5 16.765 21.2722 17.9921 19.7577 17.9921H18.5M15.0561 10.4966C14.2099 10.4966 13.1934 10.7926 12.3021 11.1429C11.2757 11.5463 10.943 12.7705 11.4902 13.7275L12.9951 16.3595"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5001 15.5C4.49881 15.5 3.29726 14 2.49623 14C1.66898 14 1.52519 14.3413 1.50019 16.9976C1.4898 18.1021 1.894 19 3 19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
