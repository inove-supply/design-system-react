export const CursorMove02Icon = ({
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
        d="M2.38086 2.46562C4.21503 0.490411 18.0114 5.32901 18 7.09558C17.9871 9.09884 12.6121 9.71513 11.1223 10.1331C10.2265 10.3844 9.98651 10.6421 9.77993 11.5815C8.84436 15.8362 8.37464 17.9524 7.3041 17.9997C5.59766 18.0751 0.590865 4.39327 2.38086 2.46562Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M16.75 15.7C16.75 16.1142 17.0858 16.45 17.5 16.45C17.9142 16.45 18.25 16.1142 18.25 15.7H16.75ZM15.7 18.25C16.1142 18.25 16.45 17.9142 16.45 17.5C16.45 17.0858 16.1142 16.75 15.7 16.75V18.25ZM19.3 16.75C18.8858 16.75 18.55 17.0858 18.55 17.5C18.55 17.9142 18.8858 18.25 19.3 18.25V16.75ZM18.25 19.3C18.25 18.8858 17.9142 18.55 17.5 18.55C17.0858 18.55 16.75 18.8858 16.75 19.3H18.25ZM21.5233 15.722C21.2332 15.4264 20.7583 15.4218 20.4627 15.712C20.167 16.0021 20.1625 16.4769 20.4526 16.7726L21.5233 15.722ZM20.4526 18.2274C20.1625 18.5231 20.167 18.9979 20.4627 19.288C20.7583 19.5782 21.2332 19.5736 21.5233 19.278L20.4526 18.2274ZM18.2274 14.5474C18.5231 14.8375 18.998 14.833 19.2881 14.5373C19.5782 14.2417 19.5736 13.7668 19.278 13.4767L18.2274 14.5474ZM15.722 13.4767C15.4264 13.7668 15.4218 14.2417 15.712 14.5373C16.0021 14.833 16.4769 14.8375 16.7726 14.5474L15.722 13.4767ZM14.5474 16.7726C14.8375 16.4769 14.833 16.0021 14.5373 15.7119C14.2417 15.4218 13.7668 15.4264 13.4767 15.722L14.5474 16.7726ZM13.4767 19.278C13.7668 19.5736 14.2417 19.5782 14.5373 19.288C14.833 18.9979 14.8375 18.5231 14.5474 18.2274L13.4767 19.278ZM16.7726 20.4526C16.4769 20.1625 16.0021 20.167 15.712 20.4627C15.4218 20.7583 15.4264 21.2332 15.722 21.5233L16.7726 20.4526ZM19.278 21.5233C19.5736 21.2332 19.5781 20.7583 19.288 20.4627C18.9979 20.167 18.5231 20.1625 18.2274 20.4526L19.278 21.5233ZM16.75 13V15.7H18.25V13H16.75ZM13 18.25H15.7V16.75H13V18.25ZM22 16.75H19.3V18.25H22V16.75ZM18.25 22V19.3H16.75V22H18.25ZM13.4767 15.722C13.4247 15.775 13.3491 15.8415 13.23 15.9463C13.1218 16.0415 12.9869 16.1608 12.8592 16.2897C12.7332 16.4169 12.5913 16.5759 12.4778 16.759C12.3662 16.9391 12.25 17.1939 12.25 17.5H13.75C13.75 17.5764 13.7223 17.5985 13.7529 17.5491C13.7816 17.5027 13.8358 17.4353 13.9247 17.3455C14.012 17.2574 14.1111 17.1691 14.2212 17.0722C14.3204 16.9848 14.4473 16.8746 14.5474 16.7726L13.4767 15.722ZM14.5474 18.2274C14.4473 18.1254 14.3204 18.0152 14.2212 17.9278C14.1111 17.8309 14.012 17.7426 13.9247 17.6545C13.8358 17.5647 13.7816 17.4973 13.7529 17.4509C13.7223 17.4015 13.75 17.4236 13.75 17.5H12.25C12.25 17.8061 12.3662 18.0609 12.4778 18.241C12.5913 18.4241 12.7332 18.5831 12.8592 18.7103C12.9869 18.8392 13.1218 18.9585 13.23 19.0537C13.3491 19.1585 13.4247 19.225 13.4767 19.278L14.5474 18.2274ZM15.722 21.5233C15.775 21.5753 15.8415 21.6509 15.9463 21.77C16.0415 21.8782 16.1608 22.0131 16.2897 22.1408C16.4169 22.2668 16.5759 22.4087 16.759 22.5222C16.9391 22.6338 17.1939 22.75 17.5 22.75V21.25C17.5764 21.25 17.5985 21.2777 17.5491 21.2471C17.5027 21.2184 17.4353 21.1642 17.3455 21.0753C17.2574 20.988 17.1691 20.8889 17.0722 20.7788C16.9848 20.6796 16.8746 20.5527 16.7726 20.4526L15.722 21.5233ZM18.2274 20.4526C18.1254 20.5527 18.0152 20.6796 17.9278 20.7788C17.8309 20.8889 17.7426 20.988 17.6545 21.0753C17.5647 21.1642 17.4973 21.2184 17.4509 21.2471C17.4015 21.2777 17.4236 21.25 17.5 21.25V22.75C17.8061 22.75 18.0609 22.6338 18.241 22.5222C18.4241 22.4087 18.5831 22.2668 18.7103 22.1408C18.8392 22.0131 18.9585 21.8782 19.0537 21.77C19.1585 21.6509 19.225 21.5753 19.278 21.5233L18.2274 20.4526ZM21.5233 19.278C21.5753 19.225 21.6509 19.1585 21.77 19.0537C21.8782 18.9585 22.0131 18.8392 22.1408 18.7103C22.2668 18.5831 22.4087 18.4241 22.5222 18.241C22.6338 18.0609 22.75 17.8061 22.75 17.5H21.25C21.25 17.4236 21.2777 17.4015 21.2471 17.4509C21.2184 17.4973 21.1642 17.5647 21.0753 17.6545C20.988 17.7426 20.8889 17.8309 20.7788 17.9278C20.6796 18.0152 20.5527 18.1254 20.4526 18.2274L21.5233 19.278ZM20.4526 16.7726C20.5527 16.8746 20.6796 16.9848 20.7788 17.0722C20.8889 17.1691 20.988 17.2574 21.0753 17.3455C21.1642 17.4353 21.2184 17.5027 21.2471 17.5491C21.2777 17.5985 21.25 17.5764 21.25 17.5H22.75C22.75 17.1939 22.6338 16.9391 22.5222 16.759C22.4087 16.5759 22.2668 16.4169 22.1408 16.2897C22.0131 16.1608 21.8782 16.0415 21.77 15.9463C21.6509 15.8415 21.5753 15.775 21.5233 15.722L20.4526 16.7726ZM19.278 13.4767C19.225 13.4247 19.1585 13.3491 19.0537 13.23C18.9585 13.1218 18.8392 12.9869 18.7103 12.8592C18.5831 12.7332 18.4241 12.5913 18.241 12.4778C18.0609 12.3662 17.8061 12.25 17.5 12.25V13.75C17.4236 13.75 17.4015 13.7223 17.4509 13.7529C17.4973 13.7816 17.5647 13.8358 17.6545 13.9247C17.7426 14.012 17.8309 14.1111 17.9278 14.2212C18.0152 14.3204 18.1254 14.4473 18.2274 14.5474L19.278 13.4767ZM16.7726 14.5474C16.8746 14.4473 16.9848 14.3204 17.0722 14.2212C17.1691 14.1111 17.2574 14.012 17.3455 13.9247C17.4353 13.8358 17.5027 13.7816 17.5491 13.7529C17.5985 13.7223 17.5764 13.75 17.5 13.75V12.25C17.1939 12.25 16.9391 12.3662 16.759 12.4778C16.5759 12.5913 16.4169 12.7332 16.2897 12.8592C16.1608 12.9869 16.0415 13.1218 15.9463 13.23C15.8415 13.3491 15.775 13.4247 15.722 13.4767L16.7726 14.5474Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
