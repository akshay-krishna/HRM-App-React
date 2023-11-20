import Avatar from "../../components/Icons/Avatar";
import { ViewDetailsSection } from "./ViewDetailsStyled";
import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import { useLocation } from "react-router";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { useEmployeeContext } from "../../context/EmployeeContext";

const ViewDetails = () => {
  const { employeeData } = useEmployeeContext();

  const location = useLocation();
  if (employeeData.length == 0) {
    return <div>Loading...</div>;
  }
  employeeData.map((emp) => {
    console.log(typeof emp.id, "empid type");
  });
  const id = Number(location.pathname.split("/")[2]);
  console.log(typeof id, "loc type");
  const viewEmployee: IallTypeDataListing | undefined = employeeData.find(
    (emp) => emp.id === id
  );
  const renderSkills = () => {
    return viewEmployee?.skills.map((sk: IskillID, index: number) => {
      if (index === viewEmployee?.skills.length - 1)
        return <span key={sk.id}>{sk.skill}</span>;
      else return <span key={sk.id}>{sk.skill}, </span>;
    });
  };

  return (
    <ViewDetailsSection className="view-employee-modal flex-row ">
      <div className="flex-column left-bar">
        <span className="profile-photo-circle">
          <Avatar className="profile-photo-view" />
        </span>

        <p className="emp-id-display">{viewEmployee?.id}</p>
        <p className="dept-display">
          {viewEmployee?.department
            ? viewEmployee?.department.department
            : "Department: N/A"}
        </p>
        <p className="working-location-display">
          {viewEmployee?.loc ? viewEmployee?.loc : "Location: N/A"}
        </p>
      </div>
      <div className="flex-row right-bar">
        <div className="flex-column personal-details">
          <div>
            <p className="name-display">
              {viewEmployee?.firstName + " " + viewEmployee?.lastName}
            </p>
            <p className="role-display">
              {viewEmployee?.role ? viewEmployee?.role.role : "Role: N/A"}
            </p>
          </div>
          <p className="doj-display">
            Date of Joining: {viewEmployee?.dateOfJoining}
          </p>
          <p className="dob-display">Date of Birth: {viewEmployee?.dob}</p>
          <p className="phone-no-display">
            Phone Number: {viewEmployee?.phone}
          </p>
          <p className="emailID-display">Email ID: {viewEmployee?.email}</p>
          <div className="address-display-container flex-row">
            <label htmlFor="address-display">Address:&nbsp;</label>
            <div className="address-display">{viewEmployee?.address}</div>
          </div>
        </div>
        <div className="flex-column skill-details">
          <p>Skills</p>
          <div className="show-skills">
            <p className="show-skills-p">{renderSkills()}</p>
          </div>
        </div>
      </div>
    </ViewDetailsSection>
  );
};

export default ViewDetails;
