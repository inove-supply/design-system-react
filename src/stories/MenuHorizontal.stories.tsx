import type { Meta, StoryObj } from "@storybook/react";
import MenuHorizontal from "../components/MenuHorizontal/MenuHorizontal";

const meta: Meta<typeof MenuHorizontal> = {
  title: "Example/MenuHorizontal",
  component: MenuHorizontal,
  parameters: {
    // layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MenuHorizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuHorizontalDefault: Story = {
  args: {
    navigation: [
      {
        label: "Dashboard",
        href: "/",
      },
      {
        label: "WCS",
        subNav: [
          {
            label: "Estações",
            href: "/wcs/stations",
            icon: "StationIcon",
          },
          {
            label: "Mapas",
            href: "/wcs/maps",
            icon: "MapIcon",
          },
          {
            label: "Rampas",
            href: "/wcs/ramps",
            icon: "RampIcon",
          },
          {
            label: "Sorters",
            href: "/wcs/sorters",
            icon: "SorterIcon",
          },
          {
            label: "Rejeito",
            href: "/wcs/rejects",
            icon: "RejectIcon",
          },
          {
            label: "Ondas",
            href: "/wcs/waves",
            icon: "BoxesIcon",
          },
        ],
      },
      {
        label: "Administração",
        subNav: [
          {
            label: "Usuários",
            href: "/admin/users",
            icon: "UsersIcon",
          },
        ],
      },
      {
        label: "Histórico",
        subNav: [
          {
            label: "Logs",
            href: "/hist/logs",
            icon: "LogIcon",
          },
          {
            label: "Rejeito",
            href: "/hist/rejects",
            icon: "RejectIcon",
          },
          {
            label: "Produção",
            href: "/hist/production",
            icon: "RejectIcon",
          },
          {
            label: "Ordens",
            href: "/hist/orders",
            icon: "RejectIcon",
          },
        ],
      },
      {
        label: "Sistema",
        subNav: [
          {
            label: "Parâmetros",
            href: "/system/parameters",
            icon: "ParamIcon",
          },
        ],
      },
    ],
  },
};
