export const Bread01Icon = ({
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
        d="M3.19405 14.077C1.94563 15.3081 1.84437 17.6176 2.13655 19.7508C2.40166 21.6863 4.57937 22.5985 6.21199 21.5762C9.1986 19.7061 12.3179 17.2421 15.3067 14.2946C18.3772 11.2665 20.0596 8.96137 21.5435 6.36746C22.4433 4.79457 22.0218 2.69728 20.1997 2.23217C18.2048 1.72298 15.6191 1.93189 13.3375 4.07744M3.19405 14.077C2.36031 10.337 5.29027 5.93182 12.1656 9.79424M3.19405 14.077C3.81736 14.0897 5.21758 14.3717 6.5544 15.3244M6.84592 8.1954C6.90898 6.2548 8.82259 3.0048 13.3375 4.07744M13.3375 4.07744C14.304 4.30706 15.3897 4.73476 16.602 5.41579"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
