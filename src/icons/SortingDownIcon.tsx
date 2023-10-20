export const SortingDownIcon = ({
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
        d="M6 15L18.0001 15.0001"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11H21"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5303 6.73744C10.8232 6.44454 10.8232 5.96967 10.5303 5.67678C10.2374 5.38388 9.76256 5.38388 9.46967 5.67678L10.5303 6.73744ZM8.70711 7.5L8.17678 6.96967L8.70711 7.5ZM7.29289 7.5L7.82322 6.96967L7.82322 6.96967L7.29289 7.5ZM6.53033 5.67678C6.23744 5.38388 5.76256 5.38388 5.46967 5.67678C5.17678 5.96967 5.17678 6.44454 5.46967 6.73744L6.53033 5.67678ZM8 8L8 8.75L8 8ZM8.75 2C8.75 1.58579 8.41421 1.25 8 1.25C7.58579 1.25 7.25 1.58579 7.25 2L8.75 2ZM9.46967 5.67678L8.17678 6.96967L9.23744 8.03033L10.5303 6.73744L9.46967 5.67678ZM7.82322 6.96967L6.53033 5.67678L5.46967 6.73744L6.76256 8.03033L7.82322 6.96967ZM8.17678 6.96967C8.09147 7.05498 8.02581 7.12057 7.96834 7.17521C7.9106 7.23011 7.87451 7.26101 7.85128 7.27873C7.82844 7.29616 7.83409 7.2883 7.86231 7.27653C7.89651 7.26227 7.94506 7.25 8 7.25L8 8.75C8.33347 8.75 8.58522 8.6055 8.76115 8.47127C8.91978 8.35024 9.08576 8.182 9.23744 8.03033L8.17678 6.96967ZM6.76256 8.03033C6.91424 8.182 7.08022 8.35024 7.23885 8.47127C7.41478 8.6055 7.66653 8.75 8 8.75L8 7.25C8.05494 7.25 8.10349 7.26227 8.13769 7.27653C8.16591 7.2883 8.17156 7.29616 8.14872 7.27873C8.12548 7.26101 8.0894 7.23011 8.03166 7.17521C7.97419 7.12057 7.90853 7.05497 7.82322 6.96967L6.76256 8.03033ZM8.75 8L8.75 2L7.25 2L7.25 8H8.75Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M18.5303 6.73744C18.8232 6.44454 18.8232 5.96967 18.5303 5.67678C18.2374 5.38388 17.7626 5.38388 17.4697 5.67678L18.5303 6.73744ZM16.7071 7.5L16.1768 6.96967L16.7071 7.5ZM15.2929 7.5L15.8232 6.96967L15.8232 6.96967L15.2929 7.5ZM14.5303 5.67678C14.2374 5.38388 13.7626 5.38388 13.4697 5.67678C13.1768 5.96967 13.1768 6.44454 13.4697 6.73744L14.5303 5.67678ZM16 8L16 8.75L16 8ZM16.75 2C16.75 1.58579 16.4142 1.25 16 1.25C15.5858 1.25 15.25 1.58579 15.25 2L16.75 2ZM17.4697 5.67678L16.1768 6.96967L17.2374 8.03033L18.5303 6.73744L17.4697 5.67678ZM15.8232 6.96967L14.5303 5.67678L13.4697 6.73744L14.7626 8.03033L15.8232 6.96967ZM16.1768 6.96967C16.0915 7.05498 16.0258 7.12057 15.9683 7.17521C15.9106 7.23011 15.8745 7.26101 15.8513 7.27873C15.8284 7.29616 15.8341 7.2883 15.8623 7.27653C15.8965 7.26227 15.9451 7.25 16 7.25L16 8.75C16.3335 8.75 16.5852 8.6055 16.7612 8.47127C16.9198 8.35024 17.0858 8.182 17.2374 8.03033L16.1768 6.96967ZM14.7626 8.03033C14.9142 8.182 15.0802 8.35024 15.2388 8.47127C15.4148 8.6055 15.6665 8.75 16 8.75L16 7.25C16.0549 7.25 16.1035 7.26227 16.1377 7.27653C16.1659 7.2883 16.1716 7.29616 16.1487 7.27873C16.1255 7.26101 16.0894 7.23011 16.0317 7.17521C15.9742 7.12057 15.9085 7.05497 15.8232 6.96967L14.7626 8.03033ZM16.75 8L16.75 2L15.25 2L15.25 8H16.75Z"
        strokeWidth={strokeWidth}
      />
      <path
        d="M14.5303 19.7374C14.8232 19.4445 14.8232 18.9697 14.5303 18.6768C14.2374 18.3839 13.7626 18.3839 13.4697 18.6768L14.5303 19.7374ZM12.7071 20.5L12.1768 19.9697L12.7071 20.5ZM11.2929 20.5L11.8232 19.9697L11.8232 19.9697L11.2929 20.5ZM10.5303 18.6768C10.2374 18.3839 9.76256 18.3839 9.46967 18.6768C9.17678 18.9697 9.17678 19.4445 9.46967 19.7374L10.5303 18.6768ZM12 21L12 21.75L12 21ZM12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15H12.75ZM13.4697 18.6768L12.1768 19.9697L13.2374 21.0303L14.5303 19.7374L13.4697 18.6768ZM11.8232 19.9697L10.5303 18.6768L9.46967 19.7374L10.7626 21.0303L11.8232 19.9697ZM12.1768 19.9697C12.0915 20.055 12.0258 20.1206 11.9683 20.1752C11.9106 20.2301 11.8745 20.261 11.8513 20.2787C11.8284 20.2962 11.8341 20.2883 11.8623 20.2765C11.8965 20.2623 11.9451 20.25 12 20.25L12 21.75C12.3335 21.75 12.5852 21.6055 12.7612 21.4713C12.9198 21.3502 13.0858 21.182 13.2374 21.0303L12.1768 19.9697ZM10.7626 21.0303C10.9142 21.182 11.0802 21.3502 11.2388 21.4713C11.4148 21.6055 11.6665 21.75 12 21.75L12 20.25C12.0549 20.25 12.1035 20.2623 12.1377 20.2765C12.1659 20.2883 12.1716 20.2962 12.1487 20.2787C12.1255 20.261 12.0894 20.2301 12.0317 20.1752C11.9742 20.1206 11.9085 20.055 11.8232 19.9697L10.7626 21.0303ZM12.75 21V15H11.25V21H12.75Z"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
