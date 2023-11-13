import Avatar from "../../components/Icons/Avatar";
import { ViewDetailsSection } from "./ViewDetailsStyled";
import { employeeArray } from "../Dashboard/dashboardConstant";
import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import { useLocation } from "react-router";
import { IstringID } from "../../interfaces/CommonInterfaces/IstringID";

const ViewDetails = () => {
  const location = useLocation();
  const viewEmployee: IallTypeDataListing | undefined = employeeArray.find(
    (emp) => emp.id === location.pathname.split("/")[2]
  );
  const skill: IstringID[] = viewEmployee?.skill as IstringID[];
  console.log(skill);
  const renderSkills = () => {
    return skill.map((sk, index) => {
      console.log(sk, "sk");
      if (index === skill.length - 1) return <span key={sk.id}>{sk.name}</span>;
      else return <span key={sk.id}>{sk.name}, </span>;
    });
  };

  return (
    <ViewDetailsSection className="view-employee-modal flex-row ">
      <div className="flex-column left-bar">
        <span className="profile-photo-circle">
          <Avatar className="profile-photo-view" />
        </span>

        <p className="emp-id-display">{viewEmployee?.id}</p>
        <p className="dept-display">{viewEmployee?.dept}</p>
        <p className="working-location-display">{viewEmployee?.loc}</p>
      </div>
      <div className="flex-row right-bar">
        <div className="flex-column personal-details">
          <div>
            <p className="name-display">
              {viewEmployee?.fName + " " + viewEmployee?.lName}
            </p>
            <p className="role-display">{viewEmployee?.role}</p>
          </div>
          <p className="doj-display">Date of Joining: {viewEmployee?.doj}</p>
          <p className="dob-display">Date of Birth: {viewEmployee?.dob}</p>
          <p className="phone-no-display">
            Phone Number: {viewEmployee?.phnNo}
          </p>
          <p className="emailID-display">Email ID: {viewEmployee?.emailID}</p>
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
