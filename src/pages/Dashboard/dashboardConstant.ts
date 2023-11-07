import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import { Iskill } from "../../interfaces/CommonInterfaces/Iskill";
import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";

export const employeeArray: IallTypeDataListing[] = [
  {
    id: "1001",
    fName: "Ashwin",
    lName: "Nair",
    role: "Engineer",
    dept: "Development",
    loc: "Trivandrum",
    doj: "11-07-2023",
    dob: "24-07-2000",
    phnNo: "9985685739",
    emailID: "ashwin.nair@xyz.com",
    address: "Kulathoor, Trivandrum",
    skill: ["HTML-CSS", "JavaScript"],
  },
  {
    id: "1002",
    fName: "Nijin",
    lName: "Nazar",
    role: "Lead Engineer",
    dept: "Development",
    loc: "Banglore",
    doj: "11-07-2023",
    dob: "21-07-2001",
    phnNo: "9985685739",
    emailID: "nijin.nazar@xyz.com",
    address: "Anchal, Kollam",
    skill: ["HTML-CSS", "JavaScript", "React"],
  },
  {
    id: "1003",
    fName: "Issac",
    lName: "Varghese",
    role: "Senior Engineer",
    dept: "DevOps",
    loc: "Trivandrum",
    doj: "11-07-2023",
    dob: "19-11-2001",
    phnNo: "9987654321",
    emailID: "issac.varghese@xyz.com",
    address: "Adoor, Pathanamthitta",
    skill: ["GIT", "MySQL"],
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

export const skills: Iskill[] = [
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
