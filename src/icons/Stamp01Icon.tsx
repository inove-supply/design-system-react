export const Stamp01Icon = ({
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
        d="M5.5 19C5.51582 20.2398 5.59692 20.9427 6.01278 21.4142C6.52939 22 7.36086 22 9.0238 22H15.9762C17.6391 22 18.4706 22 18.9872 21.4142C19.4031 20.9427 19.4842 20.2398 19.5 19"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.93836 18.9251L4.91618 19.6748H4.91618L4.93836 18.9251ZM20.9956 17.9485H20.2456V17.9848L20.2491 18.0209L20.9956 17.9485ZM9.69074 8.49976L9.02552 8.84613V8.84613L9.69074 8.49976ZM15.3097 8.5L15.9748 8.84659V8.84659L15.3097 8.5ZM17.2874 13.962L17.4661 13.2336L17.2874 13.962ZM6.8456 14.2773L7.14999 14.9627L6.8456 14.2773ZM4.00892 17.7972L4.75238 17.896L4.00892 17.7972ZM4.0372 17.5432L3.28834 17.5018L4.0372 17.5432ZM4.96053 18.1755C4.85491 18.1723 4.73023 18.0627 4.75238 17.896L3.26545 17.6984C3.13461 18.6831 3.85908 19.6435 4.91618 19.6748L4.96053 18.1755ZM20.2491 18.0209C20.2539 18.07 20.238 18.1105 20.2134 18.1385C20.1893 18.166 20.1631 18.1756 20.1381 18.1756V19.6756C21.1155 19.6756 21.8332 18.815 21.7421 17.8761L20.2491 18.0209ZM20.1381 18.1756C14.4146 18.1756 10.6344 18.3433 4.96053 18.1755L4.91618 19.6748C10.6144 19.8434 14.4846 19.6756 20.1381 19.6756V18.1756ZM9.47222 5.67614C9.47222 4.07923 10.8084 2.75 12.5 2.75V1.25C10.0188 1.25 7.97222 3.2125 7.97222 5.67614H9.47222ZM12.5 2.75C14.1916 2.75 15.5278 4.07923 15.5278 5.67614H17.0278C17.0278 3.2125 14.9812 1.25 12.5 1.25V2.75ZM7.97222 5.67614C7.97222 6.94081 8.52105 7.87729 9.02552 8.84613L10.356 8.15338C9.80104 7.08764 9.47222 6.49996 9.47222 5.67614H7.97222ZM15.5278 5.67614C15.5278 6.50231 15.1993 7.08884 14.6445 8.15341L15.9748 8.84659C16.4795 7.87803 17.0278 6.94314 17.0278 5.67614H15.5278ZM6.54121 13.5918C4.42695 14.5307 3.36765 16.0659 3.28834 17.5018L4.78606 17.5846C4.82642 16.8539 5.40479 15.7377 7.14999 14.9627L6.54121 13.5918ZM17.9277 14.9349C19.71 15.779 20.2456 16.9322 20.2456 17.9485H21.7456C21.7456 16.2668 20.7938 14.6326 18.5698 13.5793L17.9277 14.9349ZM7.79977 14.7665C9.30932 14.3814 10.3394 13.4119 10.7785 12.1502C11.2101 10.9099 11.0431 9.47303 10.356 8.15338L9.02552 8.84613C9.55862 9.86996 9.63347 10.8765 9.36182 11.6572C9.09764 12.4163 8.47945 13.0451 7.42899 13.3131L7.79977 14.7665ZM17.4661 13.2336C16.4591 12.9866 15.8724 12.3754 15.6247 11.6245C15.3686 10.8481 15.4539 9.84622 15.9748 8.84659L14.6445 8.15341C13.9723 9.44356 13.7949 10.8657 14.2002 12.0944C14.6139 13.3486 15.6127 14.3235 17.1088 14.6904L17.4661 13.2336ZM18.5698 13.5793C18.1805 13.3949 17.7571 13.305 17.4661 13.2336L17.1088 14.6904C17.4701 14.779 17.71 14.8318 17.9277 14.9349L18.5698 13.5793ZM7.14999 14.9627C7.32399 14.8855 7.51571 14.839 7.79977 14.7665L7.42899 13.3131C7.19328 13.3732 6.85746 13.4514 6.54121 13.5918L7.14999 14.9627ZM4.75238 17.896C4.76158 17.8268 4.77935 17.706 4.78606 17.5846L3.28834 17.5018C3.28565 17.5505 3.2787 17.5987 3.26545 17.6984L4.75238 17.896Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
