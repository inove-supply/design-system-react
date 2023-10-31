export interface NavigationProps {
  label: string;
  href?: string;
  nextLink?: JSX.Element;
  icon?: string;
  subNav?: NavigationProps[];
}
