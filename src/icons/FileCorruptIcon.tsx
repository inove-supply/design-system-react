export const FileCorruptIcon = ({
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
        d="M17.7352 2.25223L17.4868 2.95989V2.95989L17.7352 2.25223ZM20.232 4.60248L20.9293 4.3262V4.3262L20.232 4.60248ZM3.96894 6.55435L4.66619 6.83063L4.6662 6.83063L3.96894 6.55435ZM8.33836 2.44141L8.58681 3.14906V3.14906L8.33836 2.44141ZM5.20307 21.2047L4.77106 21.8178L4.77106 21.8178L5.20307 21.2047ZM4.3477 20.3995L4.9347 19.9327H4.9347L4.3477 20.3995ZM19.2552 20.8309L19.7693 21.377L19.2552 20.8309ZM15.1896 21.9676L14.6433 22.4814C14.792 22.6396 15.002 22.7255 15.2189 22.717L15.1896 21.9676ZM13.328 14.0338L13.8811 14.5404H13.8811L13.328 14.0338ZM15.7427 12.5078C16.0224 12.2023 16.0016 11.7279 15.6961 11.4481C15.3907 11.1684 14.9162 11.1892 14.6365 11.4947L15.7427 12.5078ZM13.328 19.9884L12.7749 20.495L12.7817 20.5023L13.328 19.9884ZM14.4684 16.3362L14.9809 15.7886L14.4684 16.3362ZM9.87235 22.75C10.2866 22.7526 10.6245 22.4189 10.6271 22.0047C10.6297 21.5905 10.296 21.2526 9.8818 21.25L9.87235 22.75ZM4.25 14.7289V12.1832H2.75V14.7289H4.25ZM19.75 7.81895V14.0016H21.25V7.81895H19.75ZM14.3182 2.75C16.1807 2.75 16.9195 2.76071 17.4868 2.95989L17.9837 1.54458C17.1141 1.23929 16.0538 1.25 14.3182 1.25V2.75ZM21.25 7.81895C21.25 6.9821 21.2504 6.31821 21.2149 5.77991C21.1789 5.23492 21.1039 4.76698 20.9293 4.3262L19.5348 4.87876C19.6281 5.11426 19.6871 5.40781 19.7181 5.87862C19.7496 6.35612 19.75 6.96233 19.75 7.81895H21.25ZM17.4868 2.95989C18.4477 3.29724 19.1882 4.00412 19.5348 4.87877L20.9293 4.3262C20.4143 3.02647 19.3328 2.01823 17.9837 1.54458L17.4868 2.95989ZM4.25 12.1832C4.25 10.6915 4.25038 9.60899 4.30699 8.75057C4.36316 7.89884 4.4724 7.31972 4.66619 6.83063L3.27168 6.27807C2.99654 6.97244 2.87131 7.72594 2.81024 8.65186C2.74962 9.57108 2.75 10.7113 2.75 12.1832H4.25ZM14.3182 1.25C11.2333 1.25 9.4983 1.23929 8.08991 1.73376L8.58681 3.14906C9.69296 2.76071 11.1063 2.75 14.3182 2.75V1.25ZM4.6662 6.83063C5.33585 5.14059 6.75969 3.79054 8.58681 3.14906L8.08991 1.73376C5.87459 2.51153 4.10978 4.16294 3.27168 6.27807L4.6662 6.83063ZM2.75 14.7289C2.75 16.2457 2.74879 17.4487 2.8611 18.4033C2.97548 19.3756 3.21583 20.1812 3.7607 20.8664L4.9347 19.9327C4.63187 19.5519 4.44837 19.0571 4.35083 18.228C4.25121 17.3813 4.25 16.282 4.25 14.7289H2.75ZM5.63508 20.5916C5.36798 20.4034 5.13238 20.1813 4.9347 19.9327L3.7607 20.8664C4.04878 21.2286 4.38926 21.5487 4.77106 21.8178L5.63508 20.5916ZM19.75 14.0016C19.75 15.9099 19.7482 17.2611 19.6019 18.2852C19.4594 19.2828 19.1932 19.8593 18.7411 20.2848L19.7693 21.377C20.562 20.6308 20.9182 19.6785 21.0869 18.4973C21.2518 17.3426 21.25 15.865 21.25 14.0016H19.75ZM15.2189 22.717C17.2105 22.639 18.6908 22.3922 19.7693 21.377L18.7411 20.2848C18.1029 20.8856 17.1449 21.1404 15.1602 21.2181L15.2189 22.717ZM13.8811 14.5404L15.7427 12.5078L14.6365 11.4947L12.7749 13.5273L13.8811 14.5404ZM15.7359 21.4537L13.8743 19.4746L12.7817 20.5023L14.6433 22.4814L15.7359 21.4537ZM14.9809 15.7886C14.8248 15.6425 14.5816 15.4426 14.421 15.3018C14.2318 15.1361 14.0749 14.985 13.9633 14.843C13.8471 14.6953 13.8302 14.6198 13.8288 14.6069C13.8286 14.6055 13.8289 14.6071 13.8285 14.6104C13.8281 14.6138 13.8275 14.6156 13.8277 14.6148C13.8279 14.6142 13.8368 14.5887 13.8811 14.5404L12.7749 13.5273C12.4477 13.8846 12.2887 14.3114 12.3373 14.7662C12.3815 15.1806 12.5888 15.5217 12.7842 15.7703C12.9843 16.0246 13.2264 16.2495 13.4325 16.4301C13.6672 16.6357 13.8155 16.7524 13.9559 16.8838L14.9809 15.7886ZM13.8811 19.4819C13.7986 19.3918 13.8101 19.3649 13.814 19.3971C13.8178 19.429 13.8033 19.4297 13.8327 19.375C13.9182 19.2155 14.1174 19.0267 14.4696 18.709C14.7473 18.4586 15.1922 18.0699 15.4084 17.6051C15.5315 17.3404 15.6004 17.0163 15.5185 16.661C15.4387 16.3154 15.2362 16.0276 14.9809 15.7886L13.9559 16.8838C14.067 16.9877 14.0636 17.0275 14.0569 16.9982C14.0478 16.9591 14.0635 16.9398 14.0483 16.9725C13.9879 17.1025 13.8158 17.2788 13.4651 17.5951C13.1888 17.8442 12.748 18.2238 12.5108 18.6659C12.3788 18.912 12.2824 19.2218 12.3245 19.575C12.3668 19.9286 12.5371 20.2353 12.7749 20.495L13.8811 19.4819ZM9.8818 21.25C8.68764 21.2425 7.80905 21.2129 7.11809 21.1097C6.439 21.0082 5.99033 20.8419 5.63508 20.5916L4.77106 21.8178C5.37984 22.2467 6.07574 22.4706 6.89643 22.5932C7.70525 22.7141 8.68164 22.7425 9.87235 22.75L9.8818 21.25Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
