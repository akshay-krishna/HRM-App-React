import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import {
  IskillID,
} from "../../interfaces/CommonInterfaces/IstringID";
import { ItableHeader } from "../../interfaces/DashboardInterface/ItableHeader";

export const employeeArray: IallTypeDataListing[] = [
  {
    id: "1001",
    fName: "Ashwin",
    lName: "Nair",
    role: "Engineer",
    dept: "Development",
    loc: "Trivandrum",
    doj: "2023-07-11",
    dob: "2000-07-24",
    phnNo: "9985685739",
    emailID: "ashwin.nair@xyz.com",
    address: "Kulathoor, Trivandrum",
    skill: [
      {
        id: "html-css",
        name: "HTML-CSS",
      },
      {
        id: "js",
        name: "Javascript",
      },
    ],
  },
  {
    id: "1002",
    fName: "Nijin",
    lName: "Nazar",
    role: "Lead Engineer",
    dept: "Development",
    loc: "Banglore",
    doj: "2023-07-11",
    dob: "2001-07-21",
    phnNo: "9985685739",
    emailID: "nijin.nazar@xyz.com",
    address: "Anchal, Kollam",
    skill: [
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
    ],
  },
  {
    id: "1003",
    fName: "Issac",
    lName: "Varghese",
    role: "Senior Engineer",
    dept: "DevOps",
    loc: "Trivandrum",
    doj: "2023-07-11",
    dob: "2001-11-19",
    phnNo: "9987654321",
    emailID: "issac.varghese@xyz.com",
    address: "Adoor, Pathanamthitta",
    skill: [
      {
        id: "git",
        name: "GIT",
      },
      {
        id: "mysql",
        name: "MySQL",
      },
      {
        id: "docker",
        name: "Docker",
      },
      {
        id: "aws",
        name: "AWS",
      },
    ],
  },
];

export const employeeHeaderArray: ItableHeader[] = [
  {
    id: "id",
    name: "Employee Id",
  },
  {
    id: "firstName",
    name: "First Name",
  },
  {
    id: "lastName",
    name: "Last Name",
  },
  {
    id: "role",
    name: "Role",
  },
  {
    id: "department",
    name: "Department",
  },
  {
    id: "action",
    name: "Actions",
  },
];

export const skills: IskillID[] = [
  {
    id: "html-css",
    skill: "HTML-CSS",
  },
  {
    id: "js",
    skill: "Javascript",
  },
  {
    id: "react",
    skill: "React.js",
  },
  {
    id: "ts",
    skill: "TypeScript",
  },
  {
    id: "ang",
    skill: "AngularJS",
  },
  {
    id: "node",
    skill: "Node.js",
  },
  {
    id: "vue",
    skill: "Vue.js",
  },
  {
    id: "git",
    skill: "GIT",
  },
  {
    id: "mysql",
    skill: "MySQL",
  },
  {
    id: "docker",
    skill: "Docker",
  },
  {
    id: "aws",
    skill: "AWS",
  },
];
