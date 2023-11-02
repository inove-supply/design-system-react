export interface NavigationProps<T extends React.ElementType = "a"> {
  label: string;
  href?: string;
  nextLink?: T;
  externalLink?: boolean;
  icon?: string;
  subNav?: NavigationProps[];
  customClass?: string;
}
