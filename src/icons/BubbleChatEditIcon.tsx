export const BubbleChatEditIcon = ({
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
        d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C12.6849 2 13.3538 2.0659 14 2.19142"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3477 9.85572L15.1909 9.1223H15.1909L15.3477 9.85572ZM14.1443 8.65228L14.8777 8.80911L14.1443 8.65228ZM15.0207 6.11171L14.4903 5.58138H14.4903L15.0207 6.11171ZM17.8883 8.97933L18.4186 9.50966L17.8883 8.97933ZM21.7963 3.47729L22.4458 3.10229L21.7963 3.47729ZM21.1961 5.67149L20.6658 5.14116L21.1961 5.67149ZM21.7963 4.99807L22.4458 5.37307L21.7963 4.99807ZM20.5227 2.20375L20.8977 1.55423V1.55423L20.5227 2.20375ZM18.3285 2.80388L18.8588 3.33421L18.3285 2.80388ZM19.0019 2.20375L18.6269 1.55423V1.55423L19.0019 2.20375ZM20.6658 5.14116L17.358 8.449L18.4186 9.50966L21.7265 6.20182L20.6658 5.14116ZM15.551 6.64205L18.8588 3.33421L17.7982 2.27355L14.4903 5.58138L15.551 6.64205ZM15.1909 9.1223C15.0155 9.15981 14.8753 9.18973 14.7548 9.21212C14.6333 9.23472 14.5536 9.2454 14.4996 9.24884C14.4441 9.25237 14.4479 9.24579 14.4825 9.25471C14.5296 9.26685 14.5936 9.29719 14.6482 9.35178L13.5876 10.4124C13.9113 10.7362 14.3158 10.7636 14.5948 10.7458C14.8603 10.7289 15.1839 10.6577 15.5045 10.5891L15.1909 9.1223ZM13.4109 8.49546C13.3423 8.8161 13.2711 9.13973 13.2542 9.40523C13.2364 9.68419 13.2638 10.0887 13.5876 10.4124L14.6482 9.35178C14.7028 9.40637 14.7331 9.47039 14.7453 9.51747C14.7542 9.55207 14.7476 9.55591 14.7512 9.50044C14.7546 9.44641 14.7653 9.36674 14.7879 9.24519C14.8103 9.12473 14.8402 8.98455 14.8777 8.80911L13.4109 8.49546ZM20.6658 3.33421C21.0333 3.7017 21.1084 3.78597 21.1467 3.85229L22.4458 3.10229C22.2839 2.82184 22.0257 2.57275 21.7265 2.27355L20.6658 3.33421ZM21.7265 6.20182C22.0257 5.90261 22.2839 5.65353 22.4458 5.37307L21.1467 4.62307C21.1084 4.6894 21.0333 4.77367 20.6658 5.14116L21.7265 6.20182ZM21.1467 3.85229C21.2844 4.09077 21.2844 4.38459 21.1467 4.62307L22.4458 5.37307C22.8514 4.67049 22.8514 3.80488 22.4458 3.10229L21.1467 3.85229ZM21.7265 2.27355C21.4272 1.97434 21.1782 1.71615 20.8977 1.55423L20.1477 2.85326C20.214 2.89156 20.2983 2.96671 20.6658 3.33421L21.7265 2.27355ZM18.8588 3.33421C19.2263 2.96672 19.3106 2.89156 19.3769 2.85326L18.6269 1.55423C18.3465 1.71615 18.0974 1.97434 17.7982 2.27355L18.8588 3.33421ZM20.8977 1.55423C20.1951 1.14859 19.3295 1.14859 18.6269 1.55423L19.3769 2.85327C19.6154 2.71558 19.9092 2.71558 20.1477 2.85327L20.8977 1.55423ZM17.358 8.449C17.1624 8.64453 16.8952 8.77096 16.5155 8.8679C16.3253 8.91646 16.1224 8.954 15.8963 8.99307C15.679 9.03061 15.4303 9.07112 15.1909 9.1223L15.5045 10.5891C15.7063 10.546 15.9131 10.5124 16.1517 10.4712C16.3814 10.4315 16.6346 10.3856 16.8866 10.3213C17.3914 10.1924 17.9533 9.97497 18.4186 9.50966L17.358 8.449ZM14.8777 8.80911C14.9289 8.56974 14.9694 8.32097 15.0069 8.1037C15.046 7.87757 15.0835 7.67468 15.1321 7.48447C15.229 7.10477 15.3555 6.83758 15.551 6.64205L14.4903 5.58138C14.025 6.0467 13.8076 6.60863 13.6787 7.11341C13.6144 7.36544 13.5685 7.61864 13.5288 7.84832C13.4876 8.08687 13.454 8.29366 13.4109 8.49546L14.8777 8.80911Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M11.9955 12H12.0045M8 12H8.00897"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
