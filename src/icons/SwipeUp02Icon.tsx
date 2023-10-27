export const SwipeUp02Icon = ({
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
        d="M16.8209 11.9618L16.2889 12.4905L16.8209 11.9618ZM16.4983 17.6892L17.1748 18.0131L17.1748 18.0131L16.4983 17.6892ZM14.6417 22C14.6417 22.4142 14.9775 22.75 15.3917 22.75C15.8059 22.75 16.1417 22.4142 16.1417 22H14.6417ZM5.74986 14C5.74986 14.4142 6.08564 14.75 6.49986 14.75C6.91407 14.75 7.24986 14.4142 7.24986 14H5.74986ZM9.99986 9.5H9.24986C9.24986 9.70469 9.33352 9.90049 9.48144 10.042C9.62936 10.1835 9.82868 10.2584 10.0332 10.2493L9.99986 9.5ZM5.75 22C5.75 22.4142 6.08579 22.75 6.5 22.75C6.91421 22.75 7.25 22.4142 7.25 22H5.75ZM4.17457 17.0914L3.5335 17.4807L3.5335 17.4807L4.17457 17.0914ZM3.12367 13.6086L3.83213 13.8547H3.83213L3.12367 13.6086ZM6.95162 10.5988C7.28232 10.3494 7.34821 9.87908 7.09878 9.54838C6.84936 9.21768 6.37908 9.15179 6.04838 9.40122L6.95162 10.5988ZM16.2889 12.4905C16.7051 12.9093 16.842 13.6569 16.6901 14.671C16.5438 15.6486 16.1568 16.6658 15.8219 17.3653L17.1748 18.0131C17.5469 17.2359 17.9974 16.0699 18.1736 14.8931C18.3443 13.7529 18.2889 12.3751 17.3529 11.4332L16.2889 12.4905ZM15.8219 17.3653C15.7382 17.54 15.633 17.7297 15.5094 17.9507C15.3899 18.1644 15.2544 18.4053 15.1308 18.6526C14.8895 19.1351 14.6417 19.7383 14.6417 20.382H16.1417C16.1417 20.1001 16.256 19.7563 16.4724 19.3235C16.5775 19.1132 16.6948 18.9043 16.8186 18.6828C16.9384 18.4687 17.0672 18.2378 17.1748 18.0131L15.8219 17.3653ZM14.6417 20.382V22H16.1417V20.382H14.6417ZM5.74986 3.75V14H7.24986V3.75H5.74986ZM9.24986 3.75V9.5H10.7499V3.75H9.24986ZM10.0332 10.2493C11.6368 10.1779 14.3677 10.557 16.2889 12.4905L17.3529 11.4332C15.011 9.07631 11.7794 8.67013 9.96654 8.75074L10.0332 10.2493ZM7.24986 3.75C7.24986 3.19772 7.69757 2.75 8.24986 2.75V1.25C6.86914 1.25 5.74986 2.36929 5.74986 3.75H7.24986ZM8.24986 2.75C8.80214 2.75 9.24986 3.19772 9.24986 3.75H10.7499C10.7499 2.36929 9.63057 1.25 8.24986 1.25V2.75ZM5.75 21.0049V22H7.25V21.0049H5.75ZM3.5335 17.4807C3.68109 17.7237 3.9139 18.036 4.14796 18.3478C4.39257 18.6736 4.65864 19.0247 4.90933 19.3828C5.16099 19.7424 5.38197 20.088 5.53771 20.395C5.70348 20.7219 5.75 20.919 5.75 21.0049H7.25C7.25 20.5542 7.06801 20.0961 6.87547 19.7165C6.6729 19.3171 6.40577 18.905 6.13824 18.5227C5.86974 18.1391 5.58554 17.7642 5.34751 17.4472C5.09892 17.1161 4.91672 16.8686 4.81564 16.7021L3.5335 17.4807ZM3.83213 13.8547C3.91172 13.6256 4.11441 13.3043 4.43705 12.9192C4.74908 12.5468 5.1305 12.1646 5.50835 11.8154C5.88448 11.4678 6.2471 11.1622 6.51624 10.9431C6.6505 10.8338 6.76074 10.7467 6.83681 10.6873C6.87482 10.6577 6.90425 10.635 6.92382 10.62C6.93361 10.6125 6.94092 10.6069 6.94561 10.6033C6.94795 10.6016 6.94964 10.6003 6.95065 10.5995C6.95115 10.5991 6.95148 10.5989 6.95165 10.5988C6.95173 10.5987 6.95177 10.5987 6.95176 10.5987C6.95176 10.5987 6.95172 10.5987 6.95172 10.5987C6.95168 10.5987 6.95162 10.5988 6.5 10C6.04838 9.40122 6.0483 9.40128 6.04821 9.40135C6.04817 9.40138 6.04806 9.40146 6.04798 9.40152C6.0478 9.40166 6.04757 9.40183 6.0473 9.40203C6.04677 9.40243 6.04606 9.40297 6.04518 9.40364C6.04342 9.40497 6.04097 9.40683 6.03786 9.40919C6.03163 9.41393 6.02273 9.42071 6.01133 9.42945C5.98852 9.44693 5.95567 9.47226 5.91406 9.50473C5.83087 9.56964 5.71249 9.66323 5.56928 9.77981C5.28349 10.0124 4.89578 10.3391 4.49033 10.7138C4.0866 11.0868 3.65518 11.5168 3.28728 11.9559C2.92998 12.3824 2.58563 12.8719 2.41521 13.3624L3.83213 13.8547ZM4.81564 16.7022C4.46505 16.1248 4.14346 15.6558 3.93458 15.1488C3.739 14.674 3.68935 14.2657 3.83213 13.8547L2.41521 13.3624C2.11226 14.2344 2.26691 15.0386 2.54765 15.7201C2.81509 16.3693 3.24181 17.0003 3.5335 17.4807L4.81564 16.7022Z"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
      />
      <path
        d="M18.5 2L18.5 8M18.5 2C17.7998 2 16.4915 3.9943 16 4.5M18.5 2C19.2002 2 20.5085 3.9943 21 4.5"
        strokeWidth={strokeWidth}
        style={{ strokeWidth: `${strokeWidth} !important` }}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
