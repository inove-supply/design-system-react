export const MailReply01Icon = ({
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
        d="M22 11C22 10.5086 21.9947 10.0172 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C10.0691 19.4878 11.0345 19.5 12 19.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinejoin="round"
      />
      <path
        d="M21.25 21.5C21.25 21.9142 21.5858 22.25 22 22.25C22.4142 22.25 22.75 21.9142 22.75 21.5H21.25ZM16.9773 19.0378C17.2743 19.3265 17.7491 19.3198 18.0378 19.0227C18.3265 18.7257 18.3198 18.2509 18.0227 17.9622L16.9773 19.0378ZM18.0227 14.0378C18.3198 13.7491 18.3265 13.2743 18.0378 12.9773C17.7491 12.6802 17.2743 12.6735 16.9773 12.9622L18.0227 14.0378ZM15 16.75H18V15.25H15V16.75ZM21.25 20V21.5H22.75V20H21.25ZM18 16.75C19.7949 16.75 21.25 18.2051 21.25 20H22.75C22.75 17.3766 20.6234 15.25 18 15.25V16.75ZM14.25 16C14.25 16.2583 14.339 16.4807 14.4254 16.6422C14.515 16.8096 14.631 16.9652 14.7485 17.1032C14.9832 17.3787 15.285 17.6543 15.5755 17.9005C15.8693 18.1494 16.1784 18.3905 16.4328 18.5903C16.7042 18.8035 16.886 18.9491 16.9773 19.0378L18.0227 17.9622C17.8612 17.8051 17.604 17.6029 17.3593 17.4107C17.0975 17.2051 16.8132 16.9831 16.5452 16.7561C16.274 16.5262 16.0456 16.3127 15.8905 16.1306C15.8132 16.0399 15.7694 15.9745 15.7479 15.9344C15.7233 15.8884 15.75 15.9168 15.75 16H14.25ZM16.9773 12.9622C16.886 13.0509 16.7042 13.1965 16.4328 13.4097C16.1784 13.6095 15.8693 13.8506 15.5755 14.0995C15.285 14.3457 14.9832 14.6213 14.7485 14.8968C14.631 15.0348 14.515 15.1904 14.4254 15.3578C14.339 15.5193 14.25 15.7417 14.25 16H15.75C15.75 16.0832 15.7233 16.1116 15.7479 16.0656C15.7694 16.0255 15.8132 15.9601 15.8905 15.8694C16.0456 15.6873 16.274 15.4738 16.5452 15.2439C16.8132 15.0169 17.0975 14.7949 17.3593 14.5893C17.604 14.3971 17.8612 14.1949 18.0227 14.0378L16.9773 12.9622Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
