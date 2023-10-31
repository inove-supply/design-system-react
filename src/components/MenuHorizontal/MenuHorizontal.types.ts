export interface NavigationProps<T extends React.ElementType = "a"> {
  label: string;
  href?: string;
  nextLink?: T;
  icon?: string;
  subNav?: NavigationProps[];
}
