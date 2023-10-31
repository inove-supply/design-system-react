import { useState } from "react";

import iconMap from "../../icons/_iconMap";
import { NavigationProps } from "./MenuHorizontal.types";

const Categories = ({ navigation }: { navigation: NavigationProps[] }) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleMouseEnter = (item: { label: string }) => {
    setHoveredCategory(item.label);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return navigation.map((item) => (
    <li
      onMouseEnter={() => handleMouseEnter(item)}
      onMouseLeave={handleMouseLeave}
      className="list-none px-3 py-2 cursor-pointer text-base text-gray-400 font-medium hover:text-gray-900"
      key={item.label}
    >
      {item.subNav ? (
        <>
          {item.label}

          {hoveredCategory === item.label && (
            <DropdownMenu
              navigationDropdown={item.subNav}
              handleMouseLeave={handleMouseLeave}
              hoveredMenu={item.label}
            />
          )}
        </>
      ) : item.nextLink ? (
        item.nextLink
      ) : (
        <a href={item.href}>{item.label}</a>
      )}
    </li>
  ));
};
export const SelectedCategoryMenus = ({
  selectedCategory,
  handleMouseLeave,
  navigationDropdown,
}: {
  selectedCategory: string;
  handleMouseLeave: () => void;
  navigationDropdown: NavigationProps[];
}) => {
  if (!navigationDropdown) {
    return null;
  }

  return (
    navigationDropdown?.map((subitem) => {
      const Icon = subitem.icon ? iconMap[subitem.icon] : null;

      return (
        <li className="text-blue-900 text-base" key={subitem.label}>
          <a
            onClick={() => handleMouseLeave()}
            href={subitem.href}
            className="flex gap-2 items-center"
          >
            {Icon && <Icon strokeWidth={1.5} />}
            {subitem.label}
          </a>
        </li>
      );
    }) ?? []
  );
};
const DropdownMenu = ({
  hoveredMenu,
  handleMouseLeave,
  navigationDropdown,
}: {
  hoveredMenu: string;
  handleMouseLeave: () => void;
  navigationDropdown: NavigationProps[];
}) => {
  return (
    <div
      className="ease-in duration-300 area-menu bg-transparent w-screen absolute left-0 z-20 pt-7 "
      style={{ boxShadow: "0px 100vh 0px 100vh rgba(0, 0, 0, 0.2)" }}
    >
      <div className="absolute flex w-full justify-center mt-[-18px]">
        <span className="bg-blue-500 text-white py-2 px-6 min-w-[200px] text-center rounded-full">
          {hoveredMenu}
        </span>
      </div>
      <div className="dropdown-menu px-8 py-8 bg-white border-b-4 border-b-blue-500 border-t-2 border-t-gray-200">
        <ul className="grid grid-cols-5 gap-10">
          <SelectedCategoryMenus
            navigationDropdown={navigationDropdown}
            handleMouseLeave={handleMouseLeave}
            selectedCategory={hoveredMenu}
          />
        </ul>
      </div>
    </div>
  );
};

const MenuHorizontal = ({ navigation }: { navigation: NavigationProps[] }) => {
  return (
    <nav>
      <ul className="flex items-center">
        <Categories navigation={navigation} />
      </ul>
    </nav>
  );
};

export default MenuHorizontal;
