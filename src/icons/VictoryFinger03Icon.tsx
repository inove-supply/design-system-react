export const VictoryFinger03Icon = ({
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
        d="M6.2614 13.6285C6.33237 14.0366 6.72072 14.3099 7.12881 14.2389C7.5369 14.1679 7.81019 13.7796 7.73921 13.3715L6.2614 13.6285ZM5.31057 3.78404L4.57167 3.91255L5.31057 3.78404ZM8.28873 3.15367L7.56112 3.33558L8.28873 3.15367ZM10.0003 10L9.2727 10.1819C9.35617 10.5158 9.65616 10.75 10.0003 10.75C10.3445 10.75 10.6444 10.5158 10.7279 10.1819L10.0003 10ZM12.7617 10.3697C12.6897 10.7776 12.9621 11.1666 13.37 11.2386C13.7779 11.3106 14.1669 11.0382 14.2389 10.6303L12.7617 10.3697ZM14.6853 3.78504L15.4239 3.91538V3.91538L14.6853 3.78504ZM11.7123 3.15192L10.9847 2.97002V2.97002L11.7123 3.15192ZM16.2503 11C16.2503 11.4142 16.5861 11.75 17.0003 11.75C17.4145 11.75 17.7503 11.4142 17.7503 11H16.2503ZM15.4144 8.04292L15.5689 7.309L15.4144 8.04292ZM5.5676 16.9792L4.9471 17.4005C4.95801 17.4166 4.96953 17.4322 4.98165 17.4474L5.5676 16.9792ZM7.56282 19.4764L8.14877 19.0083L8.14877 19.0083L7.56282 19.4764ZM4.00549 13.9372L3.25681 13.9817L4.00549 13.9372ZM19.0788 17.8253L18.3883 17.5326L18.3883 17.5326L19.0788 17.8253ZM17.0003 8.75C16.5861 8.75 16.2503 9.08579 16.2503 9.5C16.2503 9.91421 16.5861 10.25 17.0003 10.25V8.75ZM18.1446 19.4142L18.7639 19.8371H18.7639L18.1446 19.4142ZM16.6807 22C16.6807 22.4142 17.0164 22.75 17.4307 22.75C17.8449 22.75 18.1807 22.4142 18.1807 22H16.6807ZM7.25031 22C7.25031 22.4142 7.58609 22.75 8.00031 22.75C8.41452 22.75 8.75031 22.4142 8.75031 22H7.25031ZM20.7503 13.5C20.7503 13.0858 20.4145 12.75 20.0003 12.75C19.5861 12.75 19.2503 13.0858 19.2503 13.5H20.7503ZM7.73921 13.3715L7.13056 9.87171L5.65274 10.1287L6.2614 13.6285L7.73921 13.3715ZM7.13056 9.87171L6.04948 3.65554L4.57167 3.91255L5.65274 10.1287L7.13056 9.87171ZM7.56112 3.33558L9.2727 10.1819L10.7279 9.8181L9.01633 2.97177L7.56112 3.33558ZM6.81113 2.75C7.16586 2.75 7.47508 2.99143 7.56112 3.33558L9.01633 2.97177C8.76336 1.95987 7.85417 1.25 6.81113 1.25V2.75ZM6.04948 3.65554C5.96725 3.18271 6.33121 2.75 6.81113 2.75V1.25C5.40001 1.25 4.32988 2.52231 4.57167 3.91255L6.04948 3.65554ZM14.2389 10.6303L14.5918 8.63034L13.1147 8.36966L12.7617 10.3697L14.2389 10.6303ZM14.5918 8.63034L15.4239 3.91538L13.9467 3.65471L13.1147 8.36966L14.5918 8.63034ZM10.9847 2.97002L9.2727 9.8181L10.7279 10.1819L12.4399 3.33382L10.9847 2.97002ZM13.1877 1.25C12.1457 1.25 11.2374 1.95915 10.9847 2.97002L12.4399 3.33382C12.5257 2.99071 12.834 2.75 13.1877 2.75V1.25ZM15.4239 3.91538C15.6693 2.52491 14.5996 1.25 13.1877 1.25V2.75C13.6669 2.75 14.03 3.18274 13.9467 3.65471L15.4239 3.91538ZM16.2503 10V11H17.7503V10H16.2503ZM15.2599 8.77683C15.8258 8.89597 16.2503 9.39927 16.2503 10H17.7503C17.7503 8.67552 16.8147 7.57128 15.5689 7.309L15.2599 8.77683ZM4.98165 17.4474L6.97688 19.9446L8.14877 19.0083L6.15354 16.511L4.98165 17.4474ZM6.18809 16.5579C5.67529 15.8026 5.32134 15.2799 5.08446 14.846C4.85434 14.4245 4.76925 14.1465 4.75417 13.8927L3.25681 13.9817C3.29 14.5402 3.48135 15.04 3.76791 15.5648C4.0477 16.0773 4.45068 16.6693 4.9471 17.4005L6.18809 16.5579ZM19.2503 13.5C19.2503 14.871 19.0864 15.7373 18.9111 16.3078C18.7213 16.9255 18.5609 17.1256 18.3883 17.5326L19.7694 18.118C19.8326 17.9688 20.1329 17.4382 20.3449 16.7483C20.5714 16.0112 20.7503 14.993 20.7503 13.5H19.2503ZM20.0003 13.5C20.7503 13.5 20.7503 13.4997 20.7503 13.4994C20.7503 13.4993 20.7503 13.499 20.7503 13.4987C20.7503 13.4982 20.7503 13.4977 20.7503 13.4971C20.7503 13.4958 20.7503 13.4944 20.7503 13.4926C20.7503 13.4892 20.7502 13.4848 20.7502 13.4795C20.75 13.4688 20.7498 13.4543 20.7493 13.4363C20.7484 13.4004 20.7467 13.3503 20.7434 13.288C20.7367 13.1637 20.7236 12.9895 20.6976 12.782C20.6462 12.3707 20.5422 11.809 20.3276 11.2367C20.1141 10.6674 19.7761 10.0472 19.233 9.56444C18.6743 9.06788 17.9347 8.75 17.0003 8.75V10.25C17.5659 10.25 17.9513 10.4321 18.2364 10.6856C18.537 10.9528 18.7615 11.3326 18.9231 11.7633C19.0834 12.191 19.1669 12.6293 19.2092 12.968C19.2302 13.1355 19.2405 13.2738 19.2455 13.3682C19.248 13.4153 19.2492 13.4512 19.2498 13.4738C19.2501 13.4851 19.2502 13.4931 19.2503 13.4976C19.2503 13.4998 19.2503 13.5012 19.2503 13.5016C19.2503 13.5018 19.2503 13.5017 19.2503 13.5015C19.2503 13.5014 19.2503 13.5012 19.2503 13.5009C19.2503 13.5008 19.2503 13.5006 19.2503 13.5005C19.2503 13.5003 19.2503 13.5 20.0003 13.5ZM18.7639 19.8371C19.0969 19.3494 19.5007 18.7517 19.7694 18.118L18.3883 17.5326C18.1865 18.0088 17.8678 18.4894 17.5252 18.9913L18.7639 19.8371ZM17.5252 18.9913C16.8265 20.0145 16.6807 20.9078 16.6807 22H18.1807C18.1807 21.0945 18.2905 20.5305 18.7639 19.8371L17.5252 18.9913ZM6.97688 19.9446C7.13734 20.1454 7.21895 20.3981 7.24953 20.7503C7.28373 21.1444 7.25031 21.4894 7.25031 22H8.75031C8.75031 21.6519 8.78501 21.0941 8.74391 20.6206C8.69917 20.1052 8.56204 19.5255 8.14877 19.0083L6.97688 19.9446ZM5.83565 9.49686C5.41594 9.96046 4.74235 10.6348 4.2183 11.3505C3.69707 12.0623 3.19699 12.9749 3.25681 13.9817L4.75417 13.8927C4.72634 13.4243 4.96296 12.8725 5.42853 12.2367C5.89128 11.6047 6.45459 11.0482 6.94765 10.5036L5.83565 9.49686ZM14.5728 8.71154C14.5494 8.79115 14.5011 8.8257 14.5024 8.82485C14.5109 8.81915 14.554 8.79553 14.6478 8.77536C14.8398 8.7341 15.0864 8.74031 15.2599 8.77683L15.5689 7.309C15.2124 7.23396 14.7519 7.21871 14.3326 7.30888C13.9603 7.3889 13.3294 7.62281 13.1337 8.28846L14.5728 8.71154ZM19.2503 13.5C19.2503 13.5 20.0003 13.5 20.7503 13.5C20.7503 13.5 20.7503 13.5 20.0003 13.5C19.2503 13.5 19.2503 13.5 19.2503 13.5C20.0003 13.5 20.7503 13.5 20.7503 13.5H19.2503Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
