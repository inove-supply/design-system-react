import React from "react";

import { useMemo, useState } from "react";
import iconMap from "../icons/_iconMap";
import { Tooltip } from "../components";

export const Icons = ({
  size,
  color,
  strokeWidth,
}: {
  size: number;
  color: string;
  strokeWidth: number;
}) => {
  const icons = Object.keys(iconMap);
  const [searchText, setSearchText] = useState("");

  const filteredIcons = useMemo(() => {
    return icons.filter((icon) =>
      icon.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [icons, searchText]);

  return (
    <div className="storybook-page flex flex-col justify-center">
      <label htmlFor="search">Pesquisa</label>
      <input
        className="mb-8 rounded-lg border-2 border-gray-300 p-2"
        type="text"
        id="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="grid grid-cols-12 gap-8">
        {filteredIcons.map((icon) => {
          const IconToRender = iconMap[icon];

          return (
            <Tooltip copyToClipboard text={icon} key={icon}>
              <div className="w-fit rounded-xl bg-gray-200 p-4">
                <IconToRender
                  color={color}
                  size={size}
                  strokeWidth={strokeWidth}
                />
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
