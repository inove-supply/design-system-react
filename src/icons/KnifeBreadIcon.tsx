export const KnifeBreadIcon = ({
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
        d="M10.4408 15.8962C10.8869 16.3785 11.3594 17.1338 12.0909 17.0175C12.443 16.9615 12.7331 16.6478 13.3134 16.0204L14.9749 14.2239L15.3549 12.1693L17.2551 11.7583L17.6352 9.70371L19.5354 9.29279L20.1175 7.23529L21.1541 6.96268C21.6189 6.84042 21.8514 6.77929 21.9549 6.56164C22.0585 6.34398 21.9735 6.13125 21.8035 5.70579C21.5445 5.05764 21.1283 4.2661 20.5425 3.8879C19.0355 2.70403 16.9949 2.70403 15.4879 3.8879C15.2142 4.10296 14.9317 4.40836 14.3668 5.01917L2.49976 17.8504C1.83341 18.5709 1.83341 19.7391 2.49976 20.4596C3.25522 21.2764 4.51122 21.1502 5.11452 20.1968L7.65899 16.1758C8.03248 15.5856 8.44586 14.7353 9.24298 14.8926C9.57287 14.9578 9.86218 15.2706 10.4408 15.8962Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
