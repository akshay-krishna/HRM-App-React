import { IallTypeDataListing } from "../../interfaces/IcommonInterface";
import { IskillInterface } from "../../interfaces/IskillInterface";
import { ItableHeader } from "../../interfaces/ItableInterface";

export const employeeArray: IallTypeDataListing[] = [
  {
    id: "1",
    fName: "Ashwin",
    lName: "Nair",
    role: "Engineer",
    dept: "Development",
  },
  {
    id: "2",
    fName: "Nijin",
    lName: "Nazar",
    role: "Lead Engineer",
    dept: "Development",
  },
  {
    id: "3",
    fName: "Issac",
    lName: "Varghese",
    role: "Senior Engineer",
    dept: "DevOps",
  },
];

export const employeeHeaderArray: ItableHeader[] = [
  {
    id: "id",
    name: "Employee Id",
  },
  {
    id: "fName",
    name: "First Name",
  },
  {
    id: "lName",
    name: "Last Name",
  },
  {
    id: "role",
    name: "Role",
  },
  {
    id: "dept",
    name: "Department",
  },
  {
    id: "action",
    name: "Actions",
  },
];

export const skills: IskillInterface[] = [
  {
    id: "html-css",
    name: "HTML-CSS",
  },
  {
    id: "js",
    name: "Javascript",
  },
  {
    id: "react",
    name: "React.js",
  },
  {
    id: "ts",
    name: "TypeScript",
  },
  {
    id: "ang",
    name: "AngularJS",
  },
  {
    id: "node",
    name: "Node.js",
  },
  {
    id: "vue",
    name: "Vue.js",
  },
];
