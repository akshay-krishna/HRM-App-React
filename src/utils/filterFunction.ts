import { IallTypeDataListing } from "../interfaces/CommonInterfaces/Icommon";

export const filterArray = (array: IallTypeDataListing[], filterBy: any) => {
  let data = [...array];
  // console.log(data);
  if (filterBy.skills.length === 0) {
    return data;
  } else {
    const filteredEmployees = data.filter((employee) => {
      return filterBy.skills.every((selectedSkill: any) =>
        employee.skills.some(
          (employeeSkill: any) => employeeSkill.id === selectedSkill.id
        )
      );
    });
    return filteredEmployees;
  }
};
