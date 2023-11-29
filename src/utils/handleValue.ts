export const handleValue = (data: any, type: any): string => {
  switch (type) {
    case "role":
      return data.role;
    case "department":
      return data.department;
    case "location":
      return data.location;
    case "skills":
      return data.skill;
    default:
      return "";
  }
};
