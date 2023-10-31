export const MaximizeIcon = ({
    color = 'gray-500',
    strokeWidth = 2,
    size = 24,
}: {
    color?: string;
    strokeWidth?: number;
    size?: number;
}) => {
    return (
        <svg
            className={`stroke-current text-${color}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M15.8003 8.1997L16.3306 7.66937L16.3306 7.66937L15.8003 8.1997ZM12.8182 7.25C12.404 7.25 12.0682 7.58579 12.0682 8C12.0682 8.41421 12.404 8.75 12.8182 8.75V7.25ZM15.25 11.1818C15.25 11.596 15.5858 11.9318 16 11.9318C16.4142 11.9318 16.75 11.596 16.75 11.1818H15.25ZM9.96967 12.9697C9.67678 13.2626 9.67678 13.7374 9.96967 14.0303C10.2626 14.3232 10.7374 14.3232 11.0303 14.0303L9.96967 12.9697ZM12.8182 8.75H14.6364V7.25H12.8182V8.75ZM15.25 9.36364V11.1818H16.75V9.36364H15.25ZM14.6364 8.75C14.979 8.75 15.1605 8.75159 15.2846 8.76827C15.3871 8.78206 15.3327 8.79276 15.27 8.73003L16.3306 7.66937C16.0682 7.40694 15.7533 7.31779 15.4844 7.28165C15.2372 7.24841 14.9366 7.25 14.6364 7.25V8.75ZM16.75 9.36364C16.75 9.06343 16.7516 8.76282 16.7183 8.51556C16.6822 8.24673 16.5931 7.9318 16.3306 7.66937L15.27 8.73003C15.2072 8.6673 15.2179 8.61293 15.2317 8.71543C15.2484 8.83951 15.25 9.02102 15.25 9.36364H16.75ZM15.27 7.66937L9.96967 12.9697L11.0303 14.0303L16.3306 8.73003L15.27 7.66937Z" />
            <path
                d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H7C8.88562 13 9.82843 13 10.4142 13.5858C11 14.1716 11 15.1144 11 17V18C11 19.8856 11 20.8284 10.4142 21.4142C9.82843 22 8.88562 22 7 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V17Z"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 8.5V10.5M14 2H10M22 14L22 10M13.5 22H15.5M2.05986 5.5C2.21387 4.43442 2.51347 3.67903 3.09625 3.09625C3.67903 2.51347 4.43442 2.21387 5.5 2.05986M18.5 2.05986C19.5656 2.21387 20.321 2.51347 20.9037 3.09625C21.4865 3.67903 21.7861 4.43442 21.9401 5.5M21.9401 18.5C21.7861 19.5656 21.4865 20.321 20.9037 20.9037C20.321 21.4865 19.5656 21.7861 18.5 21.9401"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
