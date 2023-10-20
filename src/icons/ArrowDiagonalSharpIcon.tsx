export const ArrowDiagonalSharpIcon = ({
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
        d="M4 20L20 4"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 3.20813L20.0271 3.01948C20.5013 2.98992 20.7384 2.97515 20.8818 3.11869C21.0252 3.26224 21.0101 3.49929 20.98 3.97338L20.7876 7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.19844 17L3.01802 20.0353C2.99021 20.5031 2.97631 20.737 3.11797 20.8794C3.25964 21.0218 3.49383 21.0094 3.96222 20.9845L7 20.8233"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
