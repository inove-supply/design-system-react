export const BluetoothSearchIcon = ({
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
        d="M20.9697 21.5303C21.2626 21.8232 21.7374 21.8232 22.0303 21.5303C22.3232 21.2374 22.3232 20.7626 22.0303 20.4697L20.9697 21.5303ZM19.3697 19.9303L20.9697 21.5303L22.0303 20.4697L20.4303 18.8697L19.3697 19.9303ZM21.45 16.6C21.45 14.1976 19.5024 12.25 17.1 12.25V13.75C18.674 13.75 19.95 15.026 19.95 16.6H21.45ZM17.1 12.25C14.6976 12.25 12.75 14.1976 12.75 16.6H14.25C14.25 15.026 15.526 13.75 17.1 13.75V12.25ZM12.75 16.6C12.75 19.0024 14.6976 20.95 17.1 20.95V19.45C15.526 19.45 14.25 18.174 14.25 16.6H12.75ZM17.1 20.95C19.5024 20.95 21.45 19.0024 21.45 16.6H19.95C19.95 18.174 18.674 19.45 17.1 19.45V20.95Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M2.95217 6.1009C2.6217 5.85118 2.15136 5.91663 1.90163 6.2471C1.65191 6.57757 1.71736 7.04791 2.04783 7.29764L2.95217 6.1009ZM12.2412 4.45893L11.789 5.0573V5.0573L12.2412 4.45893ZM12.9471 4.99234L13.3992 4.39398V4.39398L12.9471 4.99234ZM12.9471 8.4062L13.3992 9.00456L12.9471 8.4062ZM2.04783 15.7024C1.71736 15.9521 1.65191 16.4224 1.90163 16.7529C2.15136 17.0834 2.6217 17.1488 2.95217 16.8991L2.04783 15.7024ZM9.43824 19.922L9.77568 19.2522L9.77568 19.2522L9.43824 19.922ZM9.43824 3.078L9.77568 3.7478V3.7478L9.43824 3.078ZM11.1297 14.1606C11.4602 14.4103 11.9305 14.3448 12.1803 14.0144C12.43 13.6839 12.3645 13.2136 12.0341 12.9638L11.1297 14.1606ZM11.4402 20.0603C11.7823 19.8267 11.8703 19.3601 11.6367 19.018C11.4031 18.6759 10.9365 18.5879 10.5944 18.8215L11.4402 20.0603ZM8.10294 6.16586V11.5H9.60294V6.16586H8.10294ZM8.10294 11.5V16.8341H9.60294V11.5H8.10294ZM9.30511 10.9016L2.95217 6.1009L2.04783 7.29764L8.40077 12.0984L9.30511 10.9016ZM11.789 5.0573L12.4949 5.59071L13.3992 4.39398L12.6933 3.86056L11.789 5.0573ZM12.4949 7.80783L8.40077 10.9016L9.30511 12.0984L13.3992 9.00456L12.4949 7.80783ZM8.40077 10.9016L2.04783 15.7024L2.95217 16.8991L9.30511 12.0984L8.40077 10.9016ZM8.10294 16.8341C8.10294 17.7398 8.101 18.5044 8.18393 19.0738C8.26586 19.6364 8.4655 20.2718 9.10081 20.5918L9.77568 19.2522C9.77533 19.252 9.77877 19.2541 9.78142 19.2568C9.78326 19.2587 9.77667 19.2528 9.76488 19.2302C9.73756 19.1778 9.69901 19.0687 9.66827 18.8577C9.60488 18.4224 9.60294 17.7905 9.60294 16.8341H8.10294ZM12.4949 5.59071C13.0316 5.99632 13.3666 6.25183 13.5779 6.46597C13.6772 6.56653 13.72 6.62999 13.7381 6.66472C13.7516 6.69046 13.75 6.69657 13.75 6.69927H15.25C15.25 6.14732 14.9655 5.73648 14.6456 5.41234C14.3393 5.10196 13.8978 4.77071 13.3992 4.39398L12.4949 5.59071ZM13.3992 9.00456C13.8978 8.62783 14.3393 8.29658 14.6456 7.9862C14.9655 7.66206 15.25 7.25122 15.25 6.69927H13.75C13.75 6.70197 13.7516 6.70808 13.7381 6.73382C13.72 6.76855 13.6772 6.83201 13.5779 6.93257C13.3666 7.14671 13.0316 7.40222 12.4949 7.80783L13.3992 9.00456ZM9.60294 6.16586C9.60294 5.20952 9.60488 4.5776 9.66827 4.14234C9.69901 3.9313 9.73756 3.82219 9.76488 3.76981C9.77667 3.7472 9.78326 3.74131 9.78142 3.74319C9.77877 3.74589 9.77533 3.74798 9.77568 3.7478L9.10081 2.40819C8.4655 2.72825 8.26586 3.36362 8.18393 3.92616C8.101 4.49561 8.10294 5.26019 8.10294 6.16586H9.60294ZM12.6933 3.86056C11.9746 3.31742 11.3679 2.85646 10.865 2.5811C10.3672 2.30854 9.73856 2.08691 9.10081 2.40819L9.77568 3.7478C9.77603 3.74763 9.77187 3.74937 9.76719 3.75001C9.76363 3.75049 9.77116 3.7487 9.79505 3.75258C9.85094 3.76165 9.95918 3.79526 10.1446 3.89678C10.5272 4.10631 11.0293 4.48324 11.789 5.0573L12.6933 3.86056ZM12.0341 12.9638L9.30511 10.9016L8.40077 12.0984L11.1297 14.1606L12.0341 12.9638ZM10.5944 18.8215C10.2469 19.0588 10.0233 19.178 9.87309 19.2273C9.80511 19.2496 9.77365 19.2501 9.768 19.25C9.76555 19.2499 9.76709 19.2498 9.7709 19.2507C9.77476 19.2517 9.77669 19.2527 9.77568 19.2522L9.10081 20.5918C9.52309 20.8045 9.9538 20.7797 10.3413 20.6524C10.7023 20.5338 11.0704 20.3127 11.4402 20.0603L10.5944 18.8215Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
