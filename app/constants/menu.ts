export interface Menu {
  label: string;
  image: any;
}

export const MENU: ReadonlyArray<Menu> = [
  {
    label: "Sales",
    image: require("../../assets/cow.png"),
  },
  {
    label: "Doctors",
    image: require("../../assets/syringe.png"),
  },
  {
    label: `Dairy\nManagement`,
    image: require("../../assets/dairy.png"),
  },
  {
    label: `Feed\nManagement`,
    image: require("../../assets/wheat.png"),
  },
];
