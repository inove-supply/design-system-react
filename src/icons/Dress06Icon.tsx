export const Dress06Icon = ({
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
        d="M7.7385 2.1107L7.42415 1.42975V1.42975L7.7385 2.1107ZM2.49294 7.6525L1.83493 7.29262L2.49294 7.6525ZM16.2615 2.1107L15.9472 2.79164V2.79164L16.2615 2.1107ZM21.5071 7.6525L20.849 8.01239V8.01239L21.5071 7.6525ZM21.9999 9.09665L21.25 9.10149V9.10149L21.9999 9.09665ZM2.00006 9.09665L1.25007 9.09181L2.00006 9.09665ZM5.99999 13.75C6.4142 13.75 6.74999 13.4142 6.74999 13C6.74999 12.5858 6.4142 12.25 5.99999 12.25V13.75ZM18 12.25C17.5858 12.25 17.25 12.5858 17.25 13C17.25 13.4142 17.5858 13.75 18 13.75V12.25ZM8.70585 2.35489L9.27502 1.86648V1.86648L8.70585 2.35489ZM15.2941 2.35489L15.8633 2.84331V2.84331L15.2941 2.35489ZM7.42415 1.42975C5.98109 2.09592 3.71951 3.84685 1.83493 7.29262L3.15096 8.01239C4.90055 4.81342 6.93644 3.30702 8.05285 2.79164L7.42415 1.42975ZM15.9472 2.79164C17.0636 3.30702 19.0994 4.81342 20.849 8.01239L22.1651 7.29262C20.2805 3.84685 18.0189 2.09592 16.5759 1.42975L15.9472 2.79164ZM20.849 8.01239C21.1795 8.6166 21.2478 8.76271 21.25 9.10149L22.7499 9.09181C22.745 8.33172 22.4871 7.88135 22.1651 7.29262L20.849 8.01239ZM1.83493 7.29262C1.51294 7.88135 1.25498 8.33172 1.25007 9.09181L2.75004 9.10149C2.75223 8.76271 2.82049 8.61661 3.15096 8.01239L1.83493 7.29262ZM1.25007 9.09181C1.24188 10.3616 1.90516 11.5241 2.77613 12.347C3.64549 13.1685 4.82455 13.75 5.99999 13.75V12.25C5.29823 12.25 4.47084 11.8846 3.8063 11.2567C3.14336 10.6304 2.74527 9.84125 2.75004 9.10149L1.25007 9.09181ZM21.25 9.10149C21.2547 9.84125 20.8566 10.6304 20.1937 11.2567C19.5292 11.8846 18.7018 12.25 18 12.25V13.75C19.1754 13.75 20.3545 13.1685 21.2239 12.347C22.0948 11.5241 22.7581 10.3616 22.7499 9.09181L21.25 9.10149ZM8.13668 2.84331C8.55949 3.33601 9.09157 3.97273 9.69711 4.4761C10.3043 4.98084 11.0764 5.4307 12 5.4307V3.9307C11.5801 3.9307 11.1417 3.7264 10.656 3.32261C10.1686 2.91746 9.72536 2.39127 9.27502 1.86648L8.13668 2.84331ZM14.725 1.86648C14.2746 2.39127 13.8314 2.91746 13.344 3.32261C12.8583 3.7264 12.4199 3.9307 12 3.9307V5.4307C12.9236 5.4307 13.6957 4.98084 14.3029 4.47611C14.9084 3.97273 15.4405 3.33601 15.8633 2.84331L14.725 1.86648ZM8.05285 2.79164C8.09072 2.77416 8.11862 2.76318 8.13836 2.75642C8.15803 2.74969 8.16644 2.74823 8.16564 2.74837C8.16431 2.74861 8.15309 2.75047 8.13435 2.74989C8.11494 2.74929 8.09276 2.74622 8.06999 2.73988C8.0227 2.72671 8.00319 2.70808 8.01679 2.71892C8.02417 2.72479 8.03788 2.73665 8.05886 2.75784C8.07983 2.77902 8.10532 2.80676 8.13668 2.84331L9.27502 1.86648C9.10513 1.66849 8.85019 1.40009 8.47246 1.29489C8.06878 1.18245 7.70367 1.30072 7.42415 1.42975L8.05285 2.79164ZM16.5759 1.42975C16.2963 1.30072 15.9312 1.18245 15.5275 1.29489C15.1498 1.40009 14.8949 1.66849 14.725 1.86648L15.8633 2.84331C15.8947 2.80676 15.9202 2.77902 15.9411 2.75784C15.9621 2.73665 15.9758 2.72479 15.9832 2.71892C15.9968 2.70808 15.9773 2.72671 15.93 2.73988C15.9072 2.74622 15.8851 2.74929 15.8657 2.74989C15.8469 2.75047 15.8357 2.74861 15.8344 2.74837C15.8336 2.74823 15.842 2.74969 15.8616 2.75642C15.8814 2.76318 15.9093 2.77416 15.9472 2.79164L16.5759 1.42975Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M5.18518 9C8.90131 12.6459 3.13805 17.3573 5.66398 20.5594C7.06207 22.3318 16.7075 22.623 18.3353 20.5594C20.8599 17.359 15.1114 12.6531 18.8141 9"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
