export const Maximize03Icon = ({
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
        d="M14.9281 7.78146L15.818 8.02144C16.8009 8.28651 17.3843 9.30336 17.1209 10.2926M17.1209 10.2926L16.8824 11.1882M17.1209 10.2926C17.2526 9.798 17.7577 9.50446 18.2492 9.63699C19.2321 9.90207 19.8155 10.9189 19.5521 11.9082M19.5521 11.9082L19.3136 12.8038M19.5521 11.9082C19.6769 11.4394 20.1901 11.1955 20.6291 11.3965L20.9202 11.5298C21.74 11.9052 22.1701 12.8221 21.937 13.6977L21.5855 15.0165C21.0673 16.963 20.8081 17.9362 20.3072 18.6316C20.0167 19.035 19.4132 19.4866 18.9425 19.8036C18.5353 20.0778 18.2232 20.4807 18.0964 20.957L17.8187 22M14.451 9.57264L16.0009 3.75113C16.1985 3.00918 15.761 2.24654 15.0238 2.04774C14.2866 1.84893 13.5288 2.28924 13.3313 3.03119L10.9556 11.9537L9.90131 10.1091C9.43871 9.29977 8.3811 9.07701 7.63441 9.63163C7.06306 10.056 6.84799 10.8163 7.11154 11.48L9.21843 16.4621C9.62153 17.4153 9.6312 18.7195 9.3648 19.7202"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.27766 9.96344L3.33673 10.7111H3.33673L3.27766 9.96344ZM4.56605 9.10931C4.97898 9.07669 5.34017 9.38498 5.3728 9.79791C5.40542 10.2108 5.09713 10.572 4.6842 10.6047L4.56605 9.10931ZM1.39544 7.3159C1.42807 6.90297 1.78926 6.59467 2.20218 6.6273C2.61511 6.65992 2.92341 7.02111 2.89078 7.43404L1.39544 7.3159ZM2.03665 8.72244L1.28898 8.66336L2.03665 8.72244ZM9.96354 3.27756L10.7112 3.33664L10.7112 3.33664L9.96354 3.27756ZM10.6047 4.6841C10.5721 5.09703 10.2109 5.40533 9.798 5.3727C9.38508 5.34008 9.07678 4.97889 9.10941 4.56596L10.6047 4.6841ZM7.43414 2.89069C7.02121 2.92331 6.66002 2.61502 6.62739 2.20209C6.59477 1.78916 6.90306 1.42797 7.31599 1.39535L7.43414 2.89069ZM8.72253 2.03656L8.66346 1.28889H8.66346L8.72253 2.03656ZM7.41922 5.64127C7.12633 5.93416 6.65145 5.93416 6.35856 5.64127C6.06567 5.34838 6.06567 4.8735 6.35856 4.58061L7.41922 5.64127ZM4.5808 6.35854C4.8737 6.06566 5.34857 6.06567 5.64146 6.35857C5.93434 6.65147 5.93433 7.12635 5.64143 7.41923L4.5808 6.35854ZM3.21859 9.21577L4.56605 9.10931L4.6842 10.6047L3.33673 10.7111L3.21859 9.21577ZM2.89078 7.43404L2.78432 8.78151L1.28898 8.66336L1.39544 7.3159L2.89078 7.43404ZM3.33673 10.7111C3.04113 10.7345 2.74259 10.7597 2.49826 10.746C2.23975 10.7315 1.89371 10.6685 1.61252 10.3873L2.67318 9.32665C2.57373 9.2272 2.47749 9.2425 2.58215 9.24836C2.63272 9.25119 2.70622 9.25062 2.81758 9.24463C2.92824 9.23866 3.05701 9.22854 3.21859 9.21577L3.33673 10.7111ZM2.78432 8.78151C2.77155 8.94316 2.76141 9.07193 2.75542 9.18263C2.74939 9.29403 2.7488 9.36751 2.75162 9.41807C2.75744 9.52264 2.77273 9.4262 2.67318 9.32665L1.61252 10.3873C1.33123 10.106 1.26832 9.75991 1.25394 9.50144C1.24034 9.25729 1.26564 8.95878 1.28898 8.66336L2.78432 8.78151ZM10.7112 3.33664L10.6047 4.6841L9.10941 4.56596L9.21587 3.21849L10.7112 3.33664ZM7.31599 1.39535L8.66346 1.28889L8.7816 2.78423L7.43414 2.89069L7.31599 1.39535ZM9.21587 3.21849C9.22863 3.05698 9.23874 2.92824 9.24467 2.81767C9.25064 2.70639 9.25119 2.63296 9.24834 2.58247C9.24245 2.47813 9.22727 2.57413 9.32648 2.67335L10.3871 1.61269C10.6681 1.89364 10.7314 2.23932 10.746 2.49801C10.7597 2.7424 10.7346 3.0409 10.7112 3.33664L9.21587 3.21849ZM8.66346 1.28889C8.959 1.26554 9.25747 1.2403 9.50169 1.25399C9.76034 1.26849 10.1061 1.33163 10.3871 1.61269L9.32648 2.67335C9.4258 2.77266 9.522 2.75748 9.41775 2.75164C9.36727 2.74881 9.29386 2.74937 9.18254 2.75537C9.07193 2.76133 8.94319 2.77146 8.7816 2.78423L8.66346 1.28889ZM6.35856 4.58061L9.32648 1.61269L10.3871 2.67335L7.41922 5.64127L6.35856 4.58061ZM1.61253 9.32664L4.5808 6.35854L5.64143 7.41923L2.67316 10.3873L1.61253 9.32664Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
