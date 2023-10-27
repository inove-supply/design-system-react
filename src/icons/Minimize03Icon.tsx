export const Minimize03Icon = ({
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
        d="M7.49986 5.56081C7.20697 5.8537 6.73209 5.8537 6.4392 5.56081C6.14631 5.26792 6.14631 4.79304 6.4392 4.50015L7.49986 5.56081ZM5.14141 8.15187L5.88908 8.21094V8.21094L5.14141 8.15187ZM5.77815 9.61488C5.74553 10.0278 5.38434 10.3361 4.97141 10.3035C4.55848 10.2708 4.25019 9.90966 4.28281 9.49673L5.77815 9.61488ZM2.50352 7.71745C2.09059 7.75008 1.7294 7.44178 1.69677 7.02886C1.66415 6.61593 1.97245 6.25474 2.38537 6.22212L2.50352 7.71745ZM3.84839 6.85886L3.78932 6.11119H3.78932L3.84839 6.85886ZM8.15073 5.14168L8.2098 5.88935L8.2098 5.88935L8.15073 5.14168ZM9.4956 4.28308C9.90853 4.25046 10.2697 4.55876 10.3023 4.97168C10.335 5.38461 10.0267 5.7458 9.61375 5.77842L9.4956 4.28308ZM6.22097 2.38566C6.25359 1.97274 6.61478 1.66444 7.02771 1.69707C7.44064 1.72969 7.74893 2.09088 7.71631 2.50381L6.22097 2.38566ZM6.85771 3.84867L6.11004 3.7896V3.7896L6.85771 3.84867ZM6.96864 5.03075L6.43831 5.56109L6.96864 5.03075ZM2.53033 10.5303C2.23744 10.8232 1.76256 10.8232 1.46967 10.5303C1.17678 10.2374 1.17678 9.76256 1.46967 9.46967L2.53033 10.5303ZM9.46967 1.46967C9.76256 1.17678 10.2374 1.17678 10.5303 1.46967C10.8232 1.76256 10.8232 2.23744 10.5303 2.53033L9.46967 1.46967ZM5.88908 8.21094L5.77815 9.61488L4.28281 9.49673L4.39374 8.0928L5.88908 8.21094ZM2.38537 6.22212L3.78932 6.11119L3.90746 7.60653L2.50352 7.71745L2.38537 6.22212ZM4.39374 8.0928C4.40703 7.92457 4.41761 7.78998 4.42385 7.67421C4.43012 7.55773 4.43078 7.47984 4.42774 7.42546C4.42145 7.3132 4.40451 7.4042 4.50016 7.49984L5.56081 6.43918C5.84581 6.72417 5.91048 7.07545 5.92539 7.34157C5.9395 7.59351 5.91348 7.90204 5.88908 8.21094L4.39374 8.0928ZM3.78932 6.11119C4.09804 6.0868 4.40653 6.06071 4.6583 6.07473C4.92437 6.08954 5.27571 6.15408 5.56081 6.43918L4.50015 7.49984C4.5959 7.59558 4.6871 7.57865 4.57492 7.57241C4.52056 7.56938 4.44268 7.57007 4.32617 7.57637C4.21036 7.58263 4.07577 7.59323 3.90746 7.60653L3.78932 6.11119ZM8.09166 4.39401L9.4956 4.28308L9.61375 5.77842L8.2098 5.88935L8.09166 4.39401ZM7.71631 2.50381L7.60538 3.90774L6.11004 3.7896L6.22097 2.38566L7.71631 2.50381ZM8.2098 5.88935C7.90092 5.91375 7.59243 5.93977 7.34055 5.92566C7.07436 5.91074 6.72324 5.84602 6.43831 5.56109L7.49896 4.50042C7.40339 4.40485 7.3124 4.42173 7.42447 4.42801C7.4788 4.43105 7.55665 4.43039 7.6731 4.42412C7.78885 4.41788 7.92342 4.4073 8.09166 4.39401L8.2098 5.88935ZM7.60538 3.90774C7.59209 4.07598 7.58151 4.21055 7.57527 4.3263C7.569 4.44275 7.56834 4.5206 7.57138 4.57493C7.57766 4.68699 7.59454 4.596 7.49896 4.50042L6.43831 5.56109C6.15337 5.27615 6.08865 4.92503 6.07373 4.65884C6.05962 4.40696 6.08564 4.09848 6.11004 3.7896L7.60538 3.90774ZM5.56081 7.49984L2.53033 10.5303L1.46967 9.46967L4.50015 6.43918L5.56081 7.49984ZM10.5303 2.53033L7.49986 5.56081L6.4392 4.50015L9.46967 1.46967L10.5303 2.53033Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
