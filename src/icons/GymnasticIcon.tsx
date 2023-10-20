export const GymnasticIcon = ({
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
        d="M14.5 10C14.2791 10.0578 14.0631 10.128 13.8528 10.2099M17.5 10C20.0878 10.6767 22 13.0635 22 15.904C22 19.2707 19.3137 22 16 22C15.2987 22 14.6256 21.8778 14 21.6531M10.5 13.4638C10.1784 14.211 10 15.0363 10 15.904C10 16.8324 10.2043 17.7124 10.5697 18.5"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9977 7C17.4153 7 18.2027 10.4981 16.6484 10.9238C16.2777 11.0254 15.7176 11.0254 15.3469 10.9238C13.7946 10.4986 14.5939 7 15.9977 7Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 7V2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10C3.91216 10.6767 2 13.0635 2 15.904C2 19.2707 4.68629 22 8 22C11.3137 22 14 19.2707 14 15.904C14 13.0635 12.0878 10.6767 9.5 10"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99767 7C9.41527 7 10.2027 10.4981 8.6484 10.9238C8.2777 11.0254 7.71764 11.0254 7.34695 10.9238C5.79459 10.4986 6.59392 7 7.99767 7Z"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 7V2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
