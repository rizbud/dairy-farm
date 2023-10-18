import { Cow, Dairy, Syringe, Wheat } from "../images";

export interface Menu {
  label: string;
  image: any;
}

export const MENU: ReadonlyArray<Menu> = [
  {
    label: "Sales",
    image: Cow,
  },
  {
    label: "Doctors",
    image: Syringe,
  },
  {
    label: `Dairy\nManagement`,
    image: Dairy,
  },
  {
    label: `Feed\nManagement`,
    image: Wheat,
  },
];
