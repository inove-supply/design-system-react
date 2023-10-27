export const WorkflowSquare10Icon = ({
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
        d="M9.69406 3.61983C10.8161 2.5328 11.3771 1.98929 12.0634 2.00016C12.7496 2.01103 13.2931 2.57204 14.3802 3.69406C15.4672 4.81608 16.0107 5.3771 15.9998 6.06336C15.989 6.74962 15.428 7.29314 14.3059 8.38017C13.1839 9.4672 12.6229 10.0107 11.9366 9.99984C11.2504 9.98897 10.7069 9.42796 9.61983 8.30594C8.5328 7.18391 7.98929 6.6229 8.00016 5.93664C8.01103 5.25038 8.57204 4.70686 9.69406 3.61983Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M7 13.5C7 14.8807 5.88071 16 4.5 16C3.11929 16 2 14.8807 2 13.5C2 12.1193 3.11929 11 4.5 11C5.88071 11 7 12.1193 7 13.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M22 13.5C22 12.1193 20.8807 11 19.5 11C18.1193 11 17 12.1193 17 13.5C17 14.8807 18.1193 16 19.5 16C20.8807 16 22 14.8807 22 13.5Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M12 10L12 17"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8.5L6.5 11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 8.5L17.5 11.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19.4C9.5 18.2686 9.5 17.7029 9.85147 17.3515C10.2029 17 10.7686 17 11.9 17H12.1C13.2314 17 13.7971 17 14.1485 17.3515C14.5 17.7029 14.5 18.2686 14.5 19.4V19.6C14.5 20.7314 14.5 21.2971 14.1485 21.6485C13.7971 22 13.2314 22 12.1 22H11.9C10.7686 22 10.2029 22 9.85147 21.6485C9.5 21.2971 9.5 20.7314 9.5 19.6V19.4Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
    </svg>
  )
}
