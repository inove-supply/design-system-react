import React, { ComponentType, useState } from "react";

import iconMap from "../../icons/_iconMap";
import { NavigationProps } from "./MenuHorizontal.types";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./styles.css";
import { CaretDownIcon } from "@radix-ui/react-icons";

function LinkComponent<T extends React.ElementType>({
  nextLink,
  href,
  icon,
  label,
  customClass,
}: NavigationProps<T>) {
  const Component = nextLink as ComponentType<any>;

  const Icon = icon ? iconMap[icon] : null;

  return (
    <Component className={`flex gap-2 items-center ${customClass}`} href={href}>
      {Icon && <Icon strokeWidth={1.5} />} {label}
    </Component>
  );
}

const Categories = ({ navigation }: { navigation: NavigationProps[] }) => {
  return navigation.map((item) => (
    <NavigationMenu.Item>
      {item.subNav ? (
        <>
          <NavigationMenu.Trigger className="text-gray-500 font-semibold">
            {item.label} <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <DropdownMenu
              hoveredMenu={item.label}
              navigationDropdown={item.subNav}
            />
          </NavigationMenu.Content>
        </>
      ) : item.nextLink ? (
        <LinkComponent customClass="text-gray-500 font-semibold" {...item} />
      ) : (
        <a
          className="text-gray-500 font-semibold"
          href={item.href}
          target={item.externalLink ? "_blank" : "_self"}
        >
          {item.label}
        </a>
      )}
    </NavigationMenu.Item>
  ));
};
export const SelectedCategoryMenus = ({
  navigationDropdown,
}: {
  navigationDropdown: NavigationProps[];
}) => {
  if (!navigationDropdown) {
    return null;
  }

  return (
    navigationDropdown?.map((subitem) => {
      const Icon = subitem.icon ? iconMap[subitem.icon] : null;

      return (
        <li
          className="text-blue-900 text-base NavigationMenuLink"
          key={subitem.label}
        >
          {subitem.nextLink ? (
            <LinkComponent {...subitem} />
          ) : (
            <a
              target={subitem.externalLink ? "_blank" : "_self"}
              href={subitem.href}
              className="flex gap-2 items-center"
            >
              {Icon && <Icon strokeWidth={1.5} />}
              {subitem.label}
            </a>
          )}
        </li>
      );
    }) ?? []
  );
};

const DropdownMenu = ({
  navigationDropdown,
  hoveredMenu,
}: {
  navigationDropdown: NavigationProps[];
  hoveredMenu: string;
}) => {
  return (
    <ul className="List">
      <div className="HoveredMenu">{hoveredMenu}</div>
      <SelectedCategoryMenus navigationDropdown={navigationDropdown} />
    </ul>
  );
};

export const MenuHorizontal = ({
  navigation,
}: {
  navigation: NavigationProps[];
}) => {
  const Icon = iconMap["HelpIcon"];

  return (
    <>
      <NavigationMenu.Root delayDuration={0} className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList gap-6">
          <Categories navigation={navigation} />

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </>
  );
};
