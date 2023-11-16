import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import "./styles.css";

export const DropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          Icon Menu
        </button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="DropdownMenuContent"
          sideOffset={5}
        >
          <DropdownMenuPrimitive.Item className="DropdownMenuItem">
            New Tab <div className="RightSlot">⌘+T</div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="DropdownMenuItem">
            New Window <div className="RightSlot">⌘+N</div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="DropdownMenuItem" disabled>
            New Private Window <div className="RightSlot">⇧+⌘+N</div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Sub>
            <DropdownMenuPrimitive.SubTrigger className="DropdownMenuSubTrigger">
              More Tools
              <div className="RightSlot">Right Icon</div>
            </DropdownMenuPrimitive.SubTrigger>
            <DropdownMenuPrimitive.Portal>
              <DropdownMenuPrimitive.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenuPrimitive.Item className="DropdownMenuItem">
                  Save Page As… <div className="RightSlot">⌘+S</div>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item className="DropdownMenuItem">
                  Create Shortcut…
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item className="DropdownMenuItem">
                  Name Window…
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Separator className="DropdownMenu.Separator" />
                <DropdownMenuPrimitive.Item className="DropdownMenuItem">
                  Developer Tools
                </DropdownMenuPrimitive.Item>
              </DropdownMenuPrimitive.SubContent>
            </DropdownMenuPrimitive.Portal>
          </DropdownMenuPrimitive.Sub>

          <DropdownMenuPrimitive.Separator className="DropdownMenuSeparator" />

          <DropdownMenuPrimitive.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
              Check Icon
            </DropdownMenuPrimitive.ItemIndicator>
            Show Bookmarks <div className="RightSlot">⌘+B</div>
          </DropdownMenuPrimitive.CheckboxItem>
          <DropdownMenuPrimitive.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
              Check Icon
            </DropdownMenuPrimitive.ItemIndicator>
            Show Full URLs
          </DropdownMenuPrimitive.CheckboxItem>

          <DropdownMenuPrimitive.Separator className="DropdownMenuSeparator" />

          <DropdownMenuPrimitive.Label className="DropdownMenuLabel">
            People
          </DropdownMenuPrimitive.Label>
          <DropdownMenuPrimitive.RadioGroup
            value={person}
            onValueChange={setPerson}
          >
            <DropdownMenuPrimitive.RadioItem
              className="DropdownMenuRadioItem"
              value="pedro"
            >
              <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
                Icon Dot
              </DropdownMenuPrimitive.ItemIndicator>
              Pedro Duarte
            </DropdownMenuPrimitive.RadioItem>
            <DropdownMenuPrimitive.RadioItem
              className="DropdownMenuRadioItem"
              value="colm"
            >
              <DropdownMenuPrimitive.ItemIndicator className="DropdownMenuItemIndicator">
                Icon Dot
              </DropdownMenuPrimitive.ItemIndicator>
              Colm Tuite
            </DropdownMenuPrimitive.RadioItem>
          </DropdownMenuPrimitive.RadioGroup>

          <DropdownMenuPrimitive.Arrow className="DropdownMenuArrow" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

